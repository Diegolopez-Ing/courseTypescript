"use strict";
const book = {
    id: 1,
    title: "My title",
    author: "My author",
};
const books = [];
function getBook() {
    return { id: 1, title: 'my title', author: 'Diego' };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 1,
    title: 'my title',
    author: 'Diego',
    coAuthor: 'Sofia'
};
createBook(newBook);
