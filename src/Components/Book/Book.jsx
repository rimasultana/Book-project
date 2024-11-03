import { object } from "prop-types";
import { Link } from "react-router-dom";

export default function Book({ book }) {
  const { category,image, author, bookName, tags,bookId } = book;
  return (
   
    <Link to={`/books/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-xl p-6">
      <figure className="bg-gray-200 py-8 rounded-lg ">
        <img
          className="h-[175px]  rounded-lg  object-cover"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-4">
          {tags.map((tag, index) => (

<button key={index} className="btn btn-xs bg-green-100 text-green-600">
{tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}
        </h2>
        <p>By:{author}</p>
        <div className="border-t-2 border-dashed py-2"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>

          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-200"
            />
          </div>
        </div>
      </div>
    </div>
   </Link>
  );
}
Book.propType = {
  book: object.isRequired,
};
