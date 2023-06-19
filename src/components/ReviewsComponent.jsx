import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const ReviewContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Review = styled.div`
  font-weight: 10;
  letter-spacing: 1px;
  line-height: 1.5;
  background-color: #582727;
  color: white;

  width: 100%;

  padding: 10px;
  border: none;

  border-radius: 5px;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  border-radius: 5px;
  /* &:before {
    content: " 🦄Reviews:";
    position: absolute;
  } */
`;

const ReviewsComponent = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/hello-world")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
      })
      .catch((error) => {
        console.error(error);
        console.log(response);
      });
  }, []);

  return (
    <ReviewContainer>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        reviews.map((review) => (
          <Review>
            <div key={review.id}>
              <h3>{review.user.name}</h3>
              {review.text}
            </div>
          </Review>
        ))
      )}
    </ReviewContainer>
  );
};

export default ReviewsComponent;
