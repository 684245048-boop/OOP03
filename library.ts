enum BookGenre {
    Action = "Action",
    Comedy = "Comedy",
    Drama = "Drama",
    SciFi = "SciFi"
}

interface Book {
    title: string;
    author: string;
    genre: BookGenre;
}

type LibraryInventory = Book[];

function printSciFiBooks(inventory: LibraryInventory) {
    for (let book of inventory) {
        if (book.genre === BookGenre.SciFi) {
            console.log(book.title);
        }
    }
}