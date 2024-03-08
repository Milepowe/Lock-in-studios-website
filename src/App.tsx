'use client';

import React from "react";
import { Card, Flowbite, Footer  } from 'flowbite-react';
import "./index.css";

export function App() {
  return (
    <body>
      <header className="mx-0 px-0 h-screen">
    <Card href="#" className=" right-0.5 align-bottom">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Work in progress
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
        this will change one day when some person will finish developing the website
      </p>
    </Card>
    <Footer container className=""></Footer>
    </header>
    </body>
  
  );
}

export default App;
