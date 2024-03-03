// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";
import Book6 from "../../assets/books/book6.jpg";
import { FaStar } from "react-icons/fa";
// import { data } from "autoprefixer";

const data = [
  {
    id: 1,
    img: Book1,
    title: "Orazin yopqach ko'zumdir",
    rating: 5.0,
    author: "Alisher Navoiy",
  },
  {
    id: 2,
    img: Book2,
    title: "Abdulla Qodiriy",
    rating: 4.9,
    author: "Ulug'bek Hamdam",
  },
  {
    id: 3,
    img: Book3,
    title: "Yulduzlar mangu yonadi",
    rating: 4.7,
    author: "Tog'ay Murod",
  },
  {
    id: 4,
    img: Book4,
    title: "Olmos kamar",
    rating: 3.8,
    author: "Pirimqul Qodirov",
  },
  {
    id: 4.8,
    img: Book5,
    title: "O'g'irlangan bolalik",
    rating: 4.1,
    author: "Komil Sindarov",
  },
  {
    id: 6,
    img: Book6,
    title: "Jallod Ayol",
    rating: 3.3,
    author: "Nabi Jallod",
  },
];

function TopBooks() {
  const [BooksData, setBooksData] = useState(data);
  function filterData(e) {
    const str = e.target.value.toLowerCase();

    setBooksData(
      data.filter(
        (el) =>
          el.title.toLowerCase().includes(str) ||
          el.author.toLowerCase().includes(str) ||
          el.rating.toString().includes(str)
      )
    );
  }
  return (
    <>
      <div className="py-10" id="Reting">
        <div className="container placeholder-gray-100">
          {/* header  */}

          <div
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px] mx-auto"
          >
            <p className="text-sm bg-gradient-to-r from-primary rounded-full">
              Rating Books
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolorum magnam facilis atque, ducimus aut vel laborum molestiae!
              corporis{" "}
            </p>
            <div className="search">
              <input
                className="bg-gradient-to-r from-black
              px-4 py-2 rounded-full
            mt-4 hover:scale-105 duration-200"
                type="text"
                onChange={filterData}
                placeholder="Search Here..."
              />
            </div>
          </div>
          {/* card  */}
          <div className="" data-aos="slide-up">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
            lg:grid-cols-5 place-items-center gap-5"
            >
              {BooksData.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <div className="space-y-3">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-semibold">{data.title}</h2>
                    <p
                      className="text-sm text-gray-700
                     dark:text-gray-400"
                    >
                      {data.author}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                className="text-center mt-10 cursor-pointer bg-primary text-white
              py-2 px-5 rounded-full  hover:scale-105"
              >
                View all books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBooks;
