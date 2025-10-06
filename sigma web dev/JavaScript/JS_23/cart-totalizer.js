function calculateTotal(cartItems) {
    let total = 0
    
    for (const elem of cartItems) {
        total += (elem.price*elem.quantity)
    }

    return total;
}


let cart = [
    { name: "Laptop", price: 1200, quantity: 10 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 45, quantity: 1 },
    { name: "Monitor", price: 220, quantity: 2 },
    { name: "Desk Chair", price: 180, quantity: 1 },
    { name: "USB-C Cable", price: 15, quantity: 3 },
    { name: "External Hard Drive", price: 95, quantity: 1 },
    { name: "Wireless Earbuds", price: 60, quantity: 2 },
    { name: "Webcam", price: 70, quantity: 1 },
    { name: "Notebook Cooling Pad", price: 35, quantity: 1 }
];

console.log(calculateTotal(cart));  // should return the total cost
