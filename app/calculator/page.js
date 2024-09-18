"use client";
import "./calculator.css";
import { useState } from "react";

const Calculations = function () {
  var [result, setResult] = useState("");
  var [history, setHistory] = useState([]);

  const handler = function (param) {
    result += param.target.innerHTML;
    setResult(result);
  };

  const handleClear = function () {
    setResult("");
  };

  const removeOne = function () {
    var newResult = result.substring(0, result.length - 1);
    setResult(newResult);
  };

  const doCalculations = function () {
    var ans = eval(result);
    setResult(ans);
    var newItem = <h4>{result + "=" + ans}</h4>;
    setHistory([...history, newItem]);
  };

  return (
    <div className="dark-bg">
      <h1>My andriod calculator</h1>
      <p>{result}</p>
      <div className="calculator-background">
        <button className="green-button" onClick={handleClear}>
          C
        </button>
        <button className="green-button" onClick={handler}>
          /
        </button>
        <button className="green-button" onClick={handler}>
          *
        </button>
        <button className="green-button" onClick={removeOne}>
          ⌦
        </button>
        <button className="white-button" onClick={handler}>
          7
        </button>
        <button className="white-button" onClick={handler}>
          8
        </button>
        <button className="white-button" onClick={handler}>
          9
        </button>
        <button className="green-button" onClick={handler}>
          -
        </button>
        <button className="white-button" onClick={handler}>
          4
        </button>
        <button className="white-button" onClick={handler}>
          5
        </button>
        <button className="white-button" onClick={handler}>
          6
        </button>
        <button className="green-button" onClick={handler}>
          +
        </button>
        <div className="row">
          <div>
            <button className="white-button" onClick={handler}>
              1
            </button>
            <button className="white-button" onClick={handler}>
              2
            </button>
            <button className="white-button" onClick={handler}>
              3
            </button>
            <button className="white-button" onClick={handler}>
              %
            </button>
            <button className="white-button" onClick={handler}>
              0
            </button>
            <button className="white-button" onClick={handler}>
              .
            </button>
          </div>
          <button className="equals-button" onClick={doCalculations}>
            =
          </button>
        </div>
      </div>
      <div className="history-background">
        <p>{history}</p>
      </div>
    </div>
  );
};

export default Calculations;
