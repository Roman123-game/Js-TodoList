import React from 'react';
import './App.css';


const data = [];
const data2 = [];
const data3 = [];

function App() {
 function addData(){
  const shop = document.getElementById("shop");
  const tech = document.getElementById("tech");
  const pleasure = document.getElementById("pleasure");
  const input = document.getElementById("input");
  const select = document.getElementById("select");
   if (input.value === undefined || input.value == null ){
     console.log("undefined or null")
     return "eror";
   }
  else{
    
  switch (select.value) {
     case "Shopping":
      data.push(input.value); 
      console.log(data);
      shop.innerHTML = data[0];
    
      break;
    case "Tech" : 
    data2.push(input.value); 
    console.log(data2);
    tech.innerHTML = data2[0];
    break;
       case "Pleasure" : 
       data3.push(input.value); 
       pleasure.innerHTML = data3[0];
       console.log(data3);
       break;
   default:
   data.push(input.value); 
  break;
     }}}

  return (
    <div className="App">
      <h1>Ultimate Todo</h1>
      <input className="input" id="input"></input>
      <select id = "select">
      <option >Shopping</option>
      <option>Tech </option>
      <option>Pleasure</option>
      </select>
      <button className ="buttonP" onClick={addData}> +</button>
      <hr></hr>
      <div className ="shopList">
      <h4>Shop List</h4>
      <p id = "shop">--</p>
      <hr></hr>
      </div>
      <div className ="techList">
      <h4>Tech List</h4>
      <p id = "tech">--</p>
      <hr></hr>
      </div>
      <div className ="pleasureList">
      <h4>Pleasure List</h4>
      <p id = "pleasure">--</p>
     </div>
     </div>
  );
  }

export default App;
