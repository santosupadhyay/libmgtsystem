import React from 'react';
import { XCircle, Home, ShoppingCart, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Payment Cancelled</h1>
          <p className="text-gray-600 mb-6">
            Your payment was not completed. No charges have been made to your account. 
            You can try again whenever you're ready.
          </p>

          {/* Help Section */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Need help?</h3>
            <p className="text-sm text-gray-600">
              If you encountered any issues during payment, our support team is here to help.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </button>
            <button className="w-full border border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              View Cart
            </button>
          </div>

          {/* Back to Home */}
          <Link
            to="/"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* Support Text */}
          <p className="text-sm text-gray-500 mt-6">
            Questions? <a href="/contact" className="text-orange-600 hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cancel;