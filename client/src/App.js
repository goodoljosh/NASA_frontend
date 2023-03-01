import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header";
import Nav  from "./components/Nav";
// import './Nav.css';
import './App.css';


function App() {
  const [nasaParse, setNasaParse] = useState({})
  
  useEffect(()=>{
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

