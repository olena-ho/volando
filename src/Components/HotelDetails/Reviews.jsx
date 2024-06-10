import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Reviews = ({ hotelId, defaultReviews }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', text: '' });
  const { t } = useTranslation();

  useEffect(() => {
    // Load reviews from Local Storage for a specific hotel
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (storedReviews[hotelId]) {
      setReviews(storedReviews[hotelId]);
    } else {
      setReviews(defaultReviews);
    }
  }, [hotelId, defaultReviews]);

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

    // Save reviews in Local Storage for a specific hotel
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    storedReviews[hotelId] = updatedReviews;
    localStorage.setItem('reviews', JSON.stringify(storedReviews));

    setNewReview({ name: '', text: '' });
  };

  return (
    <div>
      <h3>{t('translation:comfort')}</h3>
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
        ></textarea>
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
