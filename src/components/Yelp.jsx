import React, { useState, useEffect } from "react";

// const express = require("express");
// const app = express();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173/"); // Replace with your React app's domain
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

function Yelp() {
  console.log(process.env.REACT_APP_YELP_API_KEY);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/tuan-auto-service-portland/reviews",
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

  console.log(data);
  return (
    <div>
      <h2>API Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Yelp;
