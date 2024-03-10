"use client";

import React from "react";
import "./index.css";
import Darkmode from "./random_things/Darkmode";

export function App() {
  return (
    <body>
      <Darkmode />
      <div className="flex flex-row">
        <div className="card w-96 bg-base-100 shadow-xl object-center">
          <div className="card-body ">
            <h2 className="card-title">cooking very hard</h2>
            <p>we are still cooking</p>
          </div>
          <figure>
            <img
              src="https://media1.tenor.com/m/sQOx-qvdkQUAAAAC/malevolent-kitchen-malevolent-shrine.gif"
              alt="cooking"
            />
          </figure>
        </div>
      </div>
    </body>
  );
}

export default App;
