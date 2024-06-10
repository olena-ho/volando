import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import hotels from '../../api/hotels.js';

export const Reviews = ({ hotelId, defaultReviews }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', text: '' });
  const { t } = useTranslation();
  console.log({defaultReviews});

  useEffect(() => {
    console.log('hotelId:', hotelId);
    // Load reviews from localStorage
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (storedReviews[hotelId]) {
      setReviews(storedReviews[hotelId]);
      console.log('Loaded reviews from localStorage:', storedReviews[hotelId]);
    } else {
     setReviews(defaultReviews);

     console.log('Loaded default reviews: ', defaultReviews);
    }
  }, [hotelId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReviewWithDate = {
      ...newReview,
      date: new Date().toLocaleString(),
    };

    const updatedReviews = [...reviews, newReviewWithDate];
    setReviews(updatedReviews);

    // Save reviews to localStorage for the specific hotel
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    storedReviews[hotelId] = updatedReviews;
    localStorage.setItem('reviews', JSON.stringify(storedReviews));

    setNewReview({ name: '', text: '' });
    console.log('New review added:', newReviewWithDate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newReview.name}
          onChange={handleChange}
          placeholder={t('translation:your-name')}
          required
        />
        <textarea
          name="text"
          value={newReview.text}
          onChange={handleChange}
          placeholder={t('translation:your-review')}
          required
        />
        <button type="submit">{t('translation:submit')}</button>
      </form>
      <div>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p><strong>{review.name}</strong> ({review.date})</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
