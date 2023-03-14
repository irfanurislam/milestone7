const loadalert = () =>{
    alert( 'tui taka diis amake 500 taka');
}
const loadconfirm = () =>{
    //confirm('taka ki dibi ajke???'); // confirm amake return  dibe

    // ammi true or false controle korlam
 const result = confirm('taka ki dibi ajke???');
 console.log(result) ;
 if(result === true){
    alert('janer dstw tui beda');
 }
 else{
    alert('dgm ..... lotha bolbina');
 }
}

const promptload = () =>{
    const show = prompt('taka dibi kkhn?');
    console.log(show);
    if(show === 'today'){
        alert('beshi upokari hobe');
    }
    else{
        alert('acca dis');
    }
}