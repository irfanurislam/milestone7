const x = 5;
const y = true;

// if(x>5){
//     console.log('hello')
// }else{
//     console.log('world')
// }

// (x>5 && y===true) ? console.log('hello') : console.log('world')

// const vlue = x>5 && y===true ? 'greater than 5': "not greater than 5"
// console.log(vlue)

// x>5 ? console.log('greater'): x<5 ? console.log('less') : console.log('equal')

const check = x >= 5;
console.log(!!check);

(x > 5 && y === true) ? console.log('hello') : console.log('world'); 

 x > 5 ? console.log('greather ') : x < 5 ? console.log('less') : console.log('equal'); 
/* let num = 55
num = num+''

console.log(num)

num = +num
console.log(num) */


// convert to string 
let nn = 55;
nn = nn+''
console.log(typeof nn)
nn = +nn
console.log(nn);
console.log(typeof nn)