const addToLocalStorage = () =>{
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

   if(id && value){
    localStorage.setItem(id,value);
   }
    idInput.value = '';
    valueInput.value =''
}

localStorage.setItem('array', JSON.stringify([10,12,32,33]));
const store = {name:"abdul", age:"23"};
localStorage.setItem('newob',JSON.stringify(store));

const addn = localStorage.getItem('newob')
JSON.parse(addn)