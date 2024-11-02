import { object } from "prop-types";

export default function Book({ book }) {
  const { category, rating, image, author, bookName } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-6">
      <figure className="bg-gray-200 py-8 rounded-lg">
        <img className="h-[175px]  rounded-lg  object-cover" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By:{author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
Book.propType = {
  book: object.isRequired,
};
