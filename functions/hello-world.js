// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: "Hello World!",
//     }),
//   };
// };

// const fetch = require("node-fetch");
// import fetch from "node-fetch";
// exports.handler = async function (event, context, callback) {
//   const YELP_API =
//     "https://api.yelp.com/v3/businesses/tuan-auto-service-portland/reviews";
//   const response = await fetch(YELP_API);
//   const data = await response.json();
//   return {
//     statusCode: 200,
//     body: JSON.stringify(data),
//     headers: {
//       Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
//     },
//   };
// };

const axios = require("axios");
const { LoadingManager } = require("three");

exports.handler = async (event, context) => {
  try {
    const apiKey = process.env.REACT_APP_YELP_API_KEY; // Replace with your actual API key

    const response = await axios.get(
      "https://api.yelp.com/v3/businesses/tuan-auto-service-portland/reviews",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
