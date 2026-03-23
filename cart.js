const cartContainer = document.querySelector(".cart-container");
const totalPriceElement = document.getElementById("totalPrice");

// get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
        total += product.price;

        const item = document.createElement("div");
        item.classList.add("product-card");

        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button class="remove-btn">Remove</button>
        `;

        // remove button
        item.querySelector(".remove-btn").addEventListener("click", () => {
            removeFromCart(index);
        });

        cartContainer.appendChild(item);
    });

    totalPriceElement.textContent = "Total: ₹" + total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// initial display
displayCart();