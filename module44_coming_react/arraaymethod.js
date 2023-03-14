const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const first = products.map(p => p.name);
const first1 = products.map(p => p.brand);
console.log(first1);

 products.forEach(p =>{ ;
     console.log(p.color);
      })

const second = products.filter(p => p.price > 5000)
console.log(second);
const third = products.find(p => p.name.includes('n'))
console.log(third);