

const addName = () =>{
    const namevalue = document.getElementById('namefeild');
    const nameget = namevalue.value;
    namevalue.value = ""
    //console.log(nameget);
    localStorage.setItem('name',nameget);
}

const deleteName = () =>{
    localStorage.removeItem('name');
}


// email  part

const addemail = () => {
        //const email = getfeild('emeailFeild');
        const emailfeild = document.getElementById('emeailFeild');
         const email = emailfeild.value;
        emailfeild.value = ""
        //console.log(email)
        localStorage.setItem('email',email);
}
const deleteEmail = () =>{
    localStorage.removeItem('email');
}

// message
const addMessage = () => {

        const messagefeild = document.getElementById('textMessage')
        const message =messagefeild.value;
        messagefeild.value = ""
      
        //console.log(message)
        localStorage.setItem('message',message);
}
const deleteMessage = () =>{
    localStorage.removeItem('message');
}



// reset

const reset = () =>{
    localStorage.clear('all');
}

// 
// level 4 start

const send = () =>{
    const namevalue = document.getElementById('namefeild');
    const nameget = namevalue.value;
    namevalue.value = ''
    const emailfeild = document.getElementById('emeailFeild');
    const email = emailfeild.value;
    emailfeild.value = ''
    const messagefeild = document.getElementById('textMessage')
    const message = messagefeild.value;
    messagefeild.value =''
    savelocalStorage(nameget,email,message);

}

const getStoredata = () =>{
    let data = {};
    const storeData = localStorage.getItem('data')
    if(storeData){
        data = JSON.parse(storeData);
    }
    return data;
}



const savelocalStorage = (nameget,email,message) =>{
     const data = getStoredata();
     data[nameget] = `${email} : ${message}`;  
     const stringifyData = JSON.stringify(data);
     localStorage.setItem('data',stringifyData);
}