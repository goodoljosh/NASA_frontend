import React from "react";

const Header = (props) => {

    const nasaResponse = props.nasaResponse
    return (
        <header className="App-header">
            <h1>
                {nasaResponse.title}
            </h1>
            <p>{nasaResponse.date}</p>
            <img src={nasaResponse.url} className={"responsive"} width={"600"} height={"600"} />

            <p>{nasaResponse.explanation}</p>
        </header>
    )
}

export default Header