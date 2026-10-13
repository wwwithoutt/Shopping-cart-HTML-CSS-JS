const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");//выбирает все селекторы подоходящий выборке
const cartClose = document.querySelector("#cart-close");
//скрываем и показываем нашу корзину
cartIcon.addEventListener("click", function () {
  cart.classList.add("active");
});

cartClose.addEventListener("click", function () {
  cart.classList.remove("active");
});

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-box");
        addToCart(productBox);
    })
})

const cartContent = document.querySelector(".cart-content");
const addToCart = productBox =>
{   

    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent; 
    const productPrice = productBox.querySelector(".price").textContent;

    //eger boyle bir el varsa ekleme 

    const cartItems = cartContent.querySelectorAll(".cart-product-title");

    for(let item of cartItems)
    {
        if(item.textContent === productTitle)
        {
            const existingCartBox = item.closest(".cart-box");
            const numberElement = existingCartBox.querySelector(".number");
            
            let quantity = parseInt(numberElement.textContent);
            numberElement.textContent = quantity + 1;
            
            updateTotalPrice();

            return; 

        }
    }

    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
            <img src="${productImgSrc}" alt="cart-img">
                <div class="cart-detail">
                    <h2 class="cart-product-title">${productTitle}</h2>
                    <span class="cart-price">${productPrice}</span>
                    <div class="cart-quantity">
                        <button id="decrement">-</button>
                        <span class="number">1</span>
                        <button id="increment">+</button>
                    </div>
                </div>
                <i class="ri-delete-bin-fill cart-remove"></i>
    `
    cartContent.appendChild(cartBox);
    //sil bit elemani
    cartBox.querySelector(".cart-remove").addEventListener("click", function(){
        cartBox.remove();
        updateTotalPrice();

    });

    cartBox.querySelector(".cart-quantity").addEventListener("click", event =>{
        const numberElement = cartBox.querySelector(".number"); 
        const decrementButton = cartBox.querySelector("#decrement"); 

        let quantity = numberElement.textContent; 

        if(event.target.id === "decrement" && quantity > 1)
        { 
            quantity--; 
            if(quantity === 1)
            {
                 decrementButton.style.color = "#999"

            }
        }else if(event.target.id == "increment")
        { 
            quantity++;
            decrementButton.style.color = "#333"
        }

        numberElement.textContent = quantity;
        updateTotalPrice();

    });
    updateTotalPrice();

    
};

const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = document.querySelectorAll(".cart-box"); // Ищем все товары в корзине
    let total = 0; 
    
    cartBoxes.forEach(cartBox => {  
        // 1. Ищем цену внутри текущего cartBox, а не по всему document
        const priceElement = cartBox.querySelector(".cart-price"); 
        const quantityElement = cartBox.querySelector(".number");
        
        // 2. Преобразуем полученный текст в числа (иначе это просто строки)
        const price = priceElement.textContent.replace("$", "");
        const quantity = quantityElement.textContent;
        
        // 3. Умножаем цену на количество (а не складываем их)
        total += price * quantity;
    });
    
    totalPriceElement.textContent = `$${total}`;
};


