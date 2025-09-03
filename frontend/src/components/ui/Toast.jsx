const Toast = ({ message, type }) => {
  const baseClasses =
    "fixed bottom-5 right-5 p-4 rounded-lg shadow-xl text-white font-semibold transition-all duration-300 transform z-50";
  const typeClasses = type === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <div className={`${baseClasses} ${typeClasses} animate-slideIn`}>
      {message}
    </div>
  );
};
export default Toast;
