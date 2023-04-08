import "./Room.css";
import React, { useEffect, useRef } from "react";

function Room() {
  const canvasRef = useRef(null);

  // Set up constants for the room dimensions
  const BATHROOM_WIDTH = 449;
  const BATHROOM_HEIGHT = 301;
  const BEDROOM_WIDTH = 449;
  const BEDROOM_HEIGHT = 363;
  const LIVING_ROOM_WIDTH = 1039;
  const LIVING_ROOM_HEIGHT = 438;
  const STORAGE_ROOM_WIDTH = 226;

  const STANDARD_WINDOW_HEIGHT = 20;
  const STANDARD_WINDOW_WIDTH = 90;

  const PADDING = 10;

  const WIDTH = LIVING_ROOM_WIDTH + BEDROOM_WIDTH + PADDING * 2;
  const HEIGHT = BATHROOM_HEIGHT + BEDROOM_HEIGHT + PADDING * 2;

  const STORAGE_ROOM_HEIGHT = HEIGHT - LIVING_ROOM_HEIGHT - PADDING * 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

     // Draw the main door
     ctx.fillStyle = "#000";
     ctx.fillRect(BATHROOM_WIDTH + STORAGE_ROOM_WIDTH + PADDING, STORAGE_ROOM_HEIGHT / 2 - STANDARD_WINDOW_WIDTH / 2, PADDING, STANDARD_WINDOW_WIDTH); 

    // Draw the bathroom
    ctx.strokeStyle = "#000";
    ctx.strokeRect(0, 0, BATHROOM_WIDTH, BATHROOM_HEIGHT);
    ctx.fillStyle = "#000";
    ctx.fillText("BAD", 50, 20); // Add room name

    // Draw the bathroom door
    ctx.fillStyle = "#6F4E37";
    ctx.fillRect(BATHROOM_WIDTH, STORAGE_ROOM_HEIGHT / 2 - STANDARD_WINDOW_WIDTH / 2, PADDING, STANDARD_WINDOW_WIDTH);

    // Draw the bedroom
    ctx.strokeStyle = "#000";
    ctx.strokeRect(0, BATHROOM_HEIGHT + PADDING, BEDROOM_WIDTH, BEDROOM_HEIGHT);
    ctx.fillStyle = "#000";
    ctx.fillText("SCHLAFZIMMER", 50, BATHROOM_HEIGHT + PADDING + 20); // Add room name

    // Draw the bedroom door
    ctx.fillStyle = "#6F4E37";
    ctx.fillRect(BATHROOM_WIDTH, BATHROOM_HEIGHT + STANDARD_WINDOW_WIDTH / 2, PADDING, STANDARD_WINDOW_WIDTH);

    // Draw the living room
    ctx.strokeStyle = "#000";
    ctx.strokeRect(
      BEDROOM_WIDTH + PADDING,
      BATHROOM_HEIGHT + PADDING - (LIVING_ROOM_HEIGHT - BEDROOM_HEIGHT),
      LIVING_ROOM_WIDTH,
      LIVING_ROOM_HEIGHT
    );
    ctx.fillStyle = "#000";
    ctx.fillText("WOHNZIMMER", BEDROOM_WIDTH + PADDING + 10, STORAGE_ROOM_HEIGHT + PADDING + 20); // Add room name

    // Draw the storage room
    ctx.strokeStyle = "#000";
    ctx.strokeRect(
      BEDROOM_WIDTH + PADDING,
      0,
      STORAGE_ROOM_WIDTH,
      STORAGE_ROOM_HEIGHT
    );
    ctx.fillStyle = "#000";
    ctx.fillText("ABSTELLKAMMER", BEDROOM_WIDTH + PADDING + 10, 20); // Add room name

 // Draw the storage room door
 ctx.fillStyle = "#6F4E37";
 ctx.fillRect(BATHROOM_WIDTH + STORAGE_ROOM_WIDTH / 2 - STANDARD_WINDOW_WIDTH / 2, STORAGE_ROOM_HEIGHT, STANDARD_WINDOW_WIDTH, PADDING);


    // Draw the bathroom window
    const bathroomWindowX = 0;
    const bathroomWindowY = 10;
    ctx.strokeStyle = "grey";
    ctx.strokeRect(
      bathroomWindowX,
      bathroomWindowY,
      STANDARD_WINDOW_HEIGHT,
      STANDARD_WINDOW_WIDTH * 2
    );

    const bathroomWindow3Y = STANDARD_WINDOW_WIDTH * 2 + bathroomWindowY;
    ctx.strokeStyle = "grey";
    ctx.strokeRect(
        bathroomWindowX,
      bathroomWindow3Y,
      STANDARD_WINDOW_HEIGHT,
      STANDARD_WINDOW_WIDTH
    );

    ctx.strokeStyle = "grey";
    ctx.strokeRect(
    BATHROOM_WIDTH - STANDARD_WINDOW_WIDTH - PADDING * 4,
      0,
      STANDARD_WINDOW_WIDTH,
      STANDARD_WINDOW_HEIGHT,
    );

    // Draw the bedroom window
    const bedroomWindowY = BATHROOM_HEIGHT + 40;
    ctx.strokeStyle = "grey";
    ctx.strokeRect(
      0,
      bedroomWindowY,
      STANDARD_WINDOW_HEIGHT,
      STANDARD_WINDOW_WIDTH
    );

    const bedroomWindow2Y = BATHROOM_HEIGHT + BEDROOM_HEIGHT - 10;
    ctx.strokeStyle = "grey";
    ctx.strokeRect(
      PADDING * 4,
      bedroomWindow2Y,
      STANDARD_WINDOW_WIDTH * 4,
      STANDARD_WINDOW_HEIGHT,
    );

    // Draw the living room windows
    const livingRoomWindow1X = BEDROOM_WIDTH + 120;
    const livingRoomWindow1Y = HEIGHT - 30;
    ctx.strokeStyle = "grey";
    ctx.strokeRect(
      livingRoomWindow1X,
      livingRoomWindow1Y,
      STANDARD_WINDOW_WIDTH,
      STANDARD_WINDOW_HEIGHT,
    );

    const livingRoomWindow2X = BEDROOM_WIDTH + (LIVING_ROOM_WIDTH / 2) - STANDARD_WINDOW_WIDTH * 2;
    const livingRoomWindow2Y = HEIGHT - 60;
    ctx.strokeStyle = "grey";
    ctx.strokeRect(
      livingRoomWindow2X,
      livingRoomWindow2Y,
      STANDARD_WINDOW_WIDTH * 2,
      STANDARD_WINDOW_HEIGHT,
    );

    const livingRoomWindow3X = BEDROOM_WIDTH + (LIVING_ROOM_WIDTH / 2) - STANDARD_WINDOW_WIDTH*2;
    const livingRoomWindow3Y = HEIGHT - 60;
    ctx.strokeStyle = "grey";
    ctx.strokeRect(
      livingRoomWindow3X + STANDARD_WINDOW_WIDTH *2,
      livingRoomWindow3Y,
      STANDARD_WINDOW_WIDTH * 2,
      STANDARD_WINDOW_HEIGHT,
    );

    const livingRoomWindow4X = WIDTH - 160;
    const livingRoomWindow4Y = HEIGHT - 30;
    ctx.strokeStyle = "grey";
    ctx.strokeRect(
      livingRoomWindow4X,
      livingRoomWindow4Y,
      STANDARD_WINDOW_WIDTH,
      STANDARD_WINDOW_HEIGHT,
    );

    const livingRoomWindow5X = WIDTH - 160 - STANDARD_WINDOW_WIDTH;
    const livingRoomWindow5Y = HEIGHT - 30;
    ctx.strokeStyle = "grey";
    ctx.strokeRect(
      livingRoomWindow5X,
      livingRoomWindow5Y,
      STANDARD_WINDOW_WIDTH,
      STANDARD_WINDOW_HEIGHT,
    );
  }, []);

  const bathroom1Style = {
    position: "absolute",
    top: PADDING,
    width: STANDARD_WINDOW_HEIGHT,
    height: 270
  }
  
  const bathroom2Style = {
    position: "absolute",
    top: 0,
    left: BATHROOM_WIDTH - 130,
    width: STANDARD_WINDOW_WIDTH,
    height: STANDARD_WINDOW_HEIGHT
  }
  
  const bathroom3Style = {
      position: "absolute",
      top: 340,
      left: 0,
      width: STANDARD_WINDOW_HEIGHT,
      height: STANDARD_WINDOW_WIDTH
    }
    
    const bathroom4Style = {
      position: "absolute",
      top: 654,
      left: 40,
      width: STANDARD_WINDOW_WIDTH*4,
      height: STANDARD_WINDOW_HEIGHT
    }

  return (
    <div className="room-container">
      <canvas id="room-canvas" ref={canvasRef} width={WIDTH-PADDING} height={HEIGHT - PADDING} />

      <div className="button-container">
        <button style={bathroom1Style} id="bathroom1" />
        <button style={bathroom2Style} id="bathroom2" />
        <button style={bathroom3Style} id="bathroom3" />
        <button style={bathroom4Style} id="bathroom4" />
      </div>
    </div>
  );
}

export default Room;
