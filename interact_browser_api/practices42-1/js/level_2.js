console.log('hello');

let count = localStorage.getItem('count') || 0;
//let count =0;
 document.getElementById('p_tag').innerText = count;

const setupCount = () =>{
    count++
     document.getElementById('p_tag').innerText = count;
    
    localStorage.setItem('count',count);

}