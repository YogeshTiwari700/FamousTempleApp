import React from "react";
import "./styles.css";
import { useState } from "react";

const famousTemple = {
  Madhyapradesh: [
    { name: "MahaKaleswar Jyotriling", city: "Ujain" },
    { name: "Omkareshwar", city: "Khandawa" },
    { name: "Pittambara Peeth", city: "Datia" }
  ],

  Uttarpradesh: [
    {
      name: "Ram Janmabhoomi Temple",
      city: "Ayodhya "
    },
    {
      name: "Banke Bihari Temple",
      city: "Vrindavan"
    },
    {
      name: "Shri Kashi Vishwanath",
      city: "Varansi"
    }
  ],
  Uttrakhand: [
    {
      name: "Kedarnath",
      city: "Rudraprayag"
    },
    {
      name: "Badrinath",
      city: "Chamoli"
    },
    {
      name: "Gangotri",
      city: "uttarkashi"
    }
  ]
};

var temples = Object.keys(famousTemple);
export default function App() {
  const [temple, setTemple] = useState("Madhyapradesh");
  function templeclickHandler(temple) {
    setTemple(temple);
  }

  return (
    <div className="App">
      <h1>National Parks In India</h1>
      <p className="description">
        checkout different National Parks in different states of India.
      </p>
      <div>
        {temples.map((temple) => (
          <button
            className="temple-btn"
            onClick={() => templeclickHandler(temple)}
          >
            {temple}
          </button>
        ))}
      </div>

      <hr></hr>
      <div className="output">
        <ul>
          {famousTemple[temple].map((temple) => (
            <li key={temple.name} className="temple-element">
              <div className="temple-name">{temple.name}</div>
              <div className="temple-city">{temple.city}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
