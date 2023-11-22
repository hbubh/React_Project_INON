import { Box } from "@mui/material";
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const NewYorkMap = () => {
  const newYorkPosition = [40.7128, -74.186];

  return (
    <MapContainer
      dragging={false}
      scrollWheelZoom={false}
      keyboard={false}
      touchZoom={false}
      doubleClickZoom={false}
      center={newYorkPosition}
      zoom={9}
      style={{
        width: "80%",
        height: "200px",
        overflow: "hidden",
        border: "3px solid black",
        borderRight: "none",
        borderRadius: "90px",
        backgroundColor: "rgb(4, 92, 147)",
        color: "black",
        boxShadow: "3px 3px 7px",
        mb: "2%",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={newYorkPosition}>Here</Marker>
    </MapContainer>
  );
};

export default NewYorkMap;
