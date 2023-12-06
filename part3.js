// pdf 3
//EX 1: Use 10 of Objects predefined methods and explain them.
// All predefined methods of object are rarely need to invoke the toString method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.
var user = {name:'Rehab', age:23,address:'alex'};
//1-Object.values() :Returns an array containing the property values of an object.
console.log(Object.values(user));//output:['Rehab', 23, 'alex']

//2-Object.keys() :Returns an array containing the property names (keys) of the object user.
console.log(Object.keys(user)); //output:['name', 'age', 'address']

// 3-Object.entries():Returns an array of arrays, where each inner array consists of a key-value pair from the object user.
console.log(Object.entries(user)); //output :  [Array(2), Array(2), Array(2)]

//4-object.freeze(): Prevents any modifications to the object, such as adding or removing properties, or modifying existing properties
console.log(Object.freeze(user));
user.address='cairo';
console.log(user); // output :{name: 'Rehab', age: 23, address: 'alex'}

//5-Object.seal() :preventing the addition or deletion of properties. However, you can still modify the values of existing properties.
console.log(Object.seal(user));
var modifications =user.age=20;
console.log(modifications); //output : 20
user.gender='female'
console.log(user); //nothing happened

//6-hasOwnProperty:Checks if an object has a specific property as its own property
console.log(user.hasOwnProperty('name')); //output:true
console.log(user.hasOwnProperty('gender')); //output:false

// 7-toString():it returns a string representation of the object's properties and values.
console.log(user.toString()); //output: [object Object]

// 8-valueOf(): it returns a value that represents the object (usually a special object identifier).
console.log(user.valueOf()); //output: {name: 'Rehab', age: 23, address: 'alex'}

// 9-assign():Copies the values of all enumerable properties from one or more source objects to a target object. It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const mergedObject = Object.assign(target, source);
console.log(mergedObject); //output: {a: 1, b: 3, c: 4}

//10-getOwnPropertyNames():Returns an array of all property names 
console.log(Object.getOwnPropertyNames(user)); //output:['name', 'age', 'address']

// --------------------------------------------------------------------------------------

// Ex 2 :
// Use 10 of Arrays predefined methods and explain them.
var number = [1,2,3];
//1-concat():This method is used to merge two or more arrays. 
var number2 = [4,5,6];
console.log(number.concat(number2)); //output: [1, 2, 3, 4, 5, 6]

// 2-sort():sort the elements of the array in ascending order by default
var unsorted = ['c','n','a','r','z','o','p'];
console.log(unsorted.sort()); //output: ['a', 'c', 'n', 'o', 'p', 'r', 'z']

// 3-indexOf(): returns the index of the element
console.log(unsorted.indexOf('r')); //output: 5

//4-slice():Returns a shallow copy of a portion of an array into a new array object selected from start to end
console.log(unsorted.slice(1,5)); //output :['c', 'n', 'o', 'p']

//5-push(): This method adds one or more elements to the end of the array and returns the new array length.
console.log(number.push(4,5,6));
console.log(number); //output:[1, 2, 3, 4, 5, 6]

//6-join():combines all elements of the array into a single string ,can be separated by comma
console.log(number.join("")); //output :123456

//7-pop() :This method removes the last element from the array and returns the removed element. If the array is empty, it returns undefined
console.log(unsorted.pop()); 
console.log(unsorted); //output: ['a', 'c', 'n', 'o', 'p', 'r']

//8-map(): Creates a new array by applying a function to each element in the existing array.
const squaredNumbers = number.map(num => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25, 36]

//9-forEach() :This method iterates over each element in the array and calls the provided callbackFn function for each element. It doesn't modify the original array and returns undefined.
number.forEach((number) => console.log(number * 2)); //output 2
//  4
//  6
//  8
//  10
//  12

//10-Returns the first element in the array that satisfies the provided testing function
const foundNumber = number.find(num => num > 2);
console.log(foundNumber); //output: 3

// --------------------------------------------------------------------------------------
// Ex3:
// Write a nested function and explain the closure -> lexical
// environment.

//closure gives you access to an outer function's scope from an inner function

function outerFunction(value) {
    let counter = value;
    function innerFunction(){
        counter ++ ;
        return counter;
    }
    return innerFunction;

}
const incrementer = outerFunction(10); // Create a closure with initial value 10

console.log(incrementer()); // Output: 11
console.log(incrementer()); // Output: 12