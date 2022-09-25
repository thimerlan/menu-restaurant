import React from "react";
import { Link } from "react-router-dom";
import "./beverages.css";
const Beverages = ({ data }) => {
  return (
    <>
      <section className="beverages-SC">
        <div className="beverages-container">
          <div className="beverages">
            {data.map((item, index) => {
              return (
                <div key={index} className="beverage">
                  <div className="beverage-img">
                    <img src={item.image} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <h3>{item.price}</h3>
                  <Link
                    style={{ fontSize: "21px", textShadow: "2px 2px 3px #222" }}
                    to={`/Beverages/${item.title}`}
                  >
                    View More..
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Beverages;
