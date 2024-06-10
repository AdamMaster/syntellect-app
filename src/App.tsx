import React, { useState } from "react";
import "./App.css";
import { ButtonProps, Control } from "./components/control/Control"
import { getCountryByName } from "./api/apiService";
import { ControlSearch } from "./components/control-search/ControlSearch";

function App() {
  const [text1, setText1] = useState<string>('')
  const [text2, setText2] = useState<string>('')

  const clearText = () => setText1('')
  const setHelloWorld = () => setText1('Hello world!')

  const alertText = () => alert(text2);
  const isNumeric = () => {
    const isNumeric = (value: string) => {
      return !isNaN(parseFloat(value)) && isFinite(Number(value));
    }
    if (isNumeric(text2)) {
      alert(text2)
    } else {
      return
    }
  }

  const leftButtons1:ButtonProps[] | [] = []
  const rightButtons1:ButtonProps[] | [] = [
    { text: 'Clear', callback: clearText },
    { text: 'Hello world!', callback: setHelloWorld }
  ]
  const leftButtons2: ButtonProps[] | [] = [
    { text: 'Alert number', callback: isNumeric }
  ]
  const rightButtons2: ButtonProps[] | [] = [
    { text: 'Alert', callback: alertText }
  ]

  console.log(getCountryByName('Ан'));

  return (
    <div className="app">
      <Control
        value={text1}
        setValue={setText1}
        leftButtons={leftButtons1}
        rightButtons={rightButtons1}
      />
      <Control
        value={text2}
        setValue={setText2}
        leftButtons={leftButtons2}
        rightButtons={rightButtons2}
      />
      <ControlSearch itemsLength={10}/>
      <ControlSearch itemsLength={3}/>
    </div>
  )
}

export default App
