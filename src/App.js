import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import L from 'leaflet';
import testImage from './mapmarkergoogle.png'; // Replace with the path to your image


function App() {
  const belgiumCenter = [50.8503, 4.3517];
  const customIcon = L.icon({
    iconUrl: testImage, // Path to your custom image
    iconSize: [40, 40], // Size of the icon (adjust as needed)
    iconAnchor: [20, 40], // Anchor the icon at its center
    popupAnchor: [0, -40], // Offset the popup above the icon
  });

  return (
    <div className="App">

      <main>
        <MapContainer
          center={belgiumCenter}
          zoom={7}
          style={{ height: '100vh', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={belgiumCenter} icon={customIcon} draggable={true} autoPan={false}>
            <Popup>
              Welcome to Belgium! <br />
              This is Brussels.
            </Popup>
          </Marker>

        </MapContainer>
      </main>
    </div>
  );
}

export default App;
