import React from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';
const mockNasaResp = "https://3001-csuwebdev-nasabackend-4adrwz2qhf4.ws-us87.gitpod.io/";

function App() {
  const[data, setData] = React.useState(null);

  // React.useEffect(()=> {
  //   fetch('/api')
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message));
  // }, []);

  // App.get("/", function(req, res)  {
  //  axios.get('https://nasa-backend.onrender.com' ).then(function(response){
  //    console.log(response);
  //  })
//  });


    var config = {
      headers: {credentials: "include" }
    };
    axios.get("https://3001-csuwebdev-nasabackend-m2liyfnaxnj.ws-us87.gitpod.io", config).then((response) => {
    })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
        </p>
        <p>
        {mockNasaResp.url}
        </p>
      </header>
    </div>
  );
}
export default App;

