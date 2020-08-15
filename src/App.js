import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import EventsPage from './Pages/EventsPage/EventsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App__Content">
        <Route path="/login"><LoginPage /></Route>
        <Route path="/" exact><EventsPage /></Route>
      </div>
    </div>
  );
}

export default App;
