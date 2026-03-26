const products = [
    {
        name: "AirPods Case",
        price: 199*1,
        category: "Pouches",
        image: "case.jpg"
    },
    {
        name: "Bow Pouch",
        price: 199,
        category: "Pouches",
        image: "bow.jpg"
    },
    {
        name: "Zoro",
        price: 449,
        category: "Anime",
        image: "zoro.jpg"
    },
    {
        name: "Itadori",
        price: 449,
        category: "Anime",
        image: "itadori.jpg"
    },
    {
        name: "Gojo",
        price: 449,
        category: "Anime",
        image: "gojo.jpg"
    },
    {
        name: "Sanji",
        price: 449,
        category: "Anime",
        image: "sanji.jpg"
    },
    {
        name: "Luffy",
        price: 449,
        category: "Anime",
        image: "luffy.jpg"
    },
    {
        name: "Naruto",
        price: 449,
        category: "Anime",
        image: "naruto.jpg"
    },
    {
        name: "Goku",
        price: 449,
        category: "Anime",
        image: "goku.jpg"
    },
    {
        name: "Cow Plushie",
        price: 849,
        category: "Plushies",
        image: "cow.jpg"
    },
    {
        name: "Octopus Plushie",
        price: 199*1,
        category: "Plushies",
        image: "octopus.jpg"
    },
    {
        name: "Bee Keychain",
        price: 149,
        category: "Keychains and Charms",
        image: "bee.jpg"
    },
    {
        name: "Mixed Bouquest",
        price: 1499,
        category: "Bouquets and Flowers",
        image: "bigbo.jpg"
    },
    {
        name: "Big Bunny Plushie",
        price: 749,
        category: "Plushies",
        image: "bigbunny.jpg"
    },
    {
        name: "Bunny Plushie",
        price: 349,
        category: "Plushies",
        image: "bunny.jpg"
    },
    {
        name: "Bunny with scarf Plushie",
        price: 399,
        category: "Plushies",
        image: "Bunnyscarf.jpg"
    },
    {
        name: "Cake Jellycat",
        price: 299,
        category: "Plushies",
        image: "cake.jpg"
    },
    {
        name: "Cats",
        price: 249,
        category: "Plushies",
        image: "cats.jpg"
    },
    {
        name: "Demogorgon",
        price: 215,
        category: "Plushies",
        image: "demo.jpg"
    },
    {
        name: "Donut Keychain",
        price: 199,
        category: "Keychains and Charms",
        image: "donutk.jpg"
    },
    {
        name: "Evil Eye Keychain",
        price: 149,
        category: "Keychains and Charms",
        image: "eyek.jpg"
    },
    {
        name: "Lilac Bouquet",
        price: 1999,
        category: "Bouquets and Flowers",
        image: "lilacbo.jpg"
    },
    {
        name: "Lily of the Valley Charm",
        price: 175,
        category: "Keychains and Charms",
        image: "lilycha.jpg"
    },
    {
        name: "Lip Balm Holder",
        price: 149,
        category: "Plushies",
        image: "lip.jpg"
    },
    {
        name: "Miffy Keychain",
        price: 149,
        category: "Keychains and Charms",
        image: "miffyk.jpg"
    },
    {
        name: "Miffy Plushie",
        price: 299,
        category: "Plushies",
        image: "miffyp.jpg"
    },
    {
        name: "Octopus Keychain",
        price: 149,
        category: "Keychains and Charms",
        image: "octopusk.jpg"
    },
    {
        name: "Rose",
        price: 199*1,
        category: "Bouquets and Flowers",
        image: "roses.jpg"
    },
    {
        name: "Rose Bouquet",
        price: 1349,
        category: "Bouquets and Flowers",
        image: "rosesbo.jpg"
    },
    {
        name: "SpiderMan Charms",
        price: 199,
        category: "Keychains and Charms",
        image: "spidey.jpg"
    },
    {
        name: "Stitch Charm",
        price: 349*1,
        category: "Keychains and Charms",
        image: "stitch.jpg"
    },
    {
        name: "Drawstring Pouch",
        price: 199*1,
        category: "Pouches",
        image: "string.jpg"
    },
    {
        name: "Sunflower Keychain",
        price: 149,
        category: "Keychains and Charms",
        image: "sunk.jpg"
    },
    {
        name: "Teddy Plushie",
        price: 599,
        category: "Plushies",
        image: "teddies.jpg"
    },
    {
        name: "Teddy Keychain",
        price: 199*1,
        category: "Keychains and Charms",
        image: "teddyk.jpg"
    },
    {
        name: "Tulip Bouquet",
        price: 499,
        category: "Bouquets and Flowers",
        image: "tubo.jpg"
    },
    {
        name: "Tulip Pot",
        price: 199*1,
        category: "Bouquets and Flowers",
        image: "tupot.jpg"
    },
    {
        name: "Turtle Plushie",
        price: 599,
        category: "Plushie",
        image: "turtle.jpg"
    }
];
// Select elements
const productContainer = document.querySelector(".product-container");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filters button");

// Store selected category
let selectedCategory = "All";

// Function to display products
function displayProducts(productList) {
    productContainer.innerHTML = "";

    productList.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button class="add-to-cart">Add to Cart</button>
`;
const button = productCard.querySelector(".add-to-cart");

button.addEventListener("click", () => {
    addToCart(product);
});
        productContainer.appendChild(productCard);
    });
}
function filterAndSearchProducts() {
    const searchValue = searchInput.value.toLowerCase();

    const filtered = products.filter(product => {
        const matchesCategory =
            selectedCategory === "All" || product.category === selectedCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchValue);

        return matchesCategory && matchesSearch;
    });

    displayProducts(filtered);
}

// Initial display
displayProducts(products);

// Search event
searchInput.addEventListener("input", filterAndSearchProducts);

// Filter button events
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.getAttribute("data-category");
        filterAndSearchProducts();
    });
});
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
}
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
