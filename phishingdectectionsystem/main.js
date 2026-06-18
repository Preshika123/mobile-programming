import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "phishingdectationsystem.firebaseapp.com",
    databaseURL: "https://phishingdectationsystem-default-rtdb.firebaseio.com",
    projectId: "phishingdectationsystem",
    storageBucket: "phishingdectationsystem.firebasestorage.app",
    messagingSenderId: "1091046121523",
    appId: "1:1091046121523:web:1d5b42731c776470b78346"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.scanURL = function () {

    const url = document.getElementById("urlInput").value;

    if (url === "") {
        alert("Please enter a URL");
        return;
    }

    let status = "Safe";
    let color = "green";

    if (
        url.includes("login") ||
        url.includes("verify") ||
        url.includes("bank") ||
        url.includes("paypal") ||
        url.includes("security")
    ) {
        status = "Phishing";
        color = "red";
    }

    document.getElementById("result").innerHTML =
        `<h3 style="color:${color};">Result: ${status}</h3>`;

    // Save scan to Firebase
    push(ref(db, "scans"), {
        url: url,
        status: status,
        timestamp: new Date().toLocaleString()
    });
};

// Load scan history
const scansRef = ref(db, "scans");

onValue(scansRef, (snapshot) => {

    const data = snapshot.val();

    let html = "";

    if (data) {
        for (let id in data) {
            html += `
                <div class="card">
                    <strong>${data[id].url}</strong><br>
                    <span class="${
                        data[id].status === "Safe"
                            ? "safe"
                            : "danger"
                    }">
                        ${data[id].status}
                    </span><br>
                    <small>${data[id].timestamp}</small>
                </div>
            `;
        }
    }

    document.getElementById("scanHistory").innerHTML = html;
});