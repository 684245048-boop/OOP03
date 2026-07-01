interface Product {
    id: number;
    name: string;
    price: number;
}

type Status = "Available" | "Out of Stock";

function printProductSummary(product: Product, status: Status): void {
    console.log("=== Product Summary ===");
    console.log(`ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Status: ${status}`);
    console.log("=======================");
}

const sampleProduct: Product = {
    id: 101,
    name: "Wireless Mouse",
    price: 29.99
};

printProductSummary(sampleProduct, "Available");