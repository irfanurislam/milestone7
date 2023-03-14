const name = 'irfan'; // its fixed
let season = 'rainy';

// step 2
if(name === season && name.includes('is')){
    console.log('true')
}
else if(name !== season && season.includes('r')){
    console.log('false kintu soman noi')
}
else{
    console.log('kicu korbona ar')
}
console.log( 2>5);
console.log( typeof season === 'string' && 'jekhono dekhao');

// step 3 

const array = [12,23,44,55];
array[0] = 11;
array.push(25);
array.pop();
console.log(array);
for(let i = 0; i<array.length; i++){
    const element = array[i];
    console.log(element);
}
console.log(0 < 5);

// Object find 3 ways
const student = {
    name: 'omuk',
    age:222,
    live: 'janina'
}
let declare = student['live']
console.log(student.name);
console.log(student['age']);
console.log(declare);


// step 4 function

function multi(a,b){
 const result = a*b
 return result
}
const total = multi(2,2);
console.log(total);