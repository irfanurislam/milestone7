// fetch
/* fetch(url)
.then(res => res.json())
.then(data =>console.log(data));
 */
// json
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const convertjson = JSON.stringify(student);
console.log(convertjson);
const stringparse = JSON.parse(convertjson);
console.log(stringparse);

// keys object
const key = Object.keys(student);
const valuesss = Object.values(student);
console.log(key);
console.log(valuesss);


// for of on array like object
// loop on an object using for in 


// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

const newcopy0 = [...products];
const newcopy = [...products,newProduct];
console.log(newcopy);

const remove = products.filter(p => p.name !== 'phone');
console.log(remove);
