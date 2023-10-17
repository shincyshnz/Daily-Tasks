"use strict";
// 1-- Infer Types
/* --------------------------------------------------- */
let userName = "shincy";
let age = 10;
let skills = ["JS", "HEMl", "CSS"];
// 2-- UNION
/* --------------------------------------------------- */
// let skills:(string | number)[] = ["JS","HEMl","CSS"]
let userData = {
    name: userName,
    age: age,
};
console.log(userData);
let userDetail = {
    name: userName,
    age: age,
    skills: skills,
    getName() {
        console.log(this.name);
    },
};
console.log(userDetail);
let empDetails = {
    name: userName,
    age: age,
    skills: skills,
    getName() {
        console.log(this.name);
    },
};
// 6-- FUNCTION
/* --------------------------------------------------- */
// Method 1
function getUserName1({ name, age }) {
    console.log(name);
    console.log(age);
}
getUserName1({ name: "shincy", age: 29 });
// Method 2
function getUserName(userDetail) {
    return userDetail.name;
}
getUserName(userDetail);
// If no return value from futcion we can use void as return value
function printUserName(userDetail) {
    console.log(userDetail.name);
}
printUserName(userDetail);
let currentStatus = "completed";
console.log(currentStatus);
// Function Overloading : consider a function to add both string and number
function add1(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        // return a.toString() + b.toString();
        return a + "" + b;
    }
    return a + b;
}
add1(2, 2); // 4
add1("2", "2"); // 22
function add2(a, b) {
    return a + b;
}
// add 2 is also not the effective way
// 8-- GENERICS
/* --------------------------------------------------- */
function add3(a, b) {
    return (a + b);
}
const result1 = add3("2", "2");
const result2 = add3(4, 5);
console.log("result1 ==", result1, "result2 ==", result2);
// 9-- ENUMS
/* --------------------------------------------------- */
var StatusType;
(function (StatusType) {
    StatusType[StatusType["PENDING"] = 0] = "PENDING";
    StatusType[StatusType["COMPLETED"] = 1] = "COMPLETED";
    StatusType[StatusType["REJECTED"] = 2] = "REJECTED";
})(StatusType || (StatusType = {}));
// If you want to change the values starting from 1, change code as follows
// enum StatusType {
//   PENDING = 1,
//   COMPLETED,
//   REJECTED,
// }
// enum StatusType {
//   PENDING = "pending",
//   COMPLETED = "completed",
//   REJECTED = "rejected",
// }
function getStatus(orderId, status) {
    console.log(orderId, status);
}
getStatus(12, StatusType.COMPLETED);
// 10-- Type Casting
/* --------------------------------------------------- */
// 10.1 -- as const-- To make a variable readOnly
// 10.2 -- as string-- To make a variable readOnly
// 10.3 -- as number-- To make a variable readOnly
// .....
let userName1 = "shincy";
// 11-- keyof / typeof
/* --------------------------------------------------- */
// enum StatusType1 {
//   PENDING = 1,
//   COMPLETED,
//   REJECTED,
// }
// // type StatusType1 = "pending" | "completed" | "rejected" ;
// function getStatus1(orderId:number, status:StatusType1):void{
//   console.log(orderId, status);
// }
// getStatus1(12, StatusType1.COMPLETED);
// If you use union type, suggestions will come but in enum you have to pass StatusType1.COMPLETED for every function call getStatus1. To avoid this and get enum values as string suggestions we do the following.
// We first create the statusType1 as normal object. we pass this object StatusType1 as type with the help of typeof keyword
// Even now we dont get access to the keys. toget access to the keys inside onject StatusType1 we use keyof. Then we will get autosuggestion while calling the function getStatus1
// Now inorder to get the value we call StatusType1[key]
// Case 1
const StatusType1 = {
    PENDING: "pending",
    COMPLETED: "completed",
    REJECTED: "rejected",
};
function getStatus1(orderId, status) {
    // StatusType1.COMPLETED = "not";
    console.log(orderId, "==", StatusType1[status]);
}
getStatus1(12, "COMPLETED");
const resultStatus = "completed";
const foodData = {
    PIZZA: "pepporoni",
    BURGER: "chiken",
    QUANTITY: 1,
};
console.log(foodData);
// any/unknown/void/null
