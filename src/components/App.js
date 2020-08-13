import React from "react";
import Buttons from "./Buttons";
import Screen from "./Screen";
import History from "./ToolComonents/History";
import Tools from "./Tools";
const App = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6">
          <Screen />
          <Buttons />
        </div>
        <div className="col-6">
          <Tools />
        </div>
      </div>
    </div>
  );
};

export default App;
