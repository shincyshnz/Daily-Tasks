// 1-- Infer Types
/* --------------------------------------------------- */
let userName = "shincy";
let age = 10;
let skills: string[] = ["JS", "HEMl", "CSS"];

// 2-- UNION
/* --------------------------------------------------- */

// let skills:(string | number)[] = ["JS","HEMl","CSS"]

let userData: { name: string; age: number } = {
  name: userName,
  age: age,
};
console.log(userData);

// 3-- Interface and Type
/* --------------------------------------------------- */

// One major difference between type aliases vs interfaces are that interfaces are open and type aliases are closed. This means you can extend an interface by declaring it a second time. (can redeclare and extend)
// In the other case a type cannot be changed outside of its declaration.

// 4-- INTEFACE
/* --------------------------------------------------- */

// You can explicitly describe this object’s shape using an interface declaration:

interface Details {
  name: string;
  age: number;
  skills: string[];
  getName: () => void;
}

let userDetail: Details = {
  name: userName,
  age: age,
  skills: skills,
  getName() {
    console.log(this.name);
  },
};
console.log(userDetail);

// 5-- TYPE
/* --------------------------------------------------- */

type Detail = {
  name: string;
  // union
  age: number | string;
  skills: string[];
  // optional : declare a property in your interface/type which will be optional.
  getName?: () => void;
};

let empDetails: Detail = {
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

function getUserName1({ name, age }: { name: string; age: number }) {
  console.log(name);
  console.log(age);
}
getUserName1({ name: "shincy", age: 29 });

// Method 2

function getUserName(userDetail: Details): string {
  return userDetail.name;
}
getUserName(userDetail);

// If no return value from futcion we can use void as return value
function printUserName(userDetail: Details): void {
  console.log(userDetail.name);
}
printUserName(userDetail);

// 7-- Named Types
/* --------------------------------------------------- */

type status = "pending" | "completed" | "rejected";

let currentStatus: status = "completed";
console.log(currentStatus);

// Function Overloading : consider a function to add both string and number
function add1(a: string | number, b: string | number): string | number {
  if (typeof a === "string" || typeof b === "string") {
    // return a.toString() + b.toString();
    return a + "" + b;
  }
  return a + b;
}
add1(2, 2); // 4
add1("2", "2"); // 22

// add1 method is complicated. this can be solved using function overloading

function add2(a: string, b: string): string;
function add2(a: number, b: number): number;
function add2(a: any, b: any): any {
  return a + b;
}

// add 2 is also not the effective way

// 8-- GENERICS
/* --------------------------------------------------- */

function add3<T extends string | number>(a: T, b: T): T {
  return (((a as unknown) as number) + ((b as unknown) as number)) as T;
}
const result1: string = add3<string>("2", "2");
const result2: number = add3<number>(4, 5);
console.log("result1 ==", result1, "result2 ==", result2);

// 9-- ENUMS
/* --------------------------------------------------- */

enum StatusType {
  PENDING,
  COMPLETED,
  REJECTED,
}

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

function getStatus(orderId: number, status: StatusType): void {
  console.log(orderId, status);
}

getStatus(12, StatusType.COMPLETED);

// 10-- Type Casting
/* --------------------------------------------------- */

// 10.1 -- as const-- To make a variable readOnly
// 10.2 -- as string-- To make a variable readOnly
// 10.3 -- as number-- To make a variable readOnly
// .....

let userName1 = "shincy" as const;

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
} as const;
function getStatus1(orderId: number, status: keyof typeof StatusType1): void {
  // StatusType1.COMPLETED = "not";
  console.log(orderId, "==", StatusType1[status]);
}

getStatus1(12, "COMPLETED");

// Case 1
// In the above code case1 you can change values if you uncomment the line // StatusType1.COMPLETED = "not";
// This cannot be done since we are replacing enum here. To avoid this we use typecast as const

// 11 -- UTILITY TYPES
/* --------------------------------------------------- */

type Users = {
  // readonly name : string,
  name: string;
  age: number;
  salary?: number;
};

// 1) If you want to make all readOnly

// const userInfo:Readonly<Users> = {
//   name :"Shincy",
//   age : 29,
//   salary:3000,
// }

// 2) If you want to make all required

// const userInfo:Required<Users> = {
//   name :"Shincy",
//   age : 29,
//   salary:3000, // Eventhough salary is optional you can't omit
// }

// 3) If you want to make all fields partial ie optional

// const userInfo:Partial<Users> = {
//   name :"Shincy"
// }

// 4) If you want to select/pick only few fields

// const userInfo:Pick<Users, "name" | "age"> = {
//   name :"Shincy",
//   age:29,
// }

// 4) If you want to Omit only few fields

// const userInfo:Omit<Users, "age"> = {
//   name :"Shincy",
// }

// 5) If you want to Omit only few fields from union type you cannot use pick or omit instead use "exclude"

type ResultStatusType = "pending" | "completed" | "rejected";

const resultStatus: Exclude<ResultStatusType, "pending"> = "completed";

// 6) If you don't know the type of result yo are getting you can use record to create type

type FoodType = Record<string, any>;

const foodData: FoodType = {
  PIZZA: "pepporoni",
  BURGER: "chiken",
  QUANTITY: "1",
};

console.log(foodData);
