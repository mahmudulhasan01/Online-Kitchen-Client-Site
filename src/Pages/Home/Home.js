import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Category from "./Category/Category";
import OurService from "./OurService/OurService";
import Peculiarity from "./Peculiarity/Peculiarity";
import PopurlerFoods from "./PopurlerFoods/PopurlerFoods";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Category></Category>
      <PopurlerFoods></PopurlerFoods>
      <OurService></OurService>
      <Peculiarity></Peculiarity>
      {/* <Testimonial></Testimonial> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
