import React, {useState, useEffect} from "react";
import axios from "axios";
// import Header from "./components/Header";
import Header from "../components/Header";
export default function MarsPhotos() {
    const [nasaParse, setNasaParse] = useState({})
    useEffect(()=>{
    axios.get('https://nasa-backend.onrender.com/mars' ).then(function(response){
      setNasaParse(JSON.parse(response.data))

    })
  },[])

    return(
    <>
        <Header nasaResponse={nasaParse}/>
        <footer>
        <p>©</p>
        {nasaParse.copyright}
      </footer>
    </>
    );

}