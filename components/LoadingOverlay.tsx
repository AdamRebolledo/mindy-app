import React from "react";

const LoadingOverlay = () => {
 return (
  <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50'>
   <div className='spinner border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-16 w-16'></div>
  </div>
 );
};

export default LoadingOverlay;
