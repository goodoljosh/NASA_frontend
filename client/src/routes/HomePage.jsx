import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
export default function HomePage() {

  return (
    <>
       <div className="App">

        <Nav />
    </div>
    </>
  );

}