import React from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {
  const[data, setData] = React.useState(null);
  
  // React.useEffect(()=> {
  //   fetch('/api')
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message));
  // }, []);

  // App.get("/", function(req, res)  {
   axios.get('https://nasa-backend.onrender.com' ).then(function(response){
     console.log(response);
   })
//  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
        </p>
      </header>
    </div>
  );
}

export default App;
