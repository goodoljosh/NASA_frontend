import React from "react";

const Header = (props) => {

  const nasaResponse = props.nasaResponse;
  const isVideo = nasaResponse.media_type === "video";

  return (
    <header className="App-header">
      <h1>{nasaResponse.title}</h1>
      <p>{nasaResponse.date}</p>
      {isVideo ? (
        <iframe
          title={nasaResponse.title}
          src={nasaResponse.url}
          className="responsive"
          width="640"
          height="360"
        />
      ) : (
        <img
          src={nasaResponse.url}
          className="responsive"
          alt={nasaResponse.url}
          width="600"
          height="600"
        />
      )}
      <p>{nasaResponse.explanation}</p>
    </header>
  );
};

export default Header;