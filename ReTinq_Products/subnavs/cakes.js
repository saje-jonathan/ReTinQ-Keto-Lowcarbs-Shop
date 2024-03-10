let openShopping = document.querySelector('.shopping');

let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Keto: Ube Cake',
        image: 'cake1.jpg',
        price: 999
    },
    {
        id: 2,
        name: 'My Cherry Amour: Black Forest Love',
        image: 'cake2.jpg',
        price: 199 + "&" + 299
    },
    {
        id: 3,
        name: 'Keto: Caramel Cake',
        image: 'keto Caramel Cake.jpg',
        price: 999
    },
    {
        id: 4,
        name: 'Nama Dark Chocolate Truffles',
        image: 'Chocolatetruffles.jpg',
        price: 999
    },
    {
      id: 5,
      name: 'Keto: Lemon Cream Cake',
      image: 'Ketolemoncreamcake.jpg',
      price: 999
  },
  {
      id: 6,
      name: 'Keto: Strawberry Truffles',
      image: 'strawberrytruffles.jpg',
      price: 999
  },
  {
      id: 7,
      name: 'Keto & Vegan Friendly : Maja',
      image: 'Vegan Maja.jpg',
      price: 999
  },
  {
      id: 8,
      name: 'Meat-Hooray: Savoury Pork Sisig',
      image: 'SP.jpg',
      price: 999
  },
  {
    id: 9,
    name: 'Meat-Hooray: Savoury Pork Sisig',
    image: 'SP.jpg',
    price: 999
},
  
    

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="Cakes/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
            `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div class="title">${value.name}</div>
                <div class="price">${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = "Total: "+totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
    
}
function checkOut(){
    
    
    alert("Your order has been checked out");
   
    }
