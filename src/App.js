import style from './App.module.css';
import {useState} from "react"

// Learn States

/* 
Dalam React untuk komponen UI hanya di render 1 kali.
*/

/* function App() {
  const [showText, setShowText] = useState(true)
  const [textColor, setTextColor] = useState("black")

  const changeText = () => {
    setShowText(!showText);
    setTextColor(textColor === "black" ? "black" : "red");

  };

  return (
    <div className={style.App}>
      <button onClick={changeText}> Show/Hide </button>
      {showText === true && <h1 style={{color: textColor}}> Heloo, my name is Felix </h1>}
    </div>
  );
} */

function App() {
  // Exercise 
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  const zeroCount = () => {
    setCount(0);
  }

  return (
    <div className={style.App}>
      <button onClick = {increaseCount} > Increase </button>
      <button onClick = {decreaseCount}> Decrease </button>
      <button onClick = {zeroCount}> Set to Zero </button>
      {count}
    </div>
  );
}

export default App;