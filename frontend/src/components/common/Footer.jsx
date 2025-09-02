import { FaBook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side - Brand */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <FaBook className="text-blue-600 text-xl" />
          <span className="text-gray-700 font-semibold text-lg">
            LibraryMS
          </span>
        </div>

        {/* Center - Made with love */}
        <div className="text-gray-500 text-sm text-center">
          Made with ❤️ by <span className="font-medium">Santos Upadhyay</span>
        </div>

        {/* Right side - Year */}
        <div className="text-gray-400 text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Library Management System
        </div>

      </div>
    </footer>
  );
};

export default Footer;
