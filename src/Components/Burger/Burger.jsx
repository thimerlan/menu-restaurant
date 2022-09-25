// import { useParams } from "react-router";
import { Link, useParams } from "react-router-dom";
function Burger({ data }) {
  const { title } = useParams();
  let filteredBurgers = data.filter((item, index) => {
    if (item.title == title) {
      return item;
    }
  });
  return (
    <div className="singleBurger">
      <div className="burger burger-card">
        <div className="burger-img burger-img-op">
          <img src={filteredBurgers[0].image} alt="" />
        </div>
        <div className="anime-texts">
          <h2>{filteredBurgers[0].title}</h2>
          <h3>{filteredBurgers[0].description}</h3>
        </div>
        <Link
          style={{
            margin: "50px 0px 0px 0px",
            fontWeight: "700",
            fontSize: "21px",
            textShadow: "2px 2px 3px #222",
          }}
          to={"/Burgers"}
        >
          Go to Back
        </Link>
      </div>
    </div>
  );
}

export default Burger;
