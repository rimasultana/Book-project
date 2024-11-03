import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../Utili/addToDb";

export default function BookDetails() {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  
  if (!book) {
    return <p>Book not found.</p>;
  }

  const {
    image,
    yearOfPublishing,
    publisher,
    tags,
    category,
    totalPages,
    review,
    author,
    bookName,
    rating
  } = book;

  const handleMarkRead = (id) => {
    addToStoreReadList(id);
  };

  return (
    <div>
      <h1>Book details {bookId}</h1>
      <div className="flex justify-center gap-5 my-20">
        <div className="flex-1 w-96 bg-gray-100 flex justify-center p-14 rounded-lg">
          <img
            className="w-42 rounded-lg object-cover"
            src={image}
            alt={bookName}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <h3>By: {author}</h3>
          <div className="divider"></div>
          <h4>{category}</h4>
          <div className="divider"></div>
          <p>
            <span className="font-bold">Review:</span> {review}
          </p>

          <div className="flex justify-center gap-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-100 text-green-600"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          <div className="flex justify-around text-start">
            <p>Number of Pages:</p>
            <p>{totalPages}</p>
          </div>
          <div className="flex justify-around text-start">
            <p>Publisher:</p>
            <p>{publisher}</p>
          </div>
          <div className="flex justify-around text-start">
            <p>Year of Publishing:</p>
            <p>{yearOfPublishing}</p>
          </div>
          <div className="flex justify-around text-start">
            <p>Rating:</p>
            <p>{rating}</p>
          </div>
          <div className="flex justify-center gap-5 my-5">
            <button onClick={() => handleMarkRead(id)} className="btn btn-outline mr-4">Read</button>
            <button className="btn btn-accent">WishList</button>
          </div>
        </div>
      </div>
    </div>
  );
}