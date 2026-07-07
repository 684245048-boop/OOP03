export {};

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
let myInventory: Product[] = [
    { id : 1, name:"เสื้อเชิ้ต", price: 500, quantity: 10 },
    { id : 2, name:"กางเกงยีนส์", price: 1200, quantity: 5 },
    { id : 3, name:"รองเท้าผ้าใบ", price: 2500, quantity: 3},
];
function updateStock(productId: number, amountSold: number){
    for (let item of myInventory){
        if (item.id === productId) {
            if (amountSold > item.quantity){
                console.log("Not enough stock");
            } else {
                item.quantity = item.quantity - amountSold;
                console.log("อัปเดตาำเร็จ! สินค้า่ " + item.name + " เหลือจำนวน " + item.quantity + " ชิ้น");
            }

            return;
        }
    }
    console.log("ไม่พบสินค้ารหัสนี้ในระบบ");
}