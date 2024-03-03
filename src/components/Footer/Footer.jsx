// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
  {
    title: "HBlog",
    link: "#",
  },
];

function Footer() {
  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-950">
        <div className="container">
          <div className="grid md:grid-cols-3 py-5">
            {/* company detals */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                Book Store
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                et repudiandae assumenda consequuntur eaque quo!{" "}
              </p>
              <br />
              {/* social links */}
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Toshkent, Yunusobod region</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+998 90 002 79 66</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://instagram.com/">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://web.telegram.org/a/">
                  <FaTelegram className="text-3xl" />
                </a>
              </div>
            </div>
            {/* Link section  */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                    Import Link
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((data) => (
                      // eslint-disable-next-line react/jsx-key
                      <li
                        className="cursor-pointer hover:translate-x-1 duration-300
                    hover:text-primary space-x-1 text-gray-500"
                      >
                        <span>&#11162;</span>
                        <span>{data.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                    Import Link
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((data) => (
                      // eslint-disable-next-line react/jsx-key
                      <li
                        className="cursor-pointer hover:translate-x-1 duration-300
                    hover:text-primary space-x-1 text-gray-500"
                      >
                        <span>&#11162;</span>
                        <span>{data.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                    Import Link
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((data) => (
                      // eslint-disable-next-line react/jsx-key
                      <li
                        className="cursor-pointer hover:translate-x-1 duration-300
                    hover:text-primary space-x-1 text-gray-500"
                      >
                        <span>&#11162;</span>
                        <span>{data.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
