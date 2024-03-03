// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import BestBooks from "./components/BestBooks/BestBooks";
import AppStroreBanner from "./components/AppStoreBanner/AppStroreBanner";
import TopBooks from "./components/TopBooks/TopBooks";
import Authors from "./components/Authors/Authors";
import Footer from "./components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import User from "./components/User/User";

const App = () => {
  const [orderUser, setOrderUser] = React.useState(false);

  const handleOrderUser = () => {
    setOrderUser(!orderUser);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderUser={handleOrderUser} />
        <Hero handleOrderUser={handleOrderUser} />
        <BestBooks handleOrderUser={handleOrderUser} />
        <AppStroreBanner />
        <TopBooks />
        <Authors />
        <Footer />
        <User handleOrderUser={handleOrderUser} orderUser={orderUser} />
      </div>
    </>
  );
};

export default App;
