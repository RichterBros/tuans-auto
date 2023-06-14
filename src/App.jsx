import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import { Canvas } from "@react-three/fiber";
// import dotenv from "dotenv";
// dotenv.config();
const Container = styled.div`
  height: 100vh;
  /* scroll-snap-type: y mandatory;
  scroll-behavior: smooth; */
  overflow-y: auto;
  color: white;
  background: url("./img/bg.jpeg");
  background-repeat: repeat-y;
  /* background-attachment: fixed;
  background-position: center; */
`;

function App() {
  return (
    <div>
      <Container>
        <Hero />

        <Contact />
        <Who />
        <Works />
      </Container>
    </div>
  );
}

export default App;
