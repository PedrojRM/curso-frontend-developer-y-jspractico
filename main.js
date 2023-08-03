const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const mobilehamburger = document.querySelector('.mobile-menu');
const iconohamburguesa = document.querySelector('.menu');
const iconocarro = document.querySelector('.navbar-shopping-cart');
const menuaside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuemail.addEventListener('click', togglemenuemail);
function togglemenuemail() {
    const ismenuasideclosed = menuaside.classList.contains('inactive')
    if (!ismenuasideclosed) {
        menuaside.classList.add('inactive');
    }
    desktopmenu.classList.toggle('inactive');
}

iconohamburguesa.addEventListener('click', tooglemenuhamburger);
function tooglemenuhamburger() {
    const ismenuasideclosed = menuaside.classList.contains('inactive')
    if (!ismenuasideclosed) {
        menuaside.classList.add('inactive');
    }
    mobilehamburger.classList.toggle('inactive');
}

iconocarro.addEventListener('click', togglecarritoaside);
function togglecarritoaside () {
    const ismobilemenuclosed = mobilehamburger.classList.contains('inactive')
    if (!ismobilemenuclosed) {
        mobilehamburger.classList.add('inactive');
    }
    menuaside.classList.toggle('inactive');
}



const listaproductos = [];
listaproductos.push({
    name: 'Bike',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
listaproductos.push({
    name: 'Pantalla',
    price: 720,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
listaproductos.push({
    name: 'Equipo de Sonido',
    price: 700,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
listaproductos.push({
    name: 'Mesa',
    price: 520,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
listaproductos.push({
    name: 'Mesa',
    price: 520,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
listaproductos.push({
    name: 'Mesa',
    price: 520,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})


/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>*/

for (product of listaproductos) {
   const productCard = document.createElement ('div')
   productCard.classList.add('product-card');

   const productimg = document.createElement('img')
   productimg.setAttribute('src', product.imagen);

   const productInfo = document.createElement ('div')
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');
   const productprice = document.createElement('p');
   productprice.innerText = '$' + product.price;
   const productname = document.createElement('p');
   productname.innerText = product.name;

   productInfoDiv.append(productprice, productname);

   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

   productInfoFigure.append(productImgCart);

   productInfo.append(productInfoDiv, productInfoFigure);
   productCard.append(productimg, productInfo);
  
   cardsContainer.append(productCard);
}