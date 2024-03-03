// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../../assets/books/book1.jpg";
import Img2 from "../../assets/books/book2.jpg";
import Img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Img1,
    title: `Alisher Navoiy`,
    description: `Lorem  consectetur adipisicing elit. Explicabo
    dolorum mis atque, ducimus.`,
  },
  {
    id: 2,
    img: Img2,
    title: `Abdulla Qodiriy`,
    description: `Lorem ipsum dolor sit amet  elit. Explicabo
    dolorum magnam.`,
  },
  {
    id: 3,
    img: Img3,
    title: `Yulduzlar mangu yonadi`,
    description: `Lorem ipsum dolor adipisicing elit.`,
  },
];

// eslint-disable-next-line react/prop-types
const BestBooks = ({ handleOrderUser }) => {
  return (
    <>
      <div className="py-10" id="Trending">
        <div className="container">
          {/* Header section  */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-gradient-to-r from-primary rounded-full">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolorum magnam facilis atque, ducimus aut vel laborum molestiae!
              corporis{" "}
            </p>
          </div>

          {/* card section  */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5
        place-items-center"
          >
            {BooksData.map((book) => (
              // eslint-disable-next-line react/jsx-key
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800
              hover:bg-primary dark:hover:bg-primary hover:text-white
              relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={book.img}
                    alt=""
                    className="max-w-[100px]
                  block mx-auto transform -translate-y-14
                  group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>

                  <h1 className="text-xl font-bold">{book.title}</h1>
                  <p
                    className="text-gray-500 group-hover:text-white
                duration-300 text-sm line-clamp-2"
                  >
                    {book.description}
                  </p>
                  <button
                    onClick={handleOrderUser}
                    className="bg-primary to-secondary
                  text-white px-4 py-2 rounded-full
                 mt-4 hover:scale-105 duration-200 group-hover:bg-white
                 group-hover:text-primary"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBooks;
