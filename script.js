// Click onto an add book button. Then have a display come up asking for the book's author, title, pages, and read status


// Those details given will then be put into an array displayed on the page
let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.sayTitle = () => {
    console.log(Book.title);
}

function newBook(title) {
    this.title = title;
}

newBook.prototype = Object.create(Book.prototype);

const book1 = new Book('hunger games', 'jamal', 45, true);
book1.sayTitle();
console.log(book1);


function addBookToLibrary() {
    myLibrary.push(book1);
    console.log(myLibrary)
}

addBookToLibrary();
// Have a button that can delete the book array


// Keep current books in local storage
