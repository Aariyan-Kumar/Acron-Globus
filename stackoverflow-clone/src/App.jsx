import React from "react";
import { Outlet } from 'react-router-dom';
import { Sidebar } from "./components/index";
import { RightSidebar } from "./components/index";


function App() {
  return (
    <>
      <div className="bg-[#ffb901] py-16">
      <div className="flex mx-24 bg-white min-h-[900px] rounded-3xl">
        <Sidebar />
        <main>
          <Outlet />
        </main>
        <RightSidebar />
      </div>
    </div>
    </>
  )
}

export default App
