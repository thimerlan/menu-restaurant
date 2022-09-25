import "./Desserts.css";
import { Link } from "react-router-dom";
function Desserts({ data }) {
  return (
    <>
      <>
        <section className="desserts-SC">
          <div className="desserts-container">
            <div className="desserts">
              {data.map((item, index) => {
                return (
                  <div key={index} className="dessert">
                    <div style={{ cursor: "default" }} className="desserts-img">
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.title}</h2>
                    <h3>{item.price}</h3>
                    <Link
                      style={{
                        fontSize: "21px",
                        textShadow: "2px 2px 3px #222",
                      }}
                      to={`/Desserts/${item.title}`}
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
    </>
  );
}

export default Desserts;
