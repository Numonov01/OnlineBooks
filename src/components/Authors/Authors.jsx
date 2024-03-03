// eslint-disable-next-line no-unused-vars
// import { data } from "autoprefixer";
// import React from "react";
import Slider from "react-slick";
import AbdullaO from "../../assets/books/AbdullaOripov.jpg";
import ChingizA from "../../assets/books/ChingizA.jpg";
import XudoyberdiT from "../../assets/books/XudoyberdiT.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Abdulla Oripov ",
    text: `She’riyatida asl o‘zbek o‘g‘loni portreti va uning xarakteri yashaydi. U donishmand qiyofasiga kirib o‘zlikdan saboq beradi.
    Abdulla Oripov chin ma’noda o‘zbekning asl surati edi. Bu suratni G‘afur G‘ulom singari adiblardan olgan va suratni yangi qiyofada gavdalantira olgan adib bo‘lib tanildi. Uning she’riyatida xalqonalik bilan bir qatorda falsafiy teranlik o‘z aksini topgan.`,
    img: AbdullaO,
  },
  {
    id: 2,
    name: "Chingiz Aytmatov",
    text: `Qirg‘iziston xalq yozuvchisi, Qirg‘iziston qahramoni, ko‘plab ordenlar, jumladan O‘zbekistonning «Do‘stlik» ordeni sohibi,
    uch marta SSSR davlat mukofoti bilan taqdirlangan, Qirg‘iziston davlat mukofoti, Javoharlal Neru, Viktor Gyugo va Fridrix Ryukkert nomidagi mukofotlar, «Ruhoniyat» mukofoti, turk tilli mamlakatlar rivojiga qo‘shgan.`,
    img: ChingizA,
  },
  {
    id: 3,
    name: "Xudoyberdi To'xtaboyev",
    text: `«Sehrli qalpoqcha», «Sariq devni minib» ( jami 24 tilga tarjima qilingan), «Sariq devning o‘limi», «Besh bolali yigitcha», «Qasoskorning oltin boshi», «Yillar va yo‘llar», «Sehrgarlar jangi yoki shirin qovunlar 
    mamlakatida», «Mungli ko‘zlar», «Sir ochildi», «Omonboy va Davronboy sarguzashti», «Jannati odamlar», «Shoshqaloq», «So‘qmoqlar» va boshqa ko‘plab sevimli asarlar muallifi.k`,
    img: XudoyberdiT,
  },
];

function Authors() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    resposive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="pb-10" id="Authors">
        <div className="container">
          {/* header  */}
          <div
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px] mx-auto"
          >
            <p className="text-sm bg-gradient-to-r from-primary rounded-full">
              Authors Bio
            </p>
            <h1 className="text-3xl font-bold">Authors</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolorum magnam facilis atque, ducimus aut vel laborum molestiae!
              corporis{" "}
            </p>
          </div>

          {/* card section  */}

          <div data-aos="zoom-in">
            <Slider {...settings}>
              {testimonialData.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <div
                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4
                  rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                  >
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20 object-cover"
                      />
                    </div>
                    <div>
                      <div>
                        <p
                          className="text-gray-500
                        text-sm"
                        >
                          {data.text}
                        </p>
                        <h1
                          className="text-xl font-bold text-black/80
                  dark:text-white"
                        >
                          {data.name}
                        </h1>
                      </div>
                      <p
                        className="absolute text-black/20 z-10 top-0 right-0
                  font-serif text-9xl"
                      >
                        ,,
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authors;
