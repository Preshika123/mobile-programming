
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getDatabase, ref, set, update, } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCupEcB0cxUFIyYm14CzxdJT6Fo5b3_9O4",
    authDomain: "contact-us-b2f0d.firebaseapp.com",
    projectId: "contact-us-b2f0d",
    storageBucket: "contact-us-b2f0d.firebasestorage.app",
    messagingSenderId: "341090253889",
    appId: "1:341090253889:web:77ed7497835f16bd041ac0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
console.log(db)

let currentId = null;

// Submit
window.submitData = function () {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    currentId = Date.now().toString();

    set(ref(db, "contacts/" + currentId), {
        id: currentId,
        name,
        email,
        subject,
        message
    })
        .then(() => {

            // Show values in details form
            document.getElementById("details-name").value = name;
            document.getElementById("details-email").value = email;
            document.getElementById("details-email").value = subject;
            document.getElementById("details-message").value = message;

            alert("Data Submitted");
        })
        .catch((error) => {
            console.log(error);
        });
};


// Edit
window.editData = function () {

    document.getElementById("name").value =
        document.getElementById("details-name").value;

    document.getElementById("email").value =
        document.getElementById("details-email").value;
    
    document.getElementById("subject").value =
        document.getElementById("details-subject").value;

    document.getElementById("message").value =
        document.getElementById("details-message").value;
};


// Update
window.updateData = function () {

    if (!currentId) {
        alert("Please submit data first.");
        return;
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject= document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    update(ref(db, "contacts/" + currentId), {
        name,
        email,
        subject,
        message
    })
        .then(() => {

            // Update details form
            document.getElementById("details-name").value = name;
            document.getElementById("details-email").value = email;
            document.getElementById("details-subject").value = subject;
            document.getElementById("details-message").value = message;

            alert("Data Updated");
        })
        .catch((error) => {
            console.log(error);
        });
};
