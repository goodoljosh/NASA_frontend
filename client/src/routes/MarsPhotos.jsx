import React, {useState, useEffect} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Mars from "../components/Mars";
export default function MarsPhotos() {

    const [nasaParse, setNasaParse] = useState({})
    useEffect(()=>{
    axios.get('https://nasa-backend.onrender.com/mars' ).then(function(response){
      setNasaParse((response.data))
    })
  },[])

    return(
       <> 
       <DatePicker/>
        <Mars key ={JSON.stringify(nasaParse)} nasaResponse={nasaParse}/>
        <footer>
        <p>©</p>
        2020
      </footer>
        </>
        
    );

}