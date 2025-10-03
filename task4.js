let score = 0;

// Question 1
let q1 = prompt("Q1: What is 2 + 2?\n1. 3\n2. 4\n3. 5");
switch (q1) {
    case "2":
        score++;
        break;
}

// Question 2
let q2 = prompt("Q2: What is the capital of France?\n1. Paris\n2. London\n3. Rome");
switch (q2) {
    case "1":
        score++;
        break;
}

// Question 3
let q3 = prompt("Q3: Which planet is known as the Red Planet?\n1. Earth\n2. Mars\n3. Venus");
switch (q3) {
    case "2":
        score++;
        break;
}

// Final Result
alert("Your Final Score: " + score + "/3");
