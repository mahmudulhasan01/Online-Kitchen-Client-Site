import React from "react";
import "./category.css";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/category-01.png";
import categoryImg02 from "../../../assets/category-02.png";
import categoryImg03 from "../../../assets/category-03.png";
import categoryImg04 from "../../../assets/category-04.png";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },

  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },

  {
    display: "Row Meat",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <section>
      <Container>
        <Row>
          {categoryData.map((item, index) => (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
              <div className="category__item d-flex align-items-center gap-3">
                <div className="category__img">
                  <img src={item.imgUrl} alt="category__item" />
                </div>
                <h6>{item.display}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Category;
