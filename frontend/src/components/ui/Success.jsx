import React from 'react';
import { CheckCircle, Home, Download, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase! Your book is now available for reading. 
            A confirmation email has been sent to your inbox.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-mono text-gray-900">#ST-287346</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount Paid:</span>
              <span className="font-semibold text-green-600">$29.99</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Book
            </button>
            <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Reading
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
            Need help? <a href="/contact" className="text-blue-600 hover:underline">Contact support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;