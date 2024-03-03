// eslint-disable-next-line no-unused-vars
import React from "react";

import BoardImg from "../../assets/books/Background.jpg";
import AppStoreImg from "../../assets/art/AppStore.png";
import GooglePlayImg from "../../assets/art/GooglePlay.png";

const BannerImg = {
  backgroundImage: `url(${BoardImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

function AppStroreBanner() {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-gray-800 text-white py-10"
        style={BannerImg}
      >
        <div className="container">
          <div className="space-y-6 max-w-xl mx-auto">
            <div className="text-2xl text-center sm:text-4xl font-semibold">
              <h1 data-aos="slide-up">Application for reading books online</h1>
              <div
                data-aos="slide-up"
                className="flex flex-wrap justify-center items-center gap-4"
              >
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt=""
                    className="max-w-[150px] sm:min-w-[120px] md:min-w-[220px] hover:scale-105"
                  />
                </a>
                <a href="#">
                  <img
                    src={GooglePlayImg}
                    alt=""
                    className="max-w-[150px] sm:min-w-[120px] md:min-w-[170px] hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppStroreBanner;
