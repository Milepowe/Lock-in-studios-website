"use client";

import React from "react";
import { Card, Flowbite, Footer } from "flowbite-react";
import "./index.css";
import Darkmode from "./random_things/Darkmode";

export function App() {
  return (
    <body>
      <header className="mx-0 px-0 h-screen">
        <Darkmode />
        <h1>random text goes here</h1>
      </header>
    </body>
  );
}

export default App;
