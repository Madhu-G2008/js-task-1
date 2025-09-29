// Step 1: Ask for distance
let distance = Number(prompt("Enter the distance in km:"));

// Step 2: Ask for transport type
let transport = prompt("Enter transport type (Bus / Train / Flight):");

// Step 3: Set fare per km using switch
let farePerKm = 0;

switch (transport.toLowerCase()) {
    case "bus":
        farePerKm = 3;
        break;
    case "train":
        farePerKm = 5;
        break;
    case "flight":
        farePerKm = 10;
        break;
    default:
        alert("Invalid transport type!");
        farePerKm = 0;
}

// Step 4: Calculate total fare
let totalFare = distance * farePerKm;

// Step 5: Show result
if (farePerKm > 0) {
    alert("Total Fare: " + totalFare);
}
