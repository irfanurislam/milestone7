 const person = {
     name:'mehedy',
    email:'xyz@gmail.com',
    address:'xyz',
     phone:[12342,76544],
     34:'hello world',
     "job-type":'private'
 }

// 3 types object access

const first = person.name;
console.log(first);

const obj2 = person['email'];
console.log(obj2);

const obj3 = 'address';
const obj4 = person[obj3];
console.log(obj4);

//ami caile 34 ke dot access korte parbona
const first2 = person['34'];
const first23 = person['job-type'];
console.log(first23);


/* const obj = {};

obj.name = 'mehedi';
obj['address'] = 'Bari nai';

const propName = 'phone';

obj[propName] = '234232343'


const keys = Object.keys(obj);
const values = Object.values(obj)

console.log(keys)
console.log(values)

for(let i of keys){
    console.log(obj[i])
} */

const obj ={};

obj.name = 'shihab';
console.log(obj.name);
obj['address'] = 'bari nai';

const propname = 'phone';
obj[propname] = '012234';
console.log(obj);

const keys = Object.keys(obj);
const valueess = Object.values(obj);
console.log(keys)
console.log(valueess)

for (let i of keys){
    console.log(obj[i]);
}