// NotFound.js
import React from 'react';

const NotFound = () => {
  return (
    <div className="relative bg-black md:h-full h-[800px]">
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1504177847824-d075f5706770?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className=""
          alt="not found"
        />
      </div>
      <div className="absolute inset-1">
        <div className="flex justify-center mt-20">
          <img
            src="https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif"
            alt="Sad GIF"
            className="sad-gif md:w-[400px] w-[300px]"
          />
        </div>
        <div className="flex md:p-0 p-6 justify-center">
          <div className="mt-10 w-full text-center shadow-black shadow-2xl backdrop-blur-lg text-white bg-[#8d8c8c49] p-8 rounded-lg">
            <div className="text-3xl w-full">
              <h1 className="text-back font-Main">Error 404 - Page Not Found</h1>
              <br />
              <p className="text-back font-Main">The page you are looking for does not exist.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
