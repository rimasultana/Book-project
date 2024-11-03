import bannerImg from "../../assets/books.jpg";
export default function Banner() {
  return (
    <div className="my-10">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="mr-10">
            <h1 className="text-5xl font-bold mb-5">Books to freshen up <br /> your bookshelf</h1>
            <button className="btn bg-green-700 text-white font-bold">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
}
