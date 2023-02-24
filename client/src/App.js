import React from "react";
//import axios from "axios";
import Header from "./components/Header";
import Nav  from "./components/Nav";
// import './Nav.css';
import './App.css';


function App() {
  const mockNasaResp = "{\"copyright\":\"Tara Mostofi\",\"date\":\"2023-02-21\",\"explanation\":\"They are both falling. The water in Yosemite Falls, California, USA, is falling toward the Earth. Comet ZTF is falling toward the Sun. This double cosmic cascade was captured late last month as fading Comet C/2022 E3 (ZTF) had just passed its closest to planet Earth. The orange star just over the falls is Kochab. With the exception of a brief encounter with a black bear, the featured image was a well-planned composite of a moonlit-foreground and long-duration background exposures - all designed to reconstruct a deep version of an actual single sight. Although Comet ZTF is now fading as it glides back to the outer Solar System, its path is determined by gravity and so it can be considered to still be falling toward the Sun -- but backwards.    Comet ZTF Gallery: Notable Submissions to APOD\",\"hdurl\":\"https://apod.nasa.gov/apod/image/2302/CometZtfYosemite_Mostofi_1639.jpg\",\"media_type\":\"image\",\"service_version\":\"v1\",\"title\":\"Comet ZTF  over Yosemite Falls\",\"url\":\"https://apod.nasa.gov/apod/image/2302/CometZtfYosemite_Mostofi_960.jpg\"}";
  const nasaResponse = JSON.parse(mockNasaResp);
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
    // axios.get("https://3001-csuwebdev-nasabackend-m2liyfnaxnj.ws-us87.gitpod.io", config).then((response) => {
    //    mockNasaResp.image;
    // })
  return (
    <div className="App">
        <Nav />
        <Header/>
      <footer>
        <p>©</p>
        {nasaResponse.copyright}
      </footer>
    </div>
  );
}
export default App;

