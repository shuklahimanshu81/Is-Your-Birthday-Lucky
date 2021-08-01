import React, { useState } from "react";
import "./styles.css";

import lucky from "/src/Lucky.svg";
import unLucky from "/src/sadImg.svg";
import error from "/src/error.svg";

const luckyImage = <img alt="showing Happiness" src={lucky} />;
const unLuckyImage = <img alt="showing Happiness" src={unLucky} />;
const errorIs = <img alt="Showing Error" src={error} />;

var dob;
var luckyNumber;
export default function App() {
  var [result, setResult] = useState(["", ""]);

  function onChangeHandler(e) {
    dob = e.target.value;
  }
  function onChangeHandler1(e) {
    luckyNumber = e.target.value;
  }
  function checkBtnHandler(e) {
    if (dob == null) {
      setResult(["Please Enter Your Birthday😉", errorIs]);
    } else if (luckyNumber == null) {
      setResult(["Please enter the lucky number😥", errorIs]);
    } else {
      const dateIn = dob.split("-");
      var sum = 0;
      dateIn.map((string) => {
        for (let i = 0; i < string.length; i++) {
          sum = sum + Number(string[i]);
        }
      });
      if (sum % luckyNumber === 0) {
        setResult(["Your birthday is lucky 😍🥳", luckyImage]);
      } else if (luckyNumber <= 0) {
        setResult(["Lucky number should be greater than zero 👻", errorIs]);
      } else {
        setResult(["Your birthday is not Lucky 🙂", unLuckyImage]);
      }
    }
  }
  return (
    <div className="App">
      <h1 style={{ color: "blue", padding: "10px" }}>
        {" "}
        Is your Birthday Lucky?{" "}
      </h1>
      <div id="headDiv">
        <h1> Hey! Welcome </h1>
        <h2> Would you like to know if your birthday is lucky or not </h2>
        <a href={"#gameDiv"}> Scroll down to know </a>
      </div>

      <div id="gameDiv">
        <h4 style={{ backgroundColor: "white", padding: "5px 0px" }}>
          {" "}
          Privacy Note! We are not storing any data.{" "}
        </h4>
        <label htmlFor="dateInput"> Please Enter Your Birthday: </label>

        <input id="dateInput" type="date" onChange={onChangeHandler} />
        <br></br>

        <label htmlFor="luckyNumber"> Give us your lucky number: </label>

        <input
          onChange={onChangeHandler1}
          type="number"
          min="1"
          style={{ margin: "1rem" }}
          placeholder="enter your lucky no"
          id="luckyNumber"
        />
        <br></br>
        <button id="checkBtn" onClick={checkBtnHandler}>
          Check
        </button>
        <div id="result"> {result} </div>
      </div>
      <div className="socialMediaDiv">
        <h3 style={{ fontSize: "1.5rem" }}> Social Media </h3>
        <ul>
          <li className="socialMedia">
            <a className="links" href="https://twitter.com/developer__dude/">
              Twitter
            </a>
          </li>
          <li className="socialMedia">
            <a
              className="links"
              href="https://www.linkedin.com/in/the-developer-dude/"
            >
              linkedIn
            </a>
          </li>
          <li className="socialMedia">
            <a className="links" href="https://github.com/shuklahimanshu81">
              GitHub
            </a>
          </li>
        </ul>
        <p> Made with Love and ❤ </p>
      </div>
    </div>
  );
}
