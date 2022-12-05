import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "92vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function CustomMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCztP7qUELLnmvw2vE3cvnkCanUUOffs8E",
  });

  if (isLoaded) {
    return (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    );
  }
}

export default React.memo(CustomMap);
