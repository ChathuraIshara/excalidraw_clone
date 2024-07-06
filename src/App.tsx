import InfiniteCanvas from "ef-infinite-canvas";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const canvasElement = document.getElementById("canvas");
    if (canvasElement instanceof HTMLCanvasElement) {
      const infCanvas = new InfiniteCanvas(canvasElement);

      // get the CanvasRenderingContext2D
      const ctx = infCanvas.getContext("2d");

      ctx.fillStyle = "#f00";
      ctx.lineWidth = 4;
      ctx.beginPath();
      // Using a large but finite width and height for the rectangle
      ctx.rect(30, 30, 1000, 30);
      ctx.fill();
      ctx.stroke();
    }
  }, []);

  return (
   
      <canvas id="canvas"  width={window.innerWidth} height={window.innerHeight}></canvas>
   
  );
}

export default App;
