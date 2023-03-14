const addProduct = () =>{
    const productfeild = document.getElementById('product_name');
    const quantityfeild = document.getElementById('product_quantity');
    const product = productfeild.value;
    const quantity = quantityfeild.value;
    productfeild.value = '';
    quantityfeild.value = '';
    console.log(product,quantity);
    display(product,quantity);
    savelocalStorage(product,quantity);
}

const display = (product,quantity) =>{
    const contain = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `${product} ${quantity}`;
    contain.appendChild(li);
}

// saved gear

const getstoreShoopingcart = () => {
    let cart = {};
    const storecart = localStorage.getItem('cart')
    if(storecart){
        cart = JSON.parse(storecart);
    }
    return cart;
}




const savelocalStorage = (product,quantity) => {
     const cart = getstoreShoopingcart();
     cart[product] = quantity;
     //console.log(cart);
     const cartstringify = JSON.stringify(cart);
     localStorage.setItem('cart',cartstringify)
}

const displyalocalstorage = () =>{
    const savedCart = getstoreShoopingcart();
    for(const products in savedCart){
        const quantity = savedCart[products];
        console.log(products,quantity);
        display(products,quantity);

    }
}
displyalocalstorage()