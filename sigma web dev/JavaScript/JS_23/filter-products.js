
let filterProducts = (products,criterion)=>{
    res_arr = [];
    if (criterion.charAt(0) >= 'a' && criterion.charAt(0) <= 'z') {
        criterion = criterion.charAt(0).toUpperCase() + criterion.slice(1);
    }
    for (const element of products) {
        if (element.category == criterion){
            res_arr.push(element.name)
        }
    }
    return res_arr

}


let products = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Bluetooth Speaker", category: "Electronics", price: 150 },
    { name: "Running Shoes", category: "Footwear", price: 90 },
    { name: "Sneakers", category: "Footwear", price: 120 },
    { name: "T-Shirt", category: "Clothing", price: 25 },
    { name: "Jeans", category: "Clothing", price: 60 },
    { name: "Coffee Maker", category: "Home Appliances", price: 75 },
    { name: "Blender", category: "Home Appliances", price: 45 },
    { name: "Wrist Watch", category: "Accessories", price: 200 },
    { name: "Backpack", category: "Accessories", price: 80 },
    { name: "Office Chair", category: "Furniture", price: 180 },
    { name: "Desk Lamp", category: "Furniture", price: 30 },
    { name: "Sunglasses", category: "Accessories", price: 60 },
];

console.log(filterProducts(products,"Footwear"));
