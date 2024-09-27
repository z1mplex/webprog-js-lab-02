function getElementWidth(content, padding, border) {
    function parsePixel(value) {
        return parseFloat(value.replace('px', '')); 
    }

    const contentWidth = parsePixel(content);
    const paddingWidth = parsePixel(padding) * 2;
    const borderWidth = parsePixel(border) * 2;
    
    const totalWidth = contentWidth + paddingWidth + borderWidth;
    const message = `The total width of the element is ${totalWidth} pixels`; 

    if (confirm("Do you want to see the element width?")) {
        alert(message);
    }
}

console.log(getElementWidth("50px", "8px", "4px")); // Виведе: "The total width of the element is 74 pixels"
console.log(getElementWidth("60px", "12px", "8.5px")); // Виведе: "The total width of the element is 101 pixels"
console.log(getElementWidth("200px", "0px", "0px")); // Виведе: "The total width of the element is 200 pixels"
