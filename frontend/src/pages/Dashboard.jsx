import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { books, loading, error } = useSelector((state) => state.admin);
    const length = books.length;


  if (loading) <p>Loading...</p>;
  if (error) <p>Error...</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-3xl font-bold text-blue-600">{length}</h2>
            <p className="text-gray-600">Total Books</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-3xl font-bold text-purple-600">185</h2>
            <p className="text-gray-600">Books on Rent</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Quick Actions
            </h3>
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <Link to="/admin/addbook">+ Add New Book</Link>
            </button>
            <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600">
              <Link to="/admin/booklist" className="mb-6">
                View All Books
              </Link>
            </button>
            <button className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Rented Books
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Recent Activity
            </h3>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <p className="text-green-600 font-medium">
                Jane Smith returned{" "}
                <span className="text-gray-800">"The Silent Patient"</span>
              </p>
              <p className="text-sm text-gray-500">5 minutes ago</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <p className="text-red-600 font-medium">
                John Doe checked out{" "}
                <span className="text-gray-800">"Dune"</span>
              </p>
              <p className="text-sm text-gray-500">1 hour ago</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <p className="text-blue-600 font-medium">
                New Member:{" "}
                <span className="text-gray-800">Michael Jordan</span>
              </p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
