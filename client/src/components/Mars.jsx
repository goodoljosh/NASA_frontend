import React from "react";
import '../App.css';
const Mars = (props)=> {

   
    const nasaResponse = props.nasaResponse
        //unused photos array object causes error. 
        //Application displays correctly whether commented or not
        // {photos:[]}
        let cards = []
        if(nasaResponse && nasaResponse.photos){
        nasaResponse.photos.forEach((mars,index)=>{
            cards.push(<div key = {index}>
                <header className="App-header">
                   
                   <div>Camera Name: {mars.camera.full_name}</div>
                   
                   <div>Earth Date: {mars.earth_date}</div>
                   <img src={mars.img_src} className ={"responsive"} width ={"700"} height = {"500"}/>
                   <div>Name of Rover: {mars.rover.name}</div>
                   <div>Landing Date: {mars.rover.landing_date}</div>
                   <div>Launch Date: {mars.rover.launch_date}</div>
                   <div>Mars Rover Status: {mars.rover.status}</div>
                   </header>
                 </div>
        
            )
         })
        }
        return cards
    //     return(
    //         <header className="App-header">
    //    <h1>
    //       {nasaResponse.full_name}
    //     </h1>
    //     <p>{nasaResponse.earth_date}</p>
    //     <img src={nasaResponse.img_src} className ={"responsive"} width ={"600"} height = {"600"}/> 

    //      <p>{nasaResponse.rover}</p>
    //         </header>
    //     )
}

export default Mars