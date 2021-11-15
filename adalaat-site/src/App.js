import React from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Canvas } from "react-three-fiber"
import {Html} from 'drei'

export default function App() {
  return (
    <>
      <Header />
      <Canvas
        colorManagement
        camera={{position:[0,0,120], fov: 70}}>
          <Html fullscreen>
            <div className='container'>
              <h1 className='title'>Hello</h1>            
            </div>
          </Html>
      </Canvas>
    </>
  );
}
