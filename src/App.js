import React from 'react';


import './App.css';
import {Sidebar, Topnav} from './components/topnav';
import Dashboard from './components/dashboard'

function App() {
  return (
    <div className="App">
       <Topnav/>
        <Sidebar/>
        <Dashboard/>
 
    </div>
  );
}

export default App;
