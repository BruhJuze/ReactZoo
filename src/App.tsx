import React from 'react';
import { Outlet } from "react-router-dom";
import './App.scss';


function App() {
  return (
    <>
      <header>
      </header>
      <main>
        <Outlet ></Outlet>
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
