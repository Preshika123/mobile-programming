let balance = 10000;
let correctPin = "1234";


// Deposit Money (PIN required here)
function depositMoney() {

    let enteredPin = prompt("Enter your ATM PIN:");

    if (enteredPin == correctPin) {

        let amount = Number(document.getElementById("amount").value);

        if (amount > 0) {
            balance += amount;

            document.getElementById("balance").innerText =
                "Current Balance: Rs. " + balance;

            alert("Rs. " + amount + " deposited successfully.");
        } else {
            alert("Enter a valid amount.");
        }

    } else {
        alert("Incorrect PIN");
    }
}

// Withdraw Money (no PIN required as per your logic)
function withdrawMoney() {

    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {
        alert("Invalid amount.");
    }
    else if (amount > balance) {
        alert("Insufficient balance.");
    }
    else {
        balance -= amount;

        document.getElementById("balance").innerText =
            "Current Balance: Rs. " + balance;

        alert("Rs. " + amount + " withdrawn successfully.");
    }
}