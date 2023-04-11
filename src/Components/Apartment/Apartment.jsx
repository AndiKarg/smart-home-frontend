import "./Apartment.css";

import React from "react";

export default function Apartment() {
  return (
    <div className="room-container">
      <div className="bathroom room">
        <div className="button-container">
          <button>Bad</button>
        </div>
      </div>
      <div className="storage-room room">
        <div className="button-container">
          <button>Abstellkammer</button>
        </div>
      </div>
      <div className="hallway room">
        <div className="button-container">
          <button>Flur</button>
        </div>
      </div>
      <div className="bedroom room">
        <div className="button-container">
          <button>Schlafzimmer</button>
        </div>
      </div>
      <div className="living-room room">
        <div className="button-container">
          <button>Wohnzimmer</button>
        </div>
      </div>
    </div>
  );
}
