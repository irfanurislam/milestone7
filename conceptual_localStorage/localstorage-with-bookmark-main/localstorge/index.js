const addProduct = () =>{
    const productfeild = document.getElementById('product_name');
    const product = productfeild.value;
    productfeild.value =""
    const quantityfeild = document.getElementById('product_quantity');
    const quantity = quantityfeild.value;
    quantityfeild.value = ""
    
    display(product,quantity);
    savedLocaStorage(product,quantity)
}

const display =(product,quantity) =>{
 const contain = document.getElementById('product_container');
 const li = document.createElement('li');
 li.innerHTML = `${product} ${quantity}`;
 contain.appendChild(li);
}



const getStorage = () =>{
    const storedcart = localStorage.getItem('cart');
    let cart = {}
    if(storedcart){
       cart = JSON.parse(storedcart);
    }
    return cart;
}


const savedLocaStorage = (product, quantity)=>{
 const cart = getStorage();
 cart[product] = quantity;
 const cartStringyfy = JSON.stringify(cart);
 localStorage.setItem('cart', cartStringyfy);
}

// stayi hishebbe rakha daoya localstorage

const showMessage = () =>{
    const savedCart = getStorage();
    console.log(savedCart);
    for(const product in savedCart){
        console.log(product)

        const quantity = savedCart[product];
        console.log(quantity);
        display(product,quantity);
    }
}

showMessage();