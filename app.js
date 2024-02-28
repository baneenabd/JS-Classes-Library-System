
//1
class patron{
  name;
  id;
  constructor(name, id){
    this.name = name;
    this .id = id;

  }
}

//2
class BookStatus{
  patron;
  checkdOut;
  constructor(checkdOut = false, patron = null){
    this.checkdOut = checkdOut;
    this.patron = patron;

  }
}

//3
class Book {
  title;
  id;
  author;
  status;
  constructor (title , author , id ){
    this .title = title;
    this .author = author;
    this .id = id;
    this .status = new BookStatus();
  }
}


//4
class Library {

  books;
  name;
  constructor (name ,books){
    this . name = name;
    this .books = books;

  }

  ////ADD
  addBook(title,author,id){
const newBook = new Book (title,author,id);
this.books.push(newBook);

  }

  ////REMOVE
  removeBook(id){
    this.books = this.books.filter (book=>book.id !== id);

  }
  ////getbook
  getBookById(bookId){
    const book=this.books.find((book)=>book.id===bookId);
    if(!book){
      console.log(`no book was found with the id of ${bookId}`);
      return null;
    }
    return book;

  }

  ////CHeckdOut
  checkdOutBook(bookId,patron){
    const foundbook =this.getBookById(bookId);

    if(!foundbook){
      return;
    }
    if (!foundbook.status){

    foundbook.status=new BookStatus (patron,true);
    return;

    }if (foundbook.status.checkdOut){

      console.log (`${foundbook.title} is already checked out .`); 

    }
    foundbook.status.checkdOut = true;
    foundbook.status.patron = patron;
  }

  ////CheckdIN
  checkdInBook(bookId){
    const foundbook = this.getBookById(bookId);
        if (!foundbook) {
          console.log("this is not found")
          return;       
  }
  foundbook.status.checkdOut=false;
  foundbook.status.patron=null;
}

    
}





const books = [
  { author: "J.D. Salinger", title: "The Catcher in the Rye", id: 1 },
  { author: "Harper Lee", title: "To Kill a Mockingbird", id: 2 },
  { author: "George Orwell", title: "1984", id: 3 },
  { author: "F. Scott Fitzgerald", title: "The Great Gatsby", id: 4 },
  { author: "Jane Austen", title: "Pride and Prejudice", id: 5 },
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    id: 6,
  },
  { author: "J.R.R. Tolkien", title: "The Hobbit", id: 7 },
  { author: "George Orwell", title: "The Lord of the Rings", id: 8 },
  { author: "Aldous Huxley", title: "Animal Farm", id: 9 },
  { author: "Aldous Huxley", title: "Brave New World", id: 10 },
];


const library = new Library("Central Library", books);

// Adding new books
library.addBook("The Alchemist", "Paulo Coelho", 11);
library.addBook("The Da Vinci Code", "Dan Brown", 12);

// Removing a book
library.removeBook(5);

// Creating a new patron
const patronn = new patron("John Smith", 1);

// Checking out a book for the patron
library.checkdOutBook(3, patronn);

// Logging the book checked out by the patron
const checkedOutBook = library.getBookById(3);
console.log(
  `bookTitle: ${checkedOutBook.title}, checkedOutBy: ${checkedOutBook.status.patron.name}`
);

// Checking the book back in
library.checkdInBook(3);

// Logging the book checked in by the patron
const checkedInBook = library.getBookById(3);
console.log(
  `bookTitle: ${checkedInBook.title}, checkedOut: ${checkedInBook.status.checkedOut}`
);