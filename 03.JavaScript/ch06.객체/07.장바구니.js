// Product 클래스를 정의할 것 (속성: 이름, 가격, toString메소드)
// 5가지의 상품을 만들 것(instance)
// Cart - 상품, 수량
// Cart 의 총 가격을 구하세요.

// class Products {
//     async getProducts(){
//     try {
//      let result = await fetch("products.json");
//      let data = await result.json();
 
//      let products = data.items;
//      products = products.map(item =>{
//          const {title,price} = item.fields;
//          const {id} = item.sys;
//          const image = item.fields.image.fields.file.url;
//          return {title,price,id,image};
//      })
//      return products;
//     } catch (error) {
//         console.log(error);
//      }
//    }
// }

// addCartItem(item) {
//         const div = document.createElement("div");
//         div.classList.add("cart-item");
//         <>
//         div.innerHTML = '<img src={item.image} alt="product"/>'
//         <div>
//         <h4>${item.title}</h4>
//         <h5>${item.price}</h5>
//         <span class="remove-item" data-id={item.id}>삭제</span>
//         </div>
//         <div>
//         <i class="fas fa-chevron-up" data-id={item.id}></i>
//         <p class="item-amount">${item.amount}</p>
//         <i class="fas fa-chevron-down" data-id={item.id}></i>
//         </div>
//         '
//         </>
//         cartContent.appendChild(div);
// }

// class Storage{
//     static saveProducts(products) {
//         localStorage.setItem("products",JSON,stringify(Products));
//     }
//     static getProducts(id){
//         let products = JSON.parse(localStorage.getItem("products"));
//         return products.find(product=>product.id===id);
//     }
//     static saveCart(cart){
//         localStorage.setItem("cart",JSONstringify(cart));
//     }
//     static getCart() {
// 		return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
// 	}
// }

// setupAPP() { 
//     cart = Storage.getCart();
//     this.setCartValues(cart);
//     this.populateCart(cart);
//     cartBtn.addEventListener('click', this.showCart);
//     closeCartBtn.addEventListener('click', this.hideCart);
// }

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    toString(){
        return `제품명 : ${this.name}, 가격 ${this.price}`;
    }
}

const mouse = new Product('마우스', 30000);
const keyboard = new Product('키보드', 20000);
const usb = new Product('USB 32GB', 15000);
const monitor = new Product('모니터', 200000);
const headset = new Product('헤드셋', 35000);
console.log(mouse.toString());
console.log('-------------------------------------------------------------------------------------------')

class Cart{
    constructor(){
        this.cart = [];
    }
    add(product, quantity) {
        if (quantity <= 0)
            return;
        this.cart.push({product, quantity});
    }
    sum(){
        let totalPrice = 0;
        for ( let cart of this.cart){
            totalPrice += cart.quantity * cart.product.price;
        }
        return totalPrice;
    }
    toString(){
        let result = '';
        for(let cart of this.cart){
            result += cart.product.toString() + `, 수량: ${cart.quantity}\n`;
        }
        result += `합계: ${this.sum()}`;
        return result;
    }
}

const cart = new Cart();
cart.add(mouse, 4);
cart.add(usb, 10);
cart.add(monitor, 2);
console.log(cart.toString());