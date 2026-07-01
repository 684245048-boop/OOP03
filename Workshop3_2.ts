function calculatePrice(price: number, discount: number): number {
    let after = price - (price * discount / 100);
    if (after > 0) {
        return after;
    } else {
        return 0;
    }
}

let p: number = 500;
let d: number = 10;
let AfterDisc = calculatePrice(p, d);

console.log(`price: ${p} บาท`);
console.log(`Discount: ${d} %`);
console.log(`price after Discount: ${AfterDisc} บาท`);