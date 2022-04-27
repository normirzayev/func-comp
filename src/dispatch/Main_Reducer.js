import React, {useReducer} from "react";
import Reducer from "./Reducer";
import "./style/reducer.css";
export default function Main_Reducer(){
  const [{r, g, b}, dispatch] = useReducer(Reducer, {
    r: 0,
    g: 0,
    b: 0
  })
  let data = {}
  if(localStorage.getItem("data")){
    data = JSON.parse(localStorage.getItem("data"));
  }
  else{
    data = {
      r: 0,
      g: 0,
      b: 0
    }
  }
  return(
    <div className="box">
      <h1 style={{color: `rgb(${r}, ${g}, ${b})`}}>Hello world</h1>
      <h1 style={{color: `rgb(${r}, ${g}, ${b})`}}>Assalomu Aleykum</h1>
      <div>
        <span>R</span>
        <button onClick={() => dispatch({type: "INCREMENT_R"})}>plus</button>
        <button onClick={() => dispatch({type: "DECREMENT_R"})}>minus</button>
        <span>{data.r}</span>
      </div>
      <div>
        <span>G</span>
        <button onClick={() => dispatch({type: "INCREMENT_G"})}>plus</button>
        <button onClick={() => dispatch({type: "DECREMENT_G"})}>minus</button>
        <span>{data.g}</span>
      </div>
      <div>
        <span>B</span>
        <button onClick={() => dispatch({type: "INCREMENT_B"})}>plus</button>
        <button onClick={() => dispatch({type: "DECREMENT_B"})}>minus</button>
        <span>{data.b}</span>
      </div>
    </div>
  )
}