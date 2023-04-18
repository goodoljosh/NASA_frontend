import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
export default function PictureoftheDay() {
  const [nasaParse, setNasaParse] = useState({})
  useEffect(() => {
    axios.get('https://nasa-backend.onrender.com/npod').then(function (response) {
      setNasaParse((response.data))
    })
  }, [])

  return (
    <>
      <Header nasaResponse={nasaParse} />
    </>
  );

}