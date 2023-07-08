import React from "react";
import "./styles.css";
import Video from "./components/Video";
import { useState } from 'react';

export default function App() {
  const[sun,setSun] = useState("☀️");
  const[text,setText] = useState('LightMode');

  let obj = {
    title: "Interest",
    interest: ["Design", "Programming", "Computer Science", "Editing"],
    verified: true
  };

  let heading = "Resume shashank";

  const handleClick = (event) => {
    let el = document.body;
    el.style.backgroundColor =
      el.style.backgroundColor === "white" ? "black" : "white";
  };

  const handleClickText = () => {
    let bodyBackgroundColor = document.body.style.backgroundColor;
    if (bodyBackgroundColor === "white") {
      setSun('☀️');
      setText('lightMode')
      document.body.style.color = 'white';
    } else {
      setSun("🌃")
      setText('DarkMode');
      document.body.style.color = 'black';
    }
  };
  const handleClickBoth = () => {
    handleClickText();
    handleClick();
  };

  return (
    <>
      {heading}
      <span>
        <div>
          <button id="btn" onClick={handleClickBoth}>
            {text}
            <span id="change" role="img" aria-label="Checkmark">
              {sun}
            </span>
          </button>
        </div>
      </span>
      <hr />
      <Video
        verified={obj.verified}
        title={obj.title}
        interest={obj.interest.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      />
    </>
  );
}
