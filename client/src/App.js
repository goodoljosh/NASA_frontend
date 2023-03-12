// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import Header from "./components/Header";
import Nav  from "./components/Nav";
// import './Nav.css';
import './App.css';
import { Outlet } from "react-router-dom";

function App() {
  //   //Variable for testing mars api
  //   const marsDate = new Date("2015/03/04");
  //   console.log(marsDate);
     
  //   // axios.get('https://nasa-backend.onrender.com/npod' ).then(function(response){
  //   //   setNasaParse(JSON.parse(response.data))
  //   // axios.get('https://nasa-backend.onrender.com/mars' ).then(function(response){
  //   //     setNasaParse(JSON.parse(response.data))
  //   })
  // },[])

  



  return (
    <div className="App">
        <Nav />
        <Outlet/>
        <Outlet/>
    </div>
  );
}
export default App;

