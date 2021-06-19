import React, { useRef, useState } from "react";
import styled from "styled-components";
import "./styles.css";

const COLORS = ["red", "blue", "orange", "green", "yellow", "purple"];

const Controls = styled.menu`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
`;

const ColorButton = styled.button`
  background-color: ${props => props.color};
  margin: 10px;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
`;

const DrawWrapper = styled.div`

`

export default function Darw() {
  const canvasRef = useRef(null);

  const [isPressing, setIsPressing] = useState(false);
  const [prevLocation, setPrevLocation] = useState(null);
  const [color, setColor] = useState(COLORS[0]);

  const handleMouseDown = () => {
    setIsPressing(true);
  }

  const handleMouseUp = () => {
    setIsPressing(false);
    setPrevLocation(null);
  }

  const handleMouseMove = (e) => {
    if (!isPressing) {
      return;
    }

    if (prevLocation == null) {
      setPrevLocation({ x: e.clientX, y: e.clientY });
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(prevLocation.x, prevLocation.y);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    setPrevLocation({ x: e.clientX, y: e.clientY });
  }

  return (
    <DrawWrapper>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
      <Controls>
        {COLORS.map(c => (
          <ColorButton key={c} onClick={() => setColor(c)} color={c}>
            {c}
          </ColorButton>
        ))}
      </Controls>
    </DrawWrapper>
  );
}
