import axios from "axios";

const BookCard = ({ id, title, author, category, price, available }) => {
  const borrowFee = (price * 0.1).toFixed(2);

  const user = JSON.parse(localStorage.getItem("user"));
  const email = user?.email;

  const handleBorrow = async () => {
  try {
    console.log(id, email, borrowFee);
    const response = await axios.post('http://localhost:3000/api/payments/create-checkout-session', { 
      bookId: id, 
      userEmail: email, 
      borrowFee 
    });
    
    const data = response.data;
    console.log(data);
    
    // ✅ Redirect user to Stripe Checkout page
    if (data.success && data.url) {
      window.location.href = data.url;
    } else {
      console.error('No URL received from server');
    }
    
  } catch (error) {
    console.error('Error creating checkout session:', error);
  }
}

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      {/* Book Image Placeholder */}
      <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
        <div className="text-white text-6xl font-light">📚</div>
      </div>

      {/* Book Details */}
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">
          {title}
        </h2>

        <div className="space-y-2 mb-4">
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">✍️</span>
            <p className="text-gray-600 font-medium">by {author}</p>
          </div>

          <div className="flex items-center">
            <span className="text-gray-500 mr-2">🏷️</span>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Purchase Price:</span>
            <span className="text-lg font-bold text-gray-800">${price}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600">Borrow Fee:</span>
            <span className="text-lg font-bold text-green-600">
              ${borrowFee}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Availability:</span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              available
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {available ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="p-6 pt-4 border-t border-gray-100 bg-white">
        <button
          onClick={handleBorrow}
          disabled={!available}
          className={`
            w-full py-3 px-6 text-white rounded-xl transition-all duration-200
            font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105
            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
            disabled:hover:shadow-md
            ${
              available
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                : "bg-gray-400"
            }
          `}
        >
          {available ? (
            <div className="flex items-center justify-center">
              <span className="mr-2">📖</span>
              Borrow & Pay ${borrowFee}
            </div>
          ) : (
            "Not Available"
          )}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
