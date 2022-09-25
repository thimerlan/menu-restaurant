import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const SingleBeverage = ({ data }) => {
  const { title } = useParams();
  let FilteredBeverages = data.filter((item) => {
    if (item.title == title) {
      return item;
    }
  });
  return (
    <div className="singleBeverage">
      <div className="beverage beverage-card">
        <div className="beverage-img beverage-img-op">
          <img src={FilteredBeverages[0].image} alt="" />
        </div>
        <div className="anime-texts">
          <h2>{FilteredBeverages[0].title}</h2>
          <h3>{FilteredBeverages[0].description}</h3>
        </div>
        <Link
          style={{
            margin: "50px 0px 0px 0px",
            fontWeight: "700",
            fontSize: "21px",
            textShadow: "2px 2px 3px #222",
          }}
          to={"/Beverages"}
        >
          Go to Back
        </Link>
      </div>
    </div>
  );
};
export default SingleBeverage;
