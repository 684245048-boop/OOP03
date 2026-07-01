let stock: number[] = [15, 8, 20, 5, 30];

function getRestockList(inventory: number[]): number[] {
    let restockItems: number[] = [];

    for (let i = 0; i < inventory.length; i++) {
     
        if (inventory[i] < 10) {
            restockItems.push(inventory[i]);
        }
    }

    return restockItems;
}

let needRestock = getRestockList(stock);
console.log(`รายการที่ต้องเติมสต็อก (น้อยกว่า 10):`, needRestock); 
