// ---------------------Pdf 1 Lab1 Login ------------------------------------------------------

// let username = prompt('Please enter your username');
// let password = prompt('Please enter your password');
// if (username=="admin" && password=="421$$")
// {
//     alert('Welcome login success');
// }
// else if( username !== "admin"){
//     alert("username entered wrong");
// }
// else if(password !=="421$$"){
//     alert("Password entered wrong");
// }
// else{
//     alert('Invalid username or password');
// }

// -----------------------Pdf 2 Lab2 Calc + Bonus -----------------------------------------------------


let result = 0;
var firstNumber;
do{
    if (firstNumber === undefined) {
        firstNumber = Number(prompt('Please enter first number'));   
         if (firstNumber === null) {
        break;
    }
    }
let secondNumber = Number(prompt('Please enter second number'));
if (secondNumber === null) {
    break; 
  }
let operator = prompt('Please choose on the the following operator ( +  - / *  % )');
if (!["+", "-", "*", "/", "%"].includes(operator)) {
    alert("Invalid operation. Please enter one of the following: +, -, *, /, %");
    continue;
  }
  if (operator === null || operator.trim() === '') {
    break;
}

switch(operator) {
    
    case "+" :
        result =firstNumber + secondNumber;
        alert("The sum of 2 numbers are " + result);
        break;
    case "-" :
        result =firstNumber - secondNumber;
        alert("The subtract of 2 numbers are " +result);
        break;
    case "/" :
        result =firstNumber / secondNumber;
        if (secondNumber === 0) {
            alert("Division by zero is not allowed.");
            continue;
          }
        alert("The division of 2 numbers are " +result);
         break;   
    case "*" :
        result =firstNumber * secondNumber;
        alert("The multiplication of 2 numbers are " +result);
        break;
    case "%" :
        result =firstNumber % secondNumber;

        alert("The division of 2 numbers are " +result);
        break;
      
    }
     
 userInput = prompt('Do you want to use your last result ' + result);
 if (userInput.toLowerCase() === 'yes') {
     firstNumber = result;
 }

}
 while(confirm("Continue? (Y/N)"));


 // Rest of your code

// -----------------------Pdf 2 lab1------------------------------------------------
// let enteredNumbers = Number(prompt('Please enter the number of values you want to get the sum of'));
// let i =0;
// let numbers = [];
// let sum = 0 ;
// for(i; i<enteredNumbers ; i++){
//     let input = Number(prompt('Enter a value'));
//     numbers.push(input);
//     sum += input;
// }
// let averageOfNumbers = sum / numbers.length;
// alert('The sum of your entered values is '+ sum +' ,while the average of your entered values is ' +averageOfNumbers);

// -----------------------Pdf2 lab2 + Bonus ------------------------------------------------

// let contact = [];
// let area;
// while (true) {
  
//     let userOperation = prompt('Please choose on the the following(add or search)');
//         if(userOperation==="add"){
//             var name = prompt('Please enter name of the contact');
//             var phoneNumber= prompt('Please enter phone number ');
//             let addedContact = {
//                 name: name,
//                 phoneNumber: phoneNumber,
//             };
//             contact.push(addedContact);
//             alert(`Contact ${name} added successfully.`);
//         } 
//         else if(userOperation === "search"){
//             searchFor = prompt('Enter a name or phone number to search');
//             let searchResults = contact.filter(contact => 
//                 contact.name.toLowerCase().includes(searchFor.toLowerCase()) ||
//                 contact.phoneNumber.includes(searchFor)
//             );
//                 if (searchResults.length > 0) {
//                     alert('Search results:\n' + JSON.stringify(searchResults, null, 2) );
//                 } else {
//                     alert('No contacts found matching the search criteria.');
//                 }
//         }
//         else if (userOperation.toLowerCase() === "exit") {
        
//             break;
//         }
//         else{
//         alert('not valid operation');
//         }
//     }

    ///// Bonus -------------------------------------------------------
    // while(true){
    // var shape = prompt("Enter the name of the shape you want to calculate area for");
    // var diminsions = prompt('What is  dimensions of that shape?');
    // switch(shape.toLowerCase()) {
    //     case 'circle' :
    //         var radius = Number(prompt('Enter the radius of the circle'));
    //         area = 2 * radius * Math.PI;
    //         alert(`The area of circle = ${area}`);
    //         break;
    //     case 'triangle' :
    //         var tbase = Number(prompt('Enter the base'));
    //         var theight = Number(prompt('Enter the height'));
    //         area = 0.5 * tbase * theight;
    //         alert(`The area of triangle = ${area}`);
    //         break;
    //     case 'square' :
    //         var side= Number(prompt('Enter the  length of the side'));
    //         area = Math.pow(side,side);
    //         alert(`The area of square = ${area}`);
    //         break;    
    //     case 'rectangle' :
    //         var rwidth = Number(prompt('Enter the width'));
    //         var rheight = Number(prompt('Enter the height'));
    //         area = rwidth * rheight;
    //         alert(`The area of rectangle = ${area}`);
    //         break; 
    //     case 'parallelogram' :
    //         var pbase = Number(prompt('Enter the base'));
    //         var pheight = Number(prompt('Enter the height'));
    //         area = pbase * pheight;
    //         alert(`The area of parallelogram = ${area}`);
    //         break;
    //     case 'trapezium ' :
    //         var side1= Number(prompt('Enter the  length of the first side'));
    //         var side2= Number(prompt('Enter the  length of the second side'));
    //         var height = Number(prompt('Enter the  length of the height'));
    //         area = 0.5(side1 +side2) * height;
    //         alert(`The area of trapezium = ${area}`);
    //         break;    
    //     case 'ellipse' :
    //         var minorAxis = Number(prompt('Enter the length of a'));
    //         var majorAxis = Number(prompt('Enter the length of b'));
    //         area =Math.PI *minorAxis * majorAxis;
    //         alert(`The area of ellipse = ${area}`);
    //         break;         
    // }

    // }
    