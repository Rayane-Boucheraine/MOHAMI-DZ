import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className='my-[10px]'>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          selected={star <= rating}
          onClick={() => handleStarClick(star)}
        />
      ))}
    </div>
  );
};

const Star = ({ selected, onClick }) => (
  <span className='text-[40px]' style={{ cursor: 'pointer' }} onClick={onClick}>
    {selected ? '★' : '☆'}
  </span>
);

export default StarRating;
