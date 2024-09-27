function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    const message = `Shipping to ${country} will cost ${totalPrice} credits`; 
    
    if (confirm("Do you want to see the shipping details?")) {
        alert(message);
    }
}

console.log(getShippingMessage("Australia", 120, 50)); // Виведе: "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // Виведе: "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // Виведе: "Shipping to Sweden will cost 120 credits"
