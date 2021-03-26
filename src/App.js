import React from 'react';
import './App.css';
import Home from "./pages/Home/home";
import Header from "./components/Header/header";
import Logo from "./components/Logo/Logo";
import Card from "./components/Card/Card";


export default function App() {
  return (

    <div className="App">
        <Header/>
        <Home/>
    </div>

  );
}


{/*Resources:
https://www.kirupa.com/react/building_your_first_react_app.htm
https://getbootstrap.com/ -> CSS/HTML
https://reactrouter.com/web/api/NavLink -> React
*/}