import React, {Suspense, useRef } from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Canvas, useFrame } from "react-three-fiber"
import {Html, useGLTFLoader} from 'drei'
import { Section } from "./components/section";

const Model = ({modelPath}) => {
  const gltf = useGLTFLoader(modelPath, true)
  return <primitive object={gltf.scene} dispose={null} />
}

const Lights = ( ) => {
  return (
    <>
    <ambientLight intensity={0.3} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <directionalLight position={[0, 10, 0]} intensity={1.5} />
    <spotLight position={[1000, 0, 0]} intensity={1} />
    </>
  )
}

const HTMLContent = ({children, modelPath, positionY}) => {

  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.005));

  return (
  <Section factor={1.5} offset={1}>
    <group position={[0, positionY, 0]}>
      <mesh ref={ref} position={[0, -100, -800]}>
        <Model modelPath={modelPath} />
      </mesh>
      <Html fullscreen>
          {children}
      </Html>
    </group>
  </Section>  
 );
};


export default function App() {
  return (
    <>
      <Header />
      <Canvas
        colorManagement
        camera={{position:[0,0,120], fov: 70}}>
          <Lights />
          <Suspense fallback={null}>
         {/* <HTMLContent modelPath='/scene.gltf' positionY={250}> 
                
                <div className='container'>
                  <h1 className='title'>Hello</h1>            
                </div>
          </HTMLContent > */}
          <HTMLContent modelPath='/scene.gltf' positionY={250}> 
                
                <div className='container'>
                  <h1 className='title'>Hello</h1>            
                </div>
          </HTMLContent >
          </Suspense>
      </Canvas>
    </>
  );
}
