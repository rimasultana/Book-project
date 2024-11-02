import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl text-gray-700 mb-4">Page Not Found</h2>
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 font-medium text-lg"
      >
        Go back to Home
      </Link>
    </div>
  );
}
