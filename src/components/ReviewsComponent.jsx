import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const ReviewContainer = styled.div`
  display: flex;

  gap: 10px;
`;
const Img = styled.img`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;

  font-weight: 10;
  letter-spacing: 1px;
  line-height: 1.5;
  background-color: #582727;
  color: white;

  width: 50%;

  padding: 20px;
  border: none;

  border-radius: 5px;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  border-radius: 5px;
`;

const ReviewPic = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Button = styled.button`
  margin-top: 10px;
  background-color: #434343;
  color: white;
  font-weight: 500px;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
          <Review key={review.id}>
            <ReviewPic>
              {review.user.image_url ? (
                <Img src={review.user.image_url} />
              ) : (
                <Img src="./img/blank-profile-picture.png" />
              )}
              <h3>{review.user.name}</h3>
            </ReviewPic>
            {review.text}

            <a href={`${review.url}`}>
              <Button>Go to full review</Button>
            </a>
            {/* </div> */}
          </Review>
        ))
      )}
    </ReviewContainer>
  );
};

export default ReviewsComponent;
