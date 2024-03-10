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
        name: 'Seven Thousand Islands Dressing',
        image: '7k islands dressing.jpg',
        price: 350
    },
    {
        id: 2,
        name: 'Cheese Pimiento Spread',
        image: 'cheesepimientospread.jpg',
        price: 999
    },
    {
        id: 3,
        name: 'Cheesy Bacon Spread',
        image: 'Cheesybaconspread.jpg',
        price: 999
    },
    {
        id: 4,
        name: '#whyme Chilli Sauce',
        image: 'Chilisauce.jpg',
        price: 999
    },
    {
      id: 5,
      name: '#espresslove Chocolate Espresso',
      image: 'chocolate espresso.jpg',
      price: 999
  },
  {
      id: 6,
      name: '#Sillyraspberry Choco Raspberry',
      image: 'chocoraspberry.jpg',
      price: 999
  },
  {
      id: 7,
      name: '#toffeelgood Choco Toffee Spread',
      image: 'Chocotoffeepread.jpg',
      price: 999
  },
  {
      id: 8,
      name: 'Cmon Lechon Sauce',
      image: 'cmonlechon.jpg',
      price: 999
  },
  {
    id: 9,
    name: 'Coco Aminos Soy Sauce',
    image: 'cocoaminos soy sauce.jpg',
    price: 999
},
{
    id: 10,
    name: 'Keto: #butterchogether Dark Chocolate Peanut Butter',
    image: 'dark chocolate peanut butter.jpg',
    price: 999
},
{
    id: 11,
    name: 'Keto: My Gravy Sauce',
    image: 'ketomygravy.jpg',
    price: 999
},
{
    id: 12,
    name: '#Pimientobe Nacho Cheesy Pimiento',
    image: 'nacho cheesy pimiento.jpg',
    price: 999
},
{
    id: 13,
    name: '#Nutflix&Chill Peanut Butter Crunch',
    image: 'peanut butter crunch.jpg',
    price: 999
},
{
    id: 14,
    name: 'Peanut Buttercup',
    image: 'peanutbutter.jpg',
    price: 999
}, 
{
    id: 15,
    name: '#pinasroadhouse Smokey Sweet & Tangy Salad Dressing',
    image: 'pinasroadhouse sauce.jpg',
    price: 999
},
{
    id: 16,
    name: 'Keto #pizzamyheart Pizza Pepperoni',
    image: 'Pizzapepperoni.jpg',
    price: 999
},
{
    id: 17,
    name: 'Keto: Sugar-Free Salsa Dip',
    image: 'salsadip.jpg',
    price: 999
},
{
    id: 18,
    name: 'Coco Aminos Soy Sauce',
    image: 'Sugarfree bbq sauce.jpg',
    price: 999
},
{
    id: 19,
    name: 'Coco Aminos Soy Sauce',
    image: 'cocoaminos soy sauce.jpg',
    price: 999
},
{
    id: 20,
    name: 'Coco Aminos Soy Sauce',
    image: 'cocoaminos soy sauce.jpg',
    price: 999
},


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="Sauce/${value.image}">
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
