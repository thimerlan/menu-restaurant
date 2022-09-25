import "./App.css";
import { NavLink } from "react-router-dom";
function HomePage() {
  return (
    <section className="homePage">
      <div className="animeHome">
        <h1 className="homeTitle">Choose Menu:</h1>
        <div className="menu-links">
          <NavLink className="home-links" to={"/Burgers"}>
            Burgers
          </NavLink>
          <NavLink className="home-links" to={"/Beverages"}>
            Beverages
          </NavLink>
          <NavLink className="home-links" to={"Desserts"}>
            Desserts
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
