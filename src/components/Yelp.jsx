import React, { useState, useEffect } from "react";

function Yelp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.yelp.com/v3/businesses/tuan-auto-service-portland/reviews",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
          },
        }
      ); // Replace with your API endpoint and API key
      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const reviews = data.reviews;
  console.log(reviews);
  return (
    <div>
      <h2>API Data:</h2>
      <ul>
        {reviews.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Yelp;
