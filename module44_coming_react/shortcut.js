

// check truthy
let myVar = 4;
if(myVar){
    myVar = myVar * 2;
}
else{
    myVar = 0;

}
console.log(myVar);

// check negative and falsy

let myMoney = 50;
console.log(!myMoney? 'truth': 'false');
if(!myMoney){
    myMoney = myMoney *2
}
else{
    myMoney = 2;
}
console.log(myMoney);

// another 
const money = 800;
let food;

if(money> 100){
    food = 'biriyani'
}
else{
    food = 'shada vhat'
}
console.log(food);

// ternery 
const check = money>100 ? 'handi':'makka';
console.log(check)
console.log(!money>100 ? 'jabona borloks': 'jabo fokira');
console.log((money>700 && myVar> 100) ? 'coke': 'water');



// number to string conversion

const num1 = 52;
const num33 = num1 + ''
console.log(num33); // string eita



//string to number
const num2 = '43';
const num22 = +num2
console.log(typeof num22); //string to number

/* 

// number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr)

// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);

// 
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive; */

let isActive = true;
console.log(isActive = !isActive);
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
 isActive ? showUser() : hideUser();
//console.log(isActive)
isActive && showUser();
isActive || hideUser();