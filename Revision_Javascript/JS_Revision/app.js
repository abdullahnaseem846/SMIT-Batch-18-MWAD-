// ***************************************************Task 01**************************************************************************
var name = 'Ali';
var attend = true;
var marks = 120;

var marks = prompt ("Please Enter your marks (0-100)")

if (marks >= 80 && marks <= 100) {
    console.log("A");
} else if (marks >= 70 && marks <= 79){
    console.log("B");
} else if (marks >= 60 && marks <= 69) {
    console.log("C");
} else if (marks >= 50 && marks <= 59) {
    console.log("D");
} else if (marks >= 40 && marks <= 49) {
    console.log("E");
} else if (marks >=0 && marks < 40) {
    console.log("Fail");
} else {
    console.log("Invalid Number, Please Re-Inter your Number");
}



