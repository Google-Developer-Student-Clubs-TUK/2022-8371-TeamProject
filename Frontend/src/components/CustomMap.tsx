import React, { useCallback, useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

import CustomMarker1 from "../assets/marker.png";
import CustomMarker2 from "../assets/marker2.png";
import CurrentButton from "../assets/current.png";

import Loading from "./Loading";
import axios from "axios";
import { useQuery } from "react-query";
import EventDetailBox from "./EventDetailBox";

const containerStyle = {
  width: "100vw",
  height: "92vh",
};

const getDisasterWithAxios = async () => {
  const { data } = await axios.get("/api/v1/event");
  return data;
};

function CustomMap() {
  useEffect(() => {
    getLocation();
  }, []);
  const [loading, setLoading] = useState(false);

  const [markers, setMarker] = useState([{}]);

  const [center, setCenter] = useState({ lat: 126, lng: 37 });

  const [activeMarker, setActiveMarker] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCztP7qUELLnmvw2vE3cvnkCanUUOffs8E",
  });

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const { isLoading, data, isError } = useQuery(
    "Disasters",
    getDisasterWithAxios,
    {
      retry: 3,
      onSuccess: (data) => {
        // 성공시 호출
        console.log(data.result);
        setMarker([...data.result]);
        console.log(markers);
      },
    }
  );

  const [Add, setAddress] = useState("");

  function getLocation() {
    setLoading(true);
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;

          await setCenter({ lat: lat, lng: lng });
          await setLoading(false);
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }

  if (isLoaded) {
    return (
      <>
        <button
          style={{
            zIndex: "25",
            position: "absolute",
            width: "45px",
            height: "45px",
            marginLeft: "2vw",
            marginTop: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={getLocation}
        >
          <img src={CurrentButton} alt="CurrentButton" />
        </button>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {markers.map((data: any) => (
            <Marker
              icon={data.checkNum >= 5 ? CustomMarker1 : CustomMarker2}
              position={{ lat: data.latitude, lng: data.longitude }}
              onClick={() => handleActiveMarker(data.id)}
              key={data.id}
            >
              {activeMarker === data.id ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <EventDetailBox data={data} />
                </InfoWindow>
              ) : null}
            </Marker>
          ))}
        </GoogleMap>
        {loading && <Loading />}
      </>
    );
  } else {
    return null;
  }
}

export default CustomMap;
