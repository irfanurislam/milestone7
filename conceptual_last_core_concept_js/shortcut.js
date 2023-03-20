// true values => 1,"name",{},[],true
// false values => 0,"",undefined,null,false

const value = undefined
//console.log({value});

console.log(!value);
console.log(!!value);

if(value){
    console.log('{true}') 
}
else{
    console.log('{false}') 
}