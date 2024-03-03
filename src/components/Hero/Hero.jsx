// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Lovepik from "../../assets/art/Lovepik.png";
// import { data } from "autoprefixer";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "ALISHER NAVOIY",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisicing elit. dolor aliquam",
  },
  {
    id: 2,
    img: Book2,
    title: "ABDULLA QODIRIY",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt iste obcaecati! Praesentium, pariatur ut alias eius porro quidem ab?",
  },
  {
    id: 3,
    img: Book3,
    title: "YULDUZLAR MANGU YONADI",
    description:
      "Lorem ipsum dolor sit amet cot consectetur adnesciunt iste obcaecati! Praesentium, pariatur ut alias eius porro quidem ab? adipisicing elit. Excepturi",
  },
];

// eslint-disable-next-line react/prop-types
const Hero = ({ handleOrderUser }) => {
  const [imageId, setImageId] = useState(Book3);
  const [title, setTitle] = useState("YULDUZLAR MANGU YONADI");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor aliquam commodi. Quasi minus, veniam repudiandae ab vitae voluptas provident."
  );

  const bgImage = {
    backgroundImage: `url(${Lovepik})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };
  return (
    <>
      <div
        className="max-h-[550px] sm:min-h-[659px]
    bg-gray-200 flex justify-center items-center
    dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-2 sm:grid-cols-2">
            {/* text container section */}
            <div
              className="flex flex-col justify-center
            gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duratin="500"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
                <p
                  data-aos="slide-up"
                  data-aos-duratin="500"
                  data-aos-delay="100"
                  className="bg-clip-text text-transparent 
              bg-gradient-to-b from-primary text-right 
              text-sm"
                >
                  by Anonymous
                </p>
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duratin="500"
                data-aos-delay="100"
                className="text-sm"
              >
                {description}
              </p>
              <div>
                <button
                  onClick={handleOrderUser}
                  data-aos="zoom-in"
                  className="bg-gradient-to-r from-primary
             text-white px-4 py-2 rounded-full
            mt-4 hover:scale-105 duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>

            {/* image section */}

            <div
              className="min-h-[450px] flex justify-center
            items-center relative order-1 sm:order-2"
            >
              <div
                className="h-[300px] sm:h-[450px] overflow-hidden
              flex justify-center items-center"
              >
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt=""
                  className="w-[300px] h-[300px] sm:[h-450px]
                sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              {/* other books list  */}
              <div
                className="flex lg:flex-col lg:top-1/2
              lg:-translate-y-1/2 lg:py-2 justify-center gap-4
              absolute -bottom-[40px] lg:-right-1 bg-white rounded-full"
              >
                {ImageList.map((data) => (
                  // eslint-disable-next-line react/jsx-key
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={data.img}
                    alt=""
                    className="max-w-[100px] h-[100px] object-contain
                    inline-block hover:scale-110 duration-200"
                    onClick={() => {
                      setImageId(
                        data.id === 1 ? Book1 : data.id === 2 ? Book2 : Book3
                      );
                      setTitle(data.title);
                      setDescription(data.description);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
