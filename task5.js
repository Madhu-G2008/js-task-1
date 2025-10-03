// Step 1: Get monthly income
let income = Number(prompt("Enter your monthly income:"));

// Step 2: Get expenses for categories
let rent = Number(prompt("Enter your rent expense:"));
let groceries = Number(prompt("Enter your groceries expense:"));
let transport = Number(prompt("Enter your transport expense:"));

// Step 3: Calculate total expenses
let totalExpenses = rent + groceries + transport;

// Step 4: Calculate remaining balance
let remaining = income - totalExpenses;

// Step 5: Calculate percentage spent
let percentageSpent = (totalExpenses / income) * 100;

// Step 6: Check overspending
let message = "";
if (totalExpenses > income) {
    message = "You are overspending!";
} else {
    message = "You are within budget.";
}

// Step 7: Show results
alert(
    "Total Expenses: " + totalExpenses +
    "\nRemaining Balance: " + remaining +
    "\nPercentage Spent: " + percentageSpent.toFixed(0) + "%" +
    "\nMessage: " + message
);
