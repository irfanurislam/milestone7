/* const person = { name: 'abul', age : 23, year : 'adult'}
undefined
person.toString
ƒ toString() { [native code] }
person.toString()
'[object Object]'
JSON.stringify(person)
'{"name":"abul","age":23,"year":"adult"}'
const all = JSON.stringify(person)
undefined
JSON.parse(all)
{name: 'abul', age: 23, year: 'adult'}
person.name
'abul' */

const setAge = () =>{
    localStorage.setItem('name', 'abdul');
    /* const person = { name: 'abul', age : 23, year : 'adult'}
    const all = JSON.stringify(person);
    const converter = JSON.parse(all);
    localStorage.setItem('new', converter) */
}