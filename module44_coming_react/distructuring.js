// 1. array destructuring


const numbers = [12,45,33,44];
const [x,y] = [12,45];
console.log(x,y);
const [x1, y1,y3] =numbers
console.log(x1,y1,y3);

function boxify(num1,num2){
    const nums = [num1,num2];
    return nums;
}
console.log(boxify(2,3));
const [first,second] = boxify(10,12);
console.log(first,second);
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const [firstmovies,secondmovies] = student.movies
console.log(firstmovies,secondmovies);








//const {name,age} = {name:'alu', age:14}
//console.log(name,age);
const { name, age } = { id: 12, name: 'alu', salary: 3400, age: 14 };
console.log(name,age);
const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {machine,ide} = employee
console.log(machine,ide);
const {brand } = employee.specification.watch
console.log(brand);

/*  
// object destructuring
const { name, age } = { name: 'alu', age: 14 };
const { name, age } = { id: 12, name: 'alu', salary: 3400, age: 14 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
// const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;  */