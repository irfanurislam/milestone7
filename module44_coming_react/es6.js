// spread operator array theke copy korar jonno eita  use kori
const array = [12,2,33,443,44];
const newspread = [...array];
console.log(newspread);
array.push(10);
const newspread1 = [...array,20];
console.log(newspread1);

// ternery operator
const student = {
    name: 'omuk',
    age:222,
    live: 'janina'
}

const valueee = `my nameis ${student.name} my age ${student.age} my index num ${array[0]}`
console.log(valueee);

// arrowa function

const num = () => 55;
const num1 = (a) => a * 2;
const num2 = b => b % 2 === 0;
const num3=(a,b) => {
    const result = a*b;
    return result;
}
console.log(num());
console.log(num1(2));
console.log(num2(3));
console.log(num3(2,2));


