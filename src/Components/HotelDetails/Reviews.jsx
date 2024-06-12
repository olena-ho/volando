import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import localforage from 'localforage';
import { v4 as uuidv4 } from 'uuid';

const getUserId = () => {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem('userId', userId);
  }
  return userId;
};

export const Reviews = ({ hotelId, defaultReviews }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', text: '', userId: getUserId() });
  const [editIndex, setEditIndex] = useState(null);
  const { t } = useTranslation();
  const currentUserId = getUserId();

  useEffect(() => {
    // Завантаження відгуків з localStorage
    const loadReviews = async () => {
      const storedReviews = (await localforage.getItem('reviews')) || {};
      if (storedReviews[hotelId]) {
        setReviews(storedReviews[hotelId]);
      } else {
        setReviews(defaultReviews);
      }
    };
    loadReviews();
  }, [hotelId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReviewWithDate = {
      ...newReview,
      date: new Date().toLocaleString(),
      userId: currentUserId, // Додавання userId до нового відгуку
    };

    let updatedReviews;
    if (editIndex !== null) {
      updatedReviews = reviews.map((review, index) => index === editIndex ? newReviewWithDate : review);
      setEditIndex(null);
    } else {
      updatedReviews = [...reviews, newReviewWithDate];
    }
    setReviews(updatedReviews);

    // Збереження відгуків у localStorage для конкретного готелю
    const storedReviews = (await localforage.getItem('reviews')) || {};
    storedReviews[hotelId] = updatedReviews;
    await localforage.setItem('reviews', storedReviews);

    setNewReview({ name: '', text: '', userId: currentUserId });
    console.log('Review added/edited:', newReviewWithDate);
  };

  const handleEdit = (index) => {
    if (reviews[index].userId === currentUserId) {
      setNewReview(reviews[index]);
      setEditIndex(index);
    } else {
      console.log('You can only edit your own reviews');
    }
  };

  const handleDelete = async (index) => {
    if (reviews[index].userId === currentUserId) {
      const updatedReviews = reviews.filter((_, i) => i !== index);
      setReviews(updatedReviews);

      // Оновлення localforage після видалення відгуку
      const storedReviews = (await localforage.getItem('reviews')) || {};
      storedReviews[hotelId] = updatedReviews;
      await localforage.setItem('reviews', storedReviews);

      console.log('Review deleted: ', index);
    } else {
      console.log('You can only delete your own reviews');
    }
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
        <button type="submit">{editIndex !== null ? t('translation:update') : t('translation:submit')}</button>
      </form>
      <div>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>
              <strong>{review.name}</strong> ({review.date})
            </p>
            <p>{review.text}</p>
            {review.userId === currentUserId && (
              <>
                <button onClick={() => handleEdit(index)} className="edit-button" >{t('translation:edit')}</button>
                <button onClick={() => handleDelete(index)} className="delete-button" >{t('translation:delete')}</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
