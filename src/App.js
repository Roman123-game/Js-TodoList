import React from 'react';
import './App.css';




function App() {
  const data = ["ficus"];
 function addData(){
  const input = document.getElementById("input") ;
   const parag = document.getElementById("parag");
    data.push(input.value);
    console.log(input.value);
    
    parag.innerHTML = input.value;
 }
  return (
    <div className="App">
      <p>New Task</p>
      <input className="input" id="input"></input>
      <button className="button_plus"   onClick={addData}> +</button>
      <p>List</p>
      <p className="parag" id="parag">empty now</p>
    </div>
  );
}


export default App;
