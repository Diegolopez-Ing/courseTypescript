interface Book{
    id: number;
    title: string;
    author: string;
    coAuthor?:string;
    isLoan?:(id:number) => void;
}

const book: Book = {
    id: 1,
    title: "My title",
    author: "My author",
}

const books: Book[]=[]

function getBook():Book {
    return {id: 1, title: 'my title',author:'Diego'}
}

const myBook= getBook()

function createBook(book:Book) {
    return book
}

const newBook:Book={
    id: 1, 
    title: 'my title',
    author:'Diego',
    coAuthor:'Sofia'
}

createBook(newBook)
