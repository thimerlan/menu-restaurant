import { Link } from "react-router-dom";
import { useParams } from "react-router";
function Dessert({ data }) {
  const { title } = useParams();
  let FilteredDesserts = data.filter((item) => {
    if (item.title === title) {
      return item;
    }
  });
  return (
    <>
      <div className="singleDessert">
        <div className="dessert dessert-card">
          <div className="desserts-img dessert-img-op">
            <img src={FilteredDesserts[0].image} alt="" />
          </div>
          <div className="anime-texts">
            <h2>{FilteredDesserts[0].title}</h2>
            <h3>{FilteredDesserts[0].description}</h3>
          </div>
          <Link
            style={{
              margin: "50px 0px 0px 0px",
              fontWeight: "700",
              fontSize: "21px",
              textShadow: "2px 2px 3px #222",
            }}
            to={"/Desserts"}
          >
            Go to Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dessert;
