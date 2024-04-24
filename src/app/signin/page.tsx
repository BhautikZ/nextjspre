import React from "react";

function Sigin() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 shadow-md p-6">
        {" "}
        {/* Add 'gap-4' or whatever gap size you prefer */}
        <div className="shadow-md rounded-xl p-4 pb-4 mt-4">
          <h2 className="font-bold text-xl ">Login</h2>
          {/* First input */}
          <div className="flex flex-col space-y-3">
            <label htmlFor="first-input" className="block text-sm font-medium text-gray-700">
              First Input
            </label>
            <input type="text" className="border rounded-md p-1" placeholder="Input 1" />

            {/* Second input */}
            <label htmlFor="first-input" className="block text-sm font-medium text-gray-700">
              second Input
            </label>
            <input type="text" className="border rounded-md p-1" placeholder="Input 2" />
          </div>

          <button></button>
        </div>{" "}
        {/* Login form section */}
        <div>3</div> {/* Animation div */}
      </div>
    </div>
  );
}

export default Sigin;
