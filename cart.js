// cart.js

// Initialize an empty cart array
let cart = [];

// Function to add a product to the cart
function addToCart(productName, price) {
    // Create an object representing the product
    const product = {
        name: productName,
        price: price
    };

    // Add the product to the cart
    cart.push(product);

    // Optionally, you can display a confirmation to the user
    alert(`${productName} added to cart!`);

    // You can also update the cart display or send the cart data to the server
    console.log(cart);
}
