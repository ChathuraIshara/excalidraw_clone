import React from 'react'
import InfiniteCanvas from "ef-infinite-canvas";
import { useEffect } from "react";
import rough from 'roughjs/bundled/rough.esm.js';

function RoughRectangle() {
  useEffect(() => {
    const canvasElement = document.getElementById("canvas");
      // get the CanvasRenderingContext2D from InfiniteCanvas
      const ctx = canvasElement.getContext("2d");
      const roughCanvas = rough.canvas(canvasElement);

      roughCanvas.rectangle(10, 10, 100, 100); // Draw rough rectangle
    }
  , []);


  return (
    <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}></canvas>
  )
}

export default RoughRectangle