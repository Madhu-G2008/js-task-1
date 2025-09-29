// ATM Simulator
let balance = 1000;  // Initial balance
let pin = 1234;      // Correct PIN

// Ask user for PIN
let userPin = prompt("Enter your 4-digit PIN:");

if (parseInt(userPin) === pin) {
    // Show menu
    let choice = prompt("Choose an option:\n1. Withdraw\n2. Deposit\n3. Check Balance");

    if (choice == "1") {
        // Withdraw
        let amount = parseInt(prompt("Enter amount to withdraw:"));
        if (amount <= balance) {
            balance -= amount;
            alert("Withdrawal successful! New balance: " + balance);
        } else {
            alert("Insufficient balance!");
        }

    } else if (choice == "2") {
        // Deposit
        let amount = parseInt(prompt("Enter amount to deposit:"));
        balance += amount;
        alert("Deposit successful! New balance: " + balance);

    } else if (choice == "3") {
        // Check Balance
        alert("Your current balance is: " + balance);

    } else {
        alert("Invalid choice!");
    }

} else {
    alert("Incorrect PIN!");
}