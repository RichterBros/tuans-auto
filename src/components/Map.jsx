import { useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

const center = { lat: 45.56301155594619, lng: -122.65088571874298 };

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>loading...</div>;
  }
  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{
        width: "500px",
        height: "500px",
        borderRadius: "5px",
      }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}
