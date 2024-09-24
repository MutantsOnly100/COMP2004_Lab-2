import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <hr></hr>
      <div className="row">
        <Card
          image="src/assets/images/1.jpg"
          location="Indonesia"
          name="Gili Air Hotel"
          rate="4.8"
          price="$589"
        />

        <Card
          image="src/assets/images/2.jpg"
          location="Seychelles"
          name="Hilton Resort"
          rate="4.2"
          price="$629"
        />

        <Card
          image="src/assets/images/3.jpg"
          location="US Virgin Islands"
          name="Goa Resort"
          rate="3.5"
          price="$485"
        />

        <Card
          image="src/assets/images/4.jpg"
          location="Bahamas"
          name="Kuredu Resort"
          rate="4.1"
          price="$729"
        />

        <Card
          image="src/assets/images/5.jpg"
          location="Mauritius"
          name="Trou D'eau Douce"
          rate="4.9"
          price="$877"
        />

        <Card
          image="src/assets/images/6.jpg"
          location="Bermuda"
          name="Staniel Cay Hotel"
          rate="3.2"
          price="$365"
        />
      </div>
    </>
  );
}

export default App;
