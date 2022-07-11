import React, { useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState("");

  function handleClick(e) {
    setData(data.concat(e.target.name));
  }

  function reset() {
    setData("");
  }

  function del() {
    setData(data.slice(0, -1));
  }

  function calculate() {
    try {
      setData(eval(data).toString());
    } catch (err) {
      setData("Error");
    }
  }

  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
  const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
  //const date_time = date + ' ' + time;


  return (
    <>
    <div className = "logo"> Calc </div>
    <div className = "date">{date}</div>
    <div className="time">{time}</div>
      <div className="container">
        <form>
          <input type="text" value={data}></input>
        </form>
        <div className="keypad">
          <button className="col" onClick={reset} id="reset">
            Reset
          </button>
          <button className="col" onClick={del}>
            C
          </button>
          <button className="col" name="-" onClick={handleClick}>
            -
          </button>
          <button className="col2" name="9" onClick={handleClick}>
            9
          </button>
          <button className="col2" name="8" onClick={handleClick}>
            8
          </button>
          <button className="col2" name="7" onClick={handleClick}>
            7
          </button>
          <button className="col" name="/" onClick={handleClick}>
            ÷
          </button>
          <button className="col2" name="6" onClick={handleClick}>
            6
          </button>
          <button className="col2" name="5" onClick={handleClick}>
            5
          </button>
          <button className="col2" name="4" onClick={handleClick}>
            4
          </button>
          <button className="col" name="*" onClick={handleClick}>
            *
          </button>
          <button className="col2" name="3" onClick={handleClick}>
            3
          </button>
          <button className="col2" name="2" onClick={handleClick}>
            2
          </button>
          <button className="col2" name="1" onClick={handleClick}>
            1
          </button>
          <button className="col" name="+" onClick={handleClick}>
            +
          </button>
          <button className="col2" name="0" onClick={handleClick}>
            0
          </button>
          <button className="col2" name="." onClick={handleClick}>
            .
          </button>
          <button className="col" onClick={calculate} id="total">
            =
          </button>
        </div>
      </div>
    <div className="footer">Made By Promit Dey</div>
    </>
  );
}

export default App;