import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header";
import Nav  from "./components/Nav";
// import './Nav.css';
import './App.css';

function App() {
  const [nasaParse, setNasaParse] = useState({})
    useEffect(()=>{
    //Variable for testing mars api
    const marsDate = new Date("2015/03/04");
    console.log(marsDate);
    axios.get('https://nasa-backend.onrender.com' ).then(function(response){
      setNasaParse(JSON.parse(response.data))
    })
  },[])
   





   

    var config = {
      headers: {credentials: "include" }
    };
    // axios.get("https://3001-csuwebdev-nasabackend-m2liyfnaxnj.ws-us87.gitpod.io", config).then((response) => {
    //    mockNasaResp.image;
    // })
  return (
    <div className="App">
        <Nav />
        <Header nasaResponse={nasaParse}/>
      <footer>
        <p>©</p>
        {nasaParse.copyright}
      </footer>
    </div>
  );
}
export default App;

