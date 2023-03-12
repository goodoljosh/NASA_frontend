import React, {useState, useEffect} from "react";
import axios from "axios";
// import Header from "./components/Header";
import Mars from "../components/Mars";
export default function MarsPhotos() {
    const [nasaParse, setNasaParse] = useState({})
    useEffect(()=>{
    axios.get('https://nasa-backend.onrender.com/mars' ).then(function(response){
      setNasaParse(JSON.parse(response.data))

    })
  },[])

    return(
    <>
        <Mars nasaResponse={nasaParse}/>
    </>
    );

}