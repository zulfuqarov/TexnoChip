import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg', // This is a sample API key, replace with your own
    libraries: ['places']
  });

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 40.4093, // Baku coordinates
    lng: 49.8671
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  };

  if (loadError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <p className="text-red-500">Error loading maps</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={15}
      options={options}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map; 