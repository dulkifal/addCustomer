import React from 'react';



import './App.css';
import { Sidebar, Topnav } from './components/topnav';
import Dashboard from './components/dashboard';
import { useEffect, useState } from 'react'


function App() {
 

  return (
    <div className="App">
      <Topnav />
      <Sidebar />

      <Dashboard />
      {/* <p>{!data ? "Loading..." : data}</p> */}

    </div>
  );
}

export default App;
