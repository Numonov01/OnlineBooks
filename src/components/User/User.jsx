// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoIosClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const User = ({ orderUser, handleOrderUser }) => {
  return (
    <>
      {orderUser && (
        <div
          className="h-screen w-screen fixed top-0 left-0 z-20
        backdrop-blur-sm"
        >
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2
          -translate-y-1/2 bg-white dark:bg-gray-900 dark:text-white
          duration-200 p-4 rounded-md shadow-md w-[300px]"
          >
            {/* header  */}
            <div className="flex items-center justify-between">
              <h1>Order Your Book</h1>
              <div>
                <IoIosClose
                  className="text-4xl cursor-pointer"
                  onClick={() => handleOrderUser(false)}
                />
              </div>
            </div>

            {/* from body  */}

            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300
              dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-gray-300
              dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300
              dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <div className="flex justify-center">
                <button className="bg-primary text-white px-4 py-2 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
