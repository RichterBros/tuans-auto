import { Suspense, React } from "react";
import { styled } from "styled-components";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Environment } from "@react-three/drei";

const CarContainer = styled.div`
  width: 1000px;
  height: 800px;
  /* width: 100%; */
  /* object-fit: contain; */
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0px;
  right: 0;
  z-index: 100;
  /* margin: auto; */

  /* background-color: red; */
  /* align-self: flex-start; */
`;

const Car = () => {
  const car = useLoader(GLTFLoader, "./models/skyline.glb");
  console.log(OrbitControls);
  return (
    <CarContainer>
      <Canvas
        width
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 600,
          position: [-4, 3, 6],
        }}
        // gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <primitive object={car.scene} position-z={0} />
          </Stage>
          <OrbitControls autoRotate autoRotateSpeed={0.3} enableZoom={false} />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </CarContainer>
  );
};

export default Car;
