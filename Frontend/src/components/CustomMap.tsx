import React, { useEffect, useState } from "react";
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

const kakao = (window as any).kakao;

const containerStyle = {
  width: "100vw",
  height: "92vh",
};

const markers = [
  {
    id: 1,
    title: "정왕동 화재 발생",
    content: "여기 지금 불났어요",
    category: "화재",
    latitude: 37.2,
    longitude: 126.7323008,
    checkNum: 25,
    images: [
      "https://storage.googleapis.com/gdsc-8371-storage/IMG_CF348D372D38-1.jpegd3fd1631-2c2c-405a-abce-7116ca4c50fa",
    ],
    createdAt: "2022-12-11T15:37:48.999937",

    deadLine: 0,
  },
  {
    id: 2,
    title: "정왕동 화재 발생",
    content: "여기 지금 불났어요",
    category: "화재",
    latitude: 37.3443935,
    longitude: 126.7323008,
    checkNum: 25,
    images: [
      "https://storage.googleapis.com/gdsc-8371-storage/IMG_CF348D372D38-1.jpegd3fd1631-2c2c-405a-abce-7116ca4c50fa",
    ],
    createdAt: "2022-12-11T15:37:48.999937",
    deadLine: 0,
  },
  {
    id: 3,
    title: "정왕동 화재 발생",
    content: "여기 지금 불났어요",
    category: "화재",
    latitude: 37.4,
    longitude: 128.7323008,
    checkNum: 3,
    images: [
      "https://storage.googleapis.com/gdsc-8371-storage/IMG_CF348D372D38-1.jpegd3fd1631-2c2c-405a-abce-7116ca4c50fa",
    ],
    createdAt: "2022-12-11T15:37:48.999937",
    deadLine: 0,
  },
  {
    id: 4,
    title: "정왕동 화재 발생",
    content: "여기 지금 불났어요",
    category: "화재",
    latitude: 37.6,
    longitude: 129.0323008,
    checkNum: 25,
    images: [
      "https://storage.googleapis.com/gdsc-8371-storage/IMG_CF348D372D38-1.jpegd3fd1631-2c2c-405a-abce-7116ca4c50fa",
    ],
    createdAt: "2022-12-11T15:37:48.999937",
    deadLine: 0,
  },
];

function CustomMap() {
  const [loading, setLoading] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCztP7qUELLnmvw2vE3cvnkCanUUOffs8E",
  });

  useEffect(() => {
    getLocation();
  }, []);

  const [center, setCenter] = useState({ lat: 126, lng: 37 });
  console.log(center);
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map: any) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach((data) =>
      bounds.extend({ lat: data.latitude, lng: data.longitude })
    );
    map.fitBounds(bounds);
  };
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

          let geocoder = await new kakao.maps.services.Geocoder();
          let coord = await new kakao.maps.LatLng(lat, lng);
          let callback = await function (result: any, status: any) {
            if (status === kakao.maps.services.Status.OK) {
              console.log(result);
              setAddress(result);
            } else {
              console.log("주소를찾을수없음");
              alert("주소를찾을수없음");
              setAddress("주소를찾을수없음");
            }
          };
          geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
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
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={handleOnLoad}
        >
          {markers.map((data) => (
            <Marker
              icon={data.checkNum >= 5 ? CustomMarker1 : CustomMarker2}
              position={{ lat: data.latitude, lng: data.longitude }}
              onClick={() => handleActiveMarker(data.id)}
            >
              {activeMarker === data.id ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div>{data.title}</div>
                </InfoWindow>
              ) : null}
            </Marker>
          ))}
        </GoogleMap>
        {loading && <Loading />}
      </>
    );
  }
}

export default React.memo(CustomMap);
