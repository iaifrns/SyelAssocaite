import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  return (
    <MapContainer
      center={[3.86744, 11.52004]} // Example: Douala, Cameroon
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[3.86744, 11.52004]}>
        <Popup>
          Hello Junior! This is your location.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
