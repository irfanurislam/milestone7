/* 

myFunction()

// 1. function with no perameters and no return type
function myFunction(){
    console.log('hello world')
}
myFunction()

// 2. function with perameters and no return type
function myFunction1(x,y){
    console.log(x+y)
}
myFunction1(5,4)

//3. function with peramerters and return type
function myFunction2(x,y){
    return x+y
}
const value = myFunction2(5,4)

//4. function with no perameters but return type
function myFunction3(){
    const arr = [1,2,3];
    const x = 4;
    return {arr,x};

}
const value1 = myFunction3()

console.log(value1.arr) */
















function hello(){
    console.log('my function');
}
hello()
function second(x,y){
    console.log(x + y)
}
second(2,2);

function third(x,y){
    return x + y;
}
const value = third(2,2);
console.log(value);

//last 

function noparamter(){
    return 'ami ki dekhaitam';
}
const show = noparamter();
console.log(show);


function myFunction3(){
    const arr = [1,2,3];
    const x = 4;
    return {arr,x};

}
const value1 = myFunction3()
console.log(value1.x);