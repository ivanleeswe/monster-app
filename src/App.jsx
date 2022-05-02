import React, { useState, useEffect } from "react";
import monsterData from "./monsters_dataset.json";

import Table from "./components/Table";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    setMonsters(monsterData);
  }, []);

  const monsterFeatures = [
    "monster id",
    "number of arms",
    "number of legs",
    "power level",
  ];

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__title">
          Mage Take Home <span className="app__subtitle">Ivan Lee</span>
        </h1>
        <Table
          columnNames={monsterFeatures}
          data={monsters}
          title={"monster type"}
        />
      </div>
    </div>
  );
};

export default App;
