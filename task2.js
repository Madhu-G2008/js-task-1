let nam = prompt("Enter a name", "madhu");
let age = Number(prompt("Enter an age", 17));  

function vote() {
    if (age >= 18) {
        alert("Hello " + nam + ", you are eligible to vote");
    } else {
        alert("Hello " + nam + ", you are not eligible to vote");
    }

    if (confirm("Do you want to check again?")) {
        
        nam = prompt("Enter a name", nam);
        age = Number(prompt("Enter an age", age));
        vote();  // Recursive call
    } else {
        alert("Goodbye!");
    }
}

vote(); 
let username=prompt("Enter username","book");
let password=prompt("Enter password","madhu678");
function login(){
if(username=="book"&&password=="madhu678"){
 if(confirm("Do you want to borrow a book?")){
            console.log("1 = Fiction");
            console.log("2 = Science");
            console.log("3 = History");
            let p=Number(prompt("enter a book category",1));
switch(p){
 case 1 :
 alert("You selected Fiction");
 break;
 case 2:
alert("You selected Science");
 break;
 case 3:
  alert("You selected Histroy");
 break;
default:
  alert("Maybe next time! Goodbye!");
  break;
            }
        }
    }
    else{
        alert("Maybe next time! Goodbye!");
    }
}
login();
