## Library System - Class Implementation

**Objective:**  
Implement a library system using classes in JavaScript. The program should facilitate the management of books and patrons within a library, including adding and removing books, as well as checking books in and out by patrons.

### Instructions:

1. **Patron Class**:
   - Create a `Patron` class with properties `name` and `id`.
2. **BookStatus Class**:
   - Create a `BookStatus` class with properties `checkedOut` (default: `false`) and `patron` (default: `null`).
3. **Book Class**:
   - Create a `Book` class with properties `title`, `author`, `id`, and `status`, where `status` is an instance of `BookStatus`.
4. **Library Class**:

   - Create a `Library` class that takes parameters `name` and an array of book objects `books`.

   - Implement methods within the `Library` class:
     - `addBook(title, author, id)`: Add a new book to the library.
     - `removeBook(id)`: Remove a book from the library based on its ID.
     - `getBookById(id)`: Retrieve a book from the library based on its ID.
     - `checkOutBook(id, patron)`: Allow a patron to check out a book by its ID.
     - `checkInBook(id)`: Allow a patron to check in a book by its ID.

### General Description:

The program utilizes classes to represent different entities within a library system. Each book is represented by a `Book` class instance, which contains information such as title, author, and status (whether it's checked out and by whom). Patrons are represented by the `Patron` class, which stores their name and ID.

The `Library` class serves as the main orchestrator, allowing operations such as adding and removing books, as well as checking books in and out by patrons. The `BookStatus` class helps in managing the status of each book, indicating whether it's currently checked out and by whom.

By implementing these classes and their corresponding methods, the program facilitates efficient management of books and patrons within the library system, enabling tasks such as adding, removing, checking out, and checking in books to be performed seamlessly.
