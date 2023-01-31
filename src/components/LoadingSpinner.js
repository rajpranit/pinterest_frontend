import React from "react";
import { Circles } from "react-loader-spinner";

const LoadingSpinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Circles height={50} width={200} color="#00BFFF" className="m-5" />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
