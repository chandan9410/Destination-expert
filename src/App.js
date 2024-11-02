// import React, { useState, useEffect } from 'react';
// import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI';
// import Header from './components/Header/Header';
// import List from './components/List/List';
// import Map from './components/Map/Map';

// const App = () => {
//   const [type, setType] = useState('restaurants');
//   const [rating, setRating] = useState('');

//   const [coords, setCoords] = useState({});
//   const [bounds, setBounds] = useState(null);

//   const [weatherData, setWeatherData] = useState([]);
//   const [filteredPlaces, setFilteredPlaces] = useState([]);
//   const [places, setPlaces] = useState([]);

//   const [autocomplete, setAutocomplete] = useState(null);
//   const [childClicked, setChildClicked] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
//       setCoords({ lat: latitude, lng: longitude });
//     });
//   }, []);

//   useEffect(() => {
//     const filtered = places.filter((place) => Number(place.rating) > rating);
//     setFilteredPlaces(filtered);
//   }, [rating, places]);

//   useEffect(() => {
//     if (bounds) {
//       setIsLoading(true);

//       getWeatherData(coords.lat, coords.lng).then((data) => setWeatherData(data));

//       getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
//         setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
//         setFilteredPlaces([]);
//         setRating('');
//         setIsLoading(false);
//       });
//     }
//   }, [bounds, coords, type]);

//   const onLoad = (autoC) => setAutocomplete(autoC);

//   const onPlaceChanged = () => {
//     const lat = autocomplete.getPlace().geometry.location.lat();
//     const lng = autocomplete.getPlace().geometry.location.lng();
//     setCoords({ lat, lng });
//   };

//   return (
//     <div>
//       <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
//       <div style={{ display: 'flex', width: '100%' }}>

//         <div style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
//           <List
//             isLoading={isLoading}
//             childClicked={childClicked}
//             places={filteredPlaces.length ? filteredPlaces : places}
//             type={type}
//             setType={setType}
//             rating={rating}
//             setRating={setRating}
//           />
//         </div>

//         <div style={{ flex: 0, padding: '20px', maxWidth: '400px' }}>
//           <Map
//             setChildClicked={setChildClicked}
//             setBounds={setBounds}
//             setCoords={setCoords}
//             coords={coords}
//             places={filteredPlaces.length ? filteredPlaces : places}
//             weatherData={weatherData}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default App;
import React, { useState, useEffect } from 'react';

import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getWeatherData(coords.lat, coords.lng)
        .then((data) => setWeatherData(data));

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          setRating('');
          setIsLoading(false);
        });
    }
  }, [bounds, type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoords({ lat, lng });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ flex: 1, padding: '1rem' }}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </div>
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem'
        }}>
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
