import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  height: 100vh;

  scroll-snap-align: center;
`;
const Works = () => {
  const userArray = [
    { name: "Jonathan", email: "anpch@example.com" },
    { name: " bob", email: "anpch@example.com" },
  ];

  return <Section>Works</Section>;
};

export default Works;
