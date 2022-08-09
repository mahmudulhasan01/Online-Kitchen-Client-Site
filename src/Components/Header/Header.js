import React, { useState, useEffect } from "react";
import "./Header.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../../assets/hero.jpg";
// import "../styles/hero-section.css";

import { Link } from "react-router-dom";

// import Category from "../components/UI/category/Category.jsx";

// import "../styles/home.css";

// import products from "../assets/fake-data/products.js";

// import foodCategoryImg01 from "../assets/images/hamburger.png";
// import foodCategoryImg02 from "../assets/images/pizza.png";
// import foodCategoryImg03 from "../assets/images/bread.png";

// import ProductCard from "../components/UI/product-card/ProductCard.jsx";

const Header = () => {
  // const [category, setCategory] = useState("ALL");
  // const [allProducts, setAllProducts] = useState(products);

  // const [hotPizza, setHotPizza] = useState([]);

  // useEffect(() => {
  //   const filteredPizza = products.filter((item) => item.category === "Pizza");
  //   const slicePizza = filteredPizza.slice(0, 4);
  //   setHotPizza(slicePizza);
  // }, []);

  // useEffect(() => {
  //   if (category === "ALL") {
  //     setAllProducts(products);
  //   }

  //   if (category === "BURGER") {
  //     const filteredProducts = products.filter(
  //       (item) => item.category === "Burger"
  //     );

  //     setAllProducts(filteredProducts);
  //   }

  //   if (category === "PIZZA") {
  //     const filteredProducts = products.filter(
  //       (item) => item.category === "Pizza"
  //     );

  //     setAllProducts(filteredProducts);
  //   }

  //   if (category === "BREAD") {
  //     const filteredProducts = products.filter(
  //       (item) => item.category === "Bread"
  //     );

  //     setAllProducts(filteredProducts);
  //   }
  // }, [category]);
  return (
    <header>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="">
        {/* <section className="pt-0">
        <Category />
      </section> */}

        {/* */}

        {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

        {/* */}

        {/* <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

        {/*  */}
      </div>
    </header>
  );
};

export default Header;
