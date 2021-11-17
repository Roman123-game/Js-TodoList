import React from 'react';
import './App.css';



function App() {
  const data = ["ficus"];
 function addData(){
  const input = document.getElementById("input");
   if (input.value === undefined || input.value==null ){

     console.log("undefined or null")
   }
  else{
    data.push(input.value);
    console.log(input.value);
    const parag = document.getElementById("parag");
    parag.innerHTML=input.value ;
  }
 }
  return (
    <div className="App">
      <p>New Task</p>
      <input className="input" id="input"></input>
      <button className="button_plus"   onClick={addData}> +</button>
      <p>List</p>
      <p className="parag" id="parag">empty</p>
    </div>
  );
  }

export default App;
