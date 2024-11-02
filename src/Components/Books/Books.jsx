import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./bookData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        books.map(book => <Book key={book.bokId} book={book}></Book>)
      }
      </div>
    </div>
  );
}
