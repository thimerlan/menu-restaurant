import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Burgers from "./Components/Burger/Burgers";
import Beverages from "./Components/Beverage/Beverages";
import { Beverage } from "./Components/Beverage/Beverage";
import SingleBeverage from "./Components/Beverage/SingleBeverage";
import { Food } from "././Components/Burger/Food";
import { DessertData } from "./Components/Desserts/DessertData";
import Dessert from "./Components/Desserts/Dessert";
import Desserts from "./Components/Desserts/Desserts";
import "./App.css";
import "././Components/searchBox.css";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import { Scroll } from "./Components/Scroll";
import Burger from "././Components/Burger/Burger";
import HomePage from "./HomePage";
import menuImg from "./assests/menu.jpg";
const App = () => {
  let [search, setSearch] = useState("");

  const SearchFilterBurgers = (data) => {
    return Food.filter(
      (item) =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        item.price.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  };
  const SearchFilterBeverage = (data) => {
    return Beverage.filter(
      (item) =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        item.price.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  };
  const SearchFilterDesserts = (data) => {
    return DessertData.filter(
      (item) =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        item.price.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  };
  function ClearInput() {
    setSearch("");
  }
  return (
    <div className="App">
      <div className="menu-img">
        <img src={menuImg} alt="" />
      </div>
      <div className="Search-container">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div onClick={() => ClearInput()} className="search"></div>
      </div>
      <div className="menu-links">
        <NavLink to={"/Burgers"}>Burgers</NavLink>
        <NavLink onClick={() => ClearInput()} to={"Beverages"}>
          Beverages
        </NavLink>
        <NavLink onClick={() => ClearInput()} to={"Desserts"}>
          Desserts
        </NavLink>
      </div>
      <Routes>
        <Route
          path="/Burgers"
          element={
            <Scroll>
              <Burgers data={SearchFilterBurgers(Food)} />
            </Scroll>
          }
        />
        <Route path="/Burgers/:title" element={<Burger data={Food} />} />
        <Route
          path="/Beverages"
          element={
            <Scroll>
              <Beverages data={SearchFilterBeverage(Beverage)} />
            </Scroll>
          }
        />
        <Route
          path="/Beverages/:title"
          element={<SingleBeverage data={Beverage} />}
        />
        <Route
          path="/Desserts"
          element={
            <Scroll>
              <Desserts data={SearchFilterDesserts(DessertData)} />
            </Scroll>
          }
        />
        <Route
          path="/Desserts/:title"
          element={<Dessert data={DessertData} />}
        />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
{
  /* <Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route>
  </Route>
</Routes>; */
}
