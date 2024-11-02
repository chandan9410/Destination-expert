import React, { useState, useEffect, createRef } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import './styles.css';

const List = ({ places = [], type, setType, rating, setRating, childClicked, isLoading }) => {
//  const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className="container">
      <h4>Food & Dining around you</h4>
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="formControl">
            <label htmlFor="type">Type</label>
            <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="attractions">Attractions</option>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              
            </select>
          </div>
          <div className="formControl">
            <label htmlFor="rating">Rating</label>
            <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="">All</option>
              <option value="3">Above 3.0</option>
              <option value="4">Above 4.0</option>
              <option value="4.5">Above 4.5</option>
            </select>
          </div>
          <div className="list">
            {places?.map((place, i) => (
              <div ref={elRefs[i]} key={i} className="gridItem">
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default List;



//   import React from "react";
//   import { useState, useEffect,useRef} from "react";
// // The useRef Hook allows you to persist values between renders.
// // It can be used to store a mutable value that does not cause a re-render when updated.
// // It can be used to access a DOM element directly.
// const List = ({ places = [], type, setType, rating, setRating, childClicked, isLoading }) => {
//   const [elRefs, setElRefs] = useState([]);  
//   // it is the way  to wway to create  and manage array of referses 
//   //useState([]) :  this innitialises elref  as an empty array ,  this array will be used to store
//   //  multiple references  in dom (eg:list )
//   useEffect(()=>{ setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
//      }, [places])
//     //  allows you to run the code that effect tha state of  application outside the components
//     // that includes the updating the doms 
//     // it  contains  two arguments effectcall funtion and dependency array 
//      return (
//   <div  className="container">
//     <h4> food and dining around you </h4>
//   </div>
//      );
// };
// export  default List;