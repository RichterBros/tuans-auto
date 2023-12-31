import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";

import {
  OrbitControls,
  Clone,
  Stage,
  MeshReflectorMaterial,
} from "@react-three/drei";

import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";
import Car from "./Car";
import { motion, useScroll, useTransform } from "framer-motion";
// import Yelp from "./Yelp";
import axios from "axios";
import ReviewsComponent from "./ReviewsComponent";
const Section = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  width: 1440px;
  display: flex;
  justify-content: center;
  /* padding-top: 100px; */
  /* 
  background-color: #00ff5e; */
  /* border-width: 1px;
  border-color: white;
  border-style: solid;
  border-radius: 5px; */
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  /* background-color: #353c70; */
  /* align-self: flex-start; */
  padding-top: 100px;
  margin-right: -80px;
`;

const Right = styled.div`
  /* display: flex; */

  flex: 2;
  position: relative;
  /* margin-top: -200px; */
  /* background-color: #95599b; */

  /* align-self: flex-start; */
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: 1000;
  /* font-variation-settings: "wdth" 1000, "wght" 1000, "opsz" 48; */
  font-style: italic;
  color: lightgrey;
  padding-bottom: 50px;
  font-family: "Roboto ", sans-serif;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;

  gap: 10ox;
`;

const Line = styled.img`
  height: 5px;
  margin-right: 5px;
`;

const Subtitle = styled.h2`
  color: pink;
`;

const DesContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-content: flex-start;
  font-size: 24px;
  color: lightgrey;

  gap: 55px;
`;
const DescList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: lightgrey;

  gap: 10px;
`;

const CarContainer = styled.div`
  z-index: 50;
  position: relative;
`;
const DescItem = styled.div`
  font-size: 24px;
  color: lightgrey;
`;

const Button = styled.button`
  background-color: #434343;
  color: white;
  font-weight: 500px;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const ReviewContainer = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: row;
  background-color: #434343;
  color: white;
  /* font-family: "Poppins", sans-serif; */

  justify-content: space-between;
  /* align-items: center; */
  padding: 10px;
  border: none;
  border-radius: 5px;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  border-radius: 5px;
  /* position: relative; */
  margin-bottom: 25px;
  gap: 10px;
`;

const ReviewTitle = styled.h1`
  color: white;
  font-weight: 500px;
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  const car = useLoader(GLTFLoader, "./models/z-bodyglb.glb");

  const targetRef = useRef(null);
  // const carRef = useRef(null);

  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const results = await axios.get("/.netlify/functions/hello-world");
    console.log(results);

    setMessage(results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(message);

  // var string = JSON.stringify(message);
  // const test = message.data.reviews;
  // console.log(test);
  // console.log(string);
  // <ul>
  //   {message.map((item) => (
  //     <li>{item.text}</li>
  //   ))}
  // </ul>;

  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["end end", "end start"],
  // });

  // const opacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
  // const opacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
  // const translateX = useTransform(scrollYProgress, [0.7, 0.9], [1, 1000]);

  let pos = 0 + "px";

  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          {/* <Title as={motion.div} style={{ opacity }} ref={targetRef}> */}
          <Title>
            Complete Automotive Service
            {/* {string} */}
            {/* <ul>
              {message.map((item) => (
                <li>{item.text}</li>
              ))}
            </ul> */}
          </Title>
          {/* <Li>{message}</Li> */}
          <WhatWeDo>
            <Line src="./img/line.png" />
            {/* <Subtitle as={motion.div} whileHover={{ scale: 1.1 }} drag> */}
            <Subtitle>Import & Domestic</Subtitle>
          </WhatWeDo>
          <DesContainer>
            <DescList>
              <DescItem>Engine</DescItem>
              <DescItem>Electrical</DescItem>
            </DescList>
            <DescList>
              <DescItem>Tune Up </DescItem>
              <DescItem>Transmission</DescItem>
            </DescList>
            <DescList>
              <DescItem>Brake </DescItem>
              <DescItem>Clutch</DescItem>
            </DescList>
          </DesContainer>

          <Button>Learn More</Button>
        </Left>

        <Right>
          {/* 3d model */}
          {/* <CarContainer
            // ref={carRef}
            as={motion.div}
            style={{ translateX }}
            animate={{ x: `${pos}` }}
          > */}
          <CarContainer>
            {/* <Img src="./img/moon.png" /> */}
            <Car />
          </CarContainer>
        </Right>
      </Container>
      {/* <ReviewTitle>Reviews:</ReviewTitle> */}
      <ReviewContainer>
        <ReviewsComponent />
      </ReviewContainer>
    </Section>
  );
};

export default Hero;
