import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";



export default class Maps extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyAtVF9jeydjoY6uO86BYqDhYZ-kXnQ45h4"}
          style={{ height: "30vmax"}}
          zoom={16}
          center={{
            lat: 24.0482268,
            lng: -104.6459064
             
          }}
          markers={[
            { lat: 24.0482268, lng: -104.6459064 },
          ]}
        />
      </div>
    );
  }
}