import React from 'react';
import { Outlet } from "react-router-dom";
import './App.scss';


function App() {
  return (
    <>
      <main>
        <Outlet ></Outlet>
      </main>
    </>
  );
}

export default App;
