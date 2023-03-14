/* const a = 0
if(a){
    console.log('true')
}
else{
    console.log('false')
}

const name = 'Hero';
const age = 34;
const person = {name, age}; 
console.log(person);


const person2 = { name : "Babe" }
console.log(person2['name']);


const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
const ratName = adventurer?.rat?.name;
console.log(ratName); */

let person = null;
console.log(person ? person : "person is null");


const obj = {a:1};
console.log(Object.keys(obj).length === 0);