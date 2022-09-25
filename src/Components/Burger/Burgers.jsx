import React from "react";
import { Link } from "react-router-dom";
import "./burgers.css";

const Burgers = ({ data }) => {
  return (
    <>
      <section className="burger-SC">
        <div className="burger-container">
          <div className="burgers">
            {data.map((item, index) => {
              return (
                <div key={index} className="burger">
                  <div style={{ cursor: "default" }} className="burger-img">
                    <img src={item.image} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <h3>{item.price}</h3>
                  <Link
                    style={{ fontSize: "21px", textShadow: "2px 2px 3px #222" }}
                    to={`/Burgers/${item.title}`}
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

export default Burgers;
