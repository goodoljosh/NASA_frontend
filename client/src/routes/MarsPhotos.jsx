import React,{ useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Mars from "../components/Mars";
export default function MarsPhotos() {
  const [startDate, setStartDate] = useState(new Date());

  const [nasaParse, setNasaParse] = useState({})
  useEffect(() => {
    axios.get('https://nasa-backend.onrender.com/mars?date=' + startDate.toISOString().split('T')[0]).then(function (response) {
      setNasaParse((response.data))
    })
  }, [startDate])

  return (
    <>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <Mars key={JSON.stringify(nasaParse)} nasaResponse={nasaParse} />
      <footer>
        Mars Photos
      </footer>
    </>

  );

}