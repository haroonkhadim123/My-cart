let counter = 0;
let total = 0;

const showicon = document.querySelector('#show');
const closeicon = document.querySelector('.cross');
const shipcart = document.querySelector('.ship-cart');
const addcart = document.querySelectorAll('.add-to-cart');
const content = document.querySelector('.content');
const circle = document.querySelector('.circle');


showicon.addEventListener('click', () => {
    shipcart.classList.add('active');
});
closeicon.addEventListener('click', () => {
    shipcart.classList.remove('active');
});

addcart.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button clicked ✅');
        const card = button.closest('.card');
        const title = card.querySelector('h3').innerText;
        const id = card.querySelector('p').innerText;
    
        const image = card.querySelector('img').src;
        const cardcart = document.querySelectorAll('.card-cart p');
        let alraedyexist = false;
        cardcart.forEach(item => {
            if (item.innerText === id) {
                alraedyexist = true;
            }

        });
        if (alraedyexist) {
            alert('Item alrady exist in the container');
            return
        }


        const li = document.createElement('li'); // ✅ was <li>, changed to <div>


        li.innerHTML += `
            <div class="card-cart">
                <img src="${image}" alt="">
                <div class="content1">
                    <h3>${title}</h3>
                    <p>${id}</p>
                    <div class="counter-quantity">
                        <span class="minus">-</span>
                        <span class="quantity">1</span>
                        <span class="plus">+</span>
                    </div>
                </div>
                <div class="delete"><i class="fas fa-cart-shopping"></i></div>
            </div>
        `;
        content.appendChild(li);
        counter++;
        circle.innerHTML = counter;





        const price = card.querySelector('.price').innerText;
        const pricetext = parseInt(price.replace(/[^\d]/g, ''));
        total += pricetext
        document.querySelector('.total1').innerHTML = total;
 let itemcount=1;
        const icon = li.querySelector('.delete');
        icon.addEventListener('click', () => {
            li.remove()
            total -= pricetext*itemcount;
            document.querySelector('.total1').innerHTML = total;
            document.querySelector('.circle').innerText=counter--;
 
if (counter < 1) {
    counter = 1;
    document.querySelector('.circle').innerText = '0';
} else {
    document.querySelector('.circle').innerText = counter - 1;
}

        })
        const plus=li.querySelector('.plus');
        const minus=li.querySelector('.minus');
        const quantity=li.querySelector('.quantity');
       
        plus.addEventListener('click',()=>{
            itemcount++;
            quantity.innerText=itemcount;
            total += pricetext;
              document.querySelector('.total1').innerHTML = total;

        })
         minus.addEventListener('click',()=>{
            if(itemcount>1){
            itemcount--;
            
            quantity.innerText=itemcount;
            // if(total>0){
            total -= pricetext;
              document.querySelector('.total1').innerHTML = total;
            // }
        }
        else{
            alert('use delete icon to remove item')
        }
            

        })



    });
});
const buy=document.querySelector('.buy');

buy.addEventListener('click',()=>{
    const cartitem=document.querySelectorAll('.card-cart');
if(cartitem.length===0){
    alert('Your container is empty')
    
}
else{
    alert('Your order has placed')
}

})


