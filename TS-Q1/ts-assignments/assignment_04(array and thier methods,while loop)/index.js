// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
const insertAt = (array, index, value) => {
    if (index >= 0) {
        array.splice(index, 0, value);
        return array;
    }
    return "Please enter a valid index.";
};
// we give it type of (string | number)[] because user give any type of input.
let arr = ["hello", 2, "world!", 4, 3];
console.log(insertAt(arr, 2, "goodbye"));
console.log(insertAt(arr, 99, 8)); // if we give index that is not in range then it insert the value at last index
const shoppingCart = [];
const addItem = (itemName, quantity, price) => {
    const newItem = {
        name: itemName,
        quantity: quantity,
        price: price,
    };
    shoppingCart.splice(shoppingCart.length, 0, newItem);
    printCart();
};
const removeItem = (index) => {
    if (index >= 0 && index < shoppingCart.length) {
        shoppingCart.splice(index, 1);
        printCart();
    }
    else {
        console.log("Please enter a valid index");
    }
};
const updateQuantity = (index, newQuantity) => {
    if (index >= 0 && index < shoppingCart.length) {
        const newItem = {
            name: shoppingCart[0].name,
            quantity: newQuantity,
            price: shoppingCart[index].price,
        };
        shoppingCart.splice(index, 1, newItem);
        printCart();
    }
    else {
        console.log("Please enter a valid index!");
    }
};
const printCart = () => {
    console.log("Shopping Cart:");
    shoppingCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - Quantity: ${item.quantity} - Price: $${item.price}`);
    });
    console.log("Total items:", shoppingCart.length);
    console.log("-----------------------------");
};
addItem("Apple", 2, 0.5);
addItem("Banana", 3, 0.3);
addItem("Orange", 1, 0.8);
removeItem(1);
updateQuantity(0, 5);
// - Write a program that uses a while loop to print the first 25 integers.
let i = 1;
while (i <= 25) {
    console.log(`integer: ${i}`);
    i++;
}
// - Write a program that uses a while loop to print the first 10 even numbers.
let j = 2;
while (j <= 20) {
    console.log(`even integer: ${j}`);
    j += 2;
}
// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
const factorial = (num) => {
    if (num >= 0) {
        let result = 1;
        while (num > 0) {
            result *= num;
            num--;
        }
        return `The factorial is ${result}`;
    }
    return "Please enter a positive number";
};
console.log(factorial(5));
//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
const removeNegative = (arr) => {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] < 0) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return arr;
};
let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10,
];
console.log("before removing negative numbers", numbers);
console.log("after removing negative numbers", removeNegative(numbers));
//  - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
const sumOfAllElements = (arr) => {
    let i = 0;
    let sum = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
};
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Sum of all elements are ${sumOfAllElements(nums)}`);
// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
const celsiusToFahrenheit = (arr) => {
    let i = 0;
    while (i < arr.length) {
        arr[i] = (arr[i] * 9) / 5 + 32;
        i++;
    }
    return arr;
};
let temperatures = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Temperatures in celsius:", temperatures);
console.log("Temperatures in Fahrenheit:", celsiusToFahrenheit(temperatures));
//  - Write a program to remove all the odd numbers from an array.
const removeOdd = (arr) => {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 !== 0) {
            arr.splice(i, 1);
        }
        i++;
    }
    return arr;
};
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("before removing odd numbers", numbers1);
console.log("after removing odd numbers", removeOdd(numbers1));
export {};
