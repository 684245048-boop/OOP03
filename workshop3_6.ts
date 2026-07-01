type Category = "Electronics" | "Clothing" | "Food";

interface Product {
    readonly id: number;
    name: string;
    category: Category;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "T-Shirt", category: "Clothing", price: 25 },
    { id: 3, name: "Bread", category: "Food", price: 3 },
    { id: 4, name: "Phone", category: "Electronics", price: 800 }
];

function filterProductsByCategory(
    products: Product[],
    category: Category
): Product[] {
    return products.filter(product => product.category === category);
}

console.log(filterProductsByCategory(products, "Electronics"));
console.log(filterProductsByCategory(products, "Food"));