function calculateElectricityBill(units) {
    let totalBill = 0;
    if (units <= 100) {
        totalBill = units * 3;
    } else if (units <= 200) {
        totalBill = (100 * 3) + ((units - 100) * 5); 
    } else if (units <= 300) {
        totalBill = (100 * 3) + (100 * 5) + ((units - 200) * 7); 
    } else {
        totalBill = (100 * 3) + (100 * 5) + (100 * 7) + ((units - 300) * 10);
    }

    
    if (totalBill > 1000) {
        totalBill += totalBill * 0.10; 
    }

    return totalBill;
}


let unitsConsumed = 300; 
let totalBill = calculateElectricityBill(unitsConsumed);

console.log(`Total electricity bill for ${unitsConsumed} units: ₹${totalBill.toFixed(2)}`);

  

