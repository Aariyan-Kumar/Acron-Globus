import React from "react";
import { Outlet } from 'react-router-dom';
import { Sidebar } from "./components/index";


function App() {
  return (
    <>
      <div>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
