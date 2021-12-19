import React from "react";
import Nav from "./Nav";
import PigsList from "./PigsList";
import { useState } from "react";

import hogs from "../porkers_data";
import GreasedFilter from "./GreasedFilter";
import NameSearch from "./NameSearch";
import SortFunction from "./SortFunction";

function App() {
  const [filterPig, setFilterPig] = useState(hogs);

  const searchName = (event) => {
    return setFilterPig(
      hogs.filter((hog) => {
        return hog.name
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase());
      })
    );
  };

  //Sorts the piggies in alp or weight order
  const sortHandler = (event) => {
    if (event.target.value === "name-a") {
      setFilterPig(hogs.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } else if (event.target.value === "name-z") {
      setFilterPig(hogs.sort((a, b) => (a.name < b.name ? 1 : -1)));
    } else if (event.target.value === "weight-light") {
      setFilterPig(hogs.sort((a, b) => (a.weight > b.weight ? 1 : -1)));
    } else if (event.target.value === "weight-heavy") {
      setFilterPig(hogs.sort((a, b) => (a.weight < b.weight ? 1 : -1)));
    } else {
      setFilterPig(hogs);
    }
  };

  const filterHandler = (event) => {
    const filteredPigList = hogs.filter((pig) => {
      return event.target.value === "either"
        ? hogs
        : event.target.value === "greased"
        ? pig.greased === true
        : pig.greased === false;
    });
    setFilterPig(filteredPigList);
  };

  return (
    <div className="App">
      <Nav />
      <NameSearch searchName={searchName} />
      <GreasedFilter filterHandler={filterHandler} />
      <SortFunction sortHandler={sortHandler} />
      <div className="ui grid container">
        <PigsList hogs={filterPig} />
      </div>
    </div>
  );
}

export default App;
