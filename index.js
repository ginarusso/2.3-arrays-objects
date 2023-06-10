/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/

let grades = [56, 87, 99, 40]
// console.log(grades)
grades.push(68)
// console.log(grades)
grades.shift()
// console.log(grades)
grades[2] = 60
// console.log(grades)

//loop through the grades and add each item
let sum = 0

for (let i = 0; i < grades.length; i++) {
    // console.log(grades[i])
    sum += grades[i]
}
const average = sum/grades.length
console.log(`The average of the items in the array is ${average}.`)


/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/

const vehicle = {
    name: "car",
    brand: "Ferrari",
    yearOfMake: 2023,
    numberOfWheels: 4,
    isEnviromentallyFriendly: true
}

for (let property in vehicle) {
    console.log(`${property}: ${vehicle[property]}`) 
}