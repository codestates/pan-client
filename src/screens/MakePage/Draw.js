import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import brushIcon from "../../images/brush.png"


const CANVAS_WIDTH = 1300;
const CANVAS_HEIGHT = 400;

export default function Board() {
  const COLORS = ["#FFF9E9", "#CCDEE2", "#C08A90", "#DCB1B7", "#F4A24F", "#C57951", "#E2CD6D", 
  "#D85941", "#83B799", "#3D8DAB", "#9196E1", "#505AC5", ,"#274040", "#1C1B1A"];

  const [filling, setFilling] = useState(false);
  const [painting, setPainting] = useState(false);
  const [color, setColor] = useState(COLORS[14]);
  
  const canvas = useRef(null);
  const ctx = useRef(null);

  const startPainting = () => {
    setPainting(true);
  };

  const stopPainting = () => {
    setPainting(false);
  };

  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;

    if (!ctx.current) return;

    if (!painting) {
      ctx.current.beginPath();
      ctx.current.moveTo(x, y);
    } else {
      ctx.current.lineTo(x, y);
      ctx.current.stroke();
    }
  };

  const handleColorClick = (e) => {
    // if(filling){
    //   setColor(e.target.name)
    //   ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // }else {
      setColor(e.target.name)
      ctx.current.fillStyle = color;
    // }
  };

  const handleRangeChange = (e) => {
    const size = e.target.value;
    ctx.current.lineWidth = size;
  };
  
  const handleEraser = (e) => {
    setColor('white')
    const size = e.target.value;
    ctx.current.lineWidth = size;
  };

  // true면 fill, false면 paint
  const handleModeClick = (e) => {
    setFilling(!filling);
  };

  const handleCanvasClick = () => {
    if (filling) {
      ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  };

  const clearDrawing = () => {
    ctx.current.fillStyle = 'white'
    ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  useEffect(() => {
    if (canvas.current) {
      ctx.current = canvas.current.getContext("2d");
      ctx.current.strokeStyle = color;
      ctx.current.fillStyle = color;
    }
  }, [color]);

  return (
    <DrawWrapper>
      <ToolDiv> 
        <ControlsRng>
          <Range className="controls__range">
            Brush
            <input
              type="range"
              min="0.1"
              max="5"
              defaultValue={"2.5"}
              onChange={handleRangeChange}
              step="0.1"
            />
          </Range>
          <Range className="controls__range">
            Eraser
            <input
              type="range"
              min="10"
              max="40"
              defaultValue={"2.5"}
              onChange={handleEraser}
              step="0.1"
            />
          </Range>
      </ControlsRng>
      {filling ? <Mode onClick={handleModeClick}>Fill</Mode> : <Mode onClick={handleModeClick}>Paint</Mode>}
      <Clear onClick={clearDrawing}>Clear</Clear>
        {COLORS.map(c => {
          return (
            color === c ? 
            <ColorButton name={c} key={c} onClick={handleColorClick} color={c} style={{border:'2px solid #E3DFD4'}}>
            C</ColorButton>
             :
            <ColorButton name={c} key={c} onClick={handleColorClick} color={c}>
            </ColorButton>
          )})}
          <ToolRight>
            <Savebtn>
              그림 저장
            </Savebtn>
          </ToolRight>
      </ToolDiv>
      <Canva
        ref={canvas}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        onMouseMove={onMouseMove}
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
        onMouseLeave={stopPainting}
        onClick={handleCanvasClick}
      />
    </DrawWrapper>
  );
};

const DrawWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ToolDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`
const ControlsRng = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Range = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  color: #3D8DAB;
  font-weight: 700;
  cursor: pointer;
  input {
    margin-left: 5px;
    height: 8px;
    border: 1px solid #E3DFD4;
    background-color: rgb(229,229,229);
    border-radius: 50px;
  }
`

const ColorButton = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 2px;
  :hover{
    transform: scale(1.1);
  }
`;

const Canva = styled.canvas`
  border: 1px solid rgb(229,229,229);
  border-radius: 12px;
  margin-bottom: 20px;
  cursor: url(${brushIcon}), auto;
  `



const ToolRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 60%;
  height: 30px;
`

const Savebtn = styled.button`
  width: 100px;
  border-radius: 12px;
  border: none;
  background-color: #75A5A9;
  color: #FFF9E9;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  :hover{
    transform: scale(1.1);
  }

`

const Mode = styled.button`
  width: 60px;
  border-radius: 12px;
  border: none;
  margin: 0 2px;
  cursor: pointer;
  background-color: #75A5A9;
  color: #FFF9E9;
  font-size: 15px;
  font-weight: 500;
  :hover{
    transform: scale(1.1);
  }
`

const Clear = styled.button `
  width: 60px;
  border-radius: 12px;
  border: none;
  margin: 0 2px;
  cursor: pointer;
  background-color: #75A5A9;
  color: #FFF9E9;
  font-size: 15px;
  font-weight: 500;
  :hover{
    transform: scale(1.1);
  }
`