import React from "react";

import GoogleMapReact from "google-map-react";

// Import style
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import Logo from "../../assets/Logo3.svg";
import imgTab from "../../assets/pexels.png"


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Home() {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCDknObBs-hS9mgPUtPzmthht2ut08lpEU" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  );
}