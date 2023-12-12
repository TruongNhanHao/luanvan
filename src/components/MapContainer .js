// MapContainer.js
import React, { useState } from 'react';
import Map,{Marker} from 'react-map-gl';
import icon_address from '../img/icon_address.png'

const MapContainer = () => {
    const [viewport, setViewport] = useState({
        longitude: 105.781159,
        latitude: 10.045965,
        zoom: 8,
        viewport:false
    });
    return (

    <Map
    mapboxAccessToken="pk.eyJ1IjoibmhhbmhhbyIsImEiOiJjbHBkZngzbjQxM3R6MnBybG1iN2o2anRpIn0.akQKGNHUM3Zv4K10Tp5MvA"
    {...viewport}
    style={{ width: "100%", height: '80vh', marginTop: '100px' }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    >
        <div className='w-100%'>
    <img src={icon_address}  alt="Background" className='absolute w-14 h-14 cursor-pointer' 
    style={{ left: "970px", top: '400px' }}
    />
        </div>
        <div className='w-100%'>
    <img src={icon_address}  alt="Background" className='absolute w-14 h-14 cursor-pointer' 
    style={{ left: "700px", top: '320px' }}
    />
        </div>
    <Marker longitude={viewport.longitude} latitude={viewport.latitude}offsetLeft={ 3.5 * viewport.zoom}
    offsetTop={ -7 * viewport.zoom}  >
    </Marker>
  </Map>
  );
};

// mapboxAccessToken="pk.eyJ1IjoibmhhbmhhbyIsImEiOiJjbHBkZngzbjQxM3R6MnBybG1iN2o2anRpIn0.akQKGNHUM3Zv4K10Tp5MvA"
{/* <img src={icon_address}  alt="Background" className='w-14 h-12' /> */}
export default MapContainer;
