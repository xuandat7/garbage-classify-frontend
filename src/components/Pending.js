import '../app.css';
const Pending = () => {
  return (
    <div className="flex flex-col drop-shadow-lg p-5 justify-between bg-white w-4/5 md:w-2/6 rounded-md">
      <p className="text-sm w-15 mb-5 font-semibold">Please wait. This won't take long...</p>
      <div className="w-full p-0 h-1 bg-grey mb-5 relative">
        <div className="absolute w-0 loader bg-green-500 h-1" />
      </div>
    </div>
  );
};

export default Pending;