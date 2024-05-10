//import CheckIcon from '@mui/icons-material/Check';

const Uploaded = ({ image, predict, advice, color, TrashBinImage }) => {
    const handleRetry = () => {
      window.location.reload();
    };
    return (
      <>
        
        <div className="flex flex-col sm:drop-shadow-lg gap-6 py-16 items-center justify-center w-full mx-4 bg-white md:w-1/2 rounded-3xl">
          <p className="text-center font-semibold text-2xl uppercase text-[#00c306]">phân loại rác thải</p>
          <div className="flex items-center gap-6">
            <img src={image} className="max-w-full mx-auto h-[28vh] sm:h-[28vh] rounded-xl" />
            <div className="flex items-center max-w-full mx-auto h-[28vh] sm:h-[28vh] rounded-xl">
              <img src={TrashBinImage} alt="TrashBin" className="h-16" />
              <p className={`ml-0 mr-2 uppercase text font-bold black`}>{predict}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-green-500 text-slate-600 text-md rounded-xl px-3 py-3 mx-12">
              {advice && advice.map((item, i) => (
                <p key={i} className="mt-2">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <button
            onClick={handleRetry}
            className="bg-green-500 text-stone-50 font-medium rounded-xl w-auto mx-auto px-6 py-3 text-md hover:bg-green-300 hover:text-green-500 transition-all duration-300"
          >
            Retry
          </button>
        </div>
      </>
    );
  };
  
  export default Uploaded;