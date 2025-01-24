import React, { useState } from "react";
import PageHeaderContent from "../../components/header";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/IMAGE1.jpg";
import ImageTwo from "../../images/image3.JPG";
import ImageThree from "../../images/image2.png";
import ImageFour from "../../images/image4.jpeg";
import ImageFive from "../../images/image5.JPG";
import "./styles.scss";
import { FaFolder } from "react-icons/fa";

const portfolioData = [
  {
    id: 3,
    name: "Subisu WebSite",
    image: ImageOne,
    link: "https://example.com/ecommercehttps://subisu.net.np/",
  },
  
  {
    id: 2,
    name: "EVA video demo",
    image: ImageThree,
  link: "https://drive.google.com/file/d/1FVzYQlT9dFbqKQ2YyLQwFCAjzLjf5sEd/view?usp=sharing"  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,
    link: "https://example.com/todo-app",
  },
  
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<FaFolder size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p
                      style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#fff",
                        marginBottom: "1rem",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      {item.name}
                    </p>
                    <button
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "#fff",
                        marginBottom: "1rem",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                        cursor: "pointer",
              
                      }}
                      onClick={() => {
                        if (item.link) {
                          window.open(item.link, "_blank"); // Opens the link in a new tab
                        } else {
                          alert("Link not available");
                        }
                      }}
                    >
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
