import React, { useEffect } from 'react';
import './styles.css';

const PlaceDetails = ({ place, selected, refProp }) => {
  useEffect(() => {
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [selected, refProp]);

  return (
    <div className="card">
      <div className="card-media">
        <img
          src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          alt={place.name}
        />
      </div>
      <div className="card-content">
        <h5 className="place-name">{place.name}</h5>
        <div className="rating-section">
          <span className="rating">Rating: {Number(place.rating)} ★</span>
          <span className="reviews">{place.num_reviews} review{place.num_reviews > 1 && 's'}</span>
        </div>
        <div className="info-section">
          <span>Price: {place.price_level}</span>
        </div>
        <div className="info-section">
          <span>Ranking: {place.ranking}</span>
        </div>
        {place?.awards?.map((award, index) => (
          <div key={index} className="award-section">
            <img src={award.images.small} alt={award.display_name} />
            <span>{award.display_name}</span>
          </div>
        ))}
        {place?.cuisine?.map(({ name }, index) => (
          <span key={index} className="cuisine-chip">{name}</span>
        ))}
        {place.address && (
          <p className="address">
            <span className="icon"> </span> {place.address}
          </p>
        )}
        {place.phone && (
          <p className="phone">
            <span className="icon">📞</span> {place.phone}
          </p>
        )}
      </div>
      <div className="card-actions">
        <button className="button" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </button>
        <button className="button" onClick={() => window.open(place.website, '_blank')}>
          Website
        </button>
      </div>
    </div>
  );
};

export default PlaceDetails;
