import React from "react";

const Mars = (props)=> {


    const nasaResponse = props.nasaResponse
        return(
            <header className="App-header">
       <h1>
          {nasaResponse.full_name}
        </h1>
        <p>{nasaResponse.earth_date}</p>
        <img src={nasaResponse.img_src} className ={"responsive"} width ={"600"} height = {"600"}/> 

         <p>{nasaResponse.rover}</p>
            </header>
        )
}

export default Mars