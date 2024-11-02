

import React from 'react';
import GoogleMapReact from 'google-map-react';
import './styles.css';
import mapStyles from '../../mapStyles';

const Map = ({ coords, places = [], setCoords, setBounds, setChildClicked, weatherData = { list: [] } }) => {
  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APPS_GOOGLE_MAPS_API_KEY}}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
       //  the onChildClick prop is a callback function that triggers 
       //  when a child component of the map (like a marker) is clicked
      >
        {places.length > 0 && places.map((place, i) => (
          <div
            className="markerContainer"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            <div className="placeContainer">
              <p className="placeName">{place.name}</p>
              <img
                className="placeImage"
                src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                alt={place.name}
              />
              <div className="rating">{Number(place.rating)} ★</div>
            </div>
          </div>
        ))}
        {weatherData?.list?.length > 0 && weatherData.list.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" alt="Weather Icon" />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;





// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import './styles.css';
// import { Place } from '@mui/icons-material';
//  const Map = ({ coords, places = [], setCoords, setBounds, setChildClicked, weatherData = { list: [] } })=>{
//    return (
//     <div className='mapContainer'>
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: process.env.REACT_APPS_GOOGLE_MAPS_API_KEY}}
//       defaultCenter={coords}
//       center={coords}
//       defaultZoom={14}
//       margin={[50, 50, 50, 50]}
//       options={{ disableDefaultUI: true, zoomControl: true }}
//       onChange={(e) => {
//         setCoords({ lat: e.center.lat, lng: e.center.lng });
//         setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//       }}
//      onChildClick  = {(child)=>  setChildClicked(child)}  
//     >
//   {
// places.length()>=0&& places.map(Place,i)
//   }  
//     </GoogleMapReact>
   
            
//     </div>

//    )  
//  }
//  export  default  Map;
