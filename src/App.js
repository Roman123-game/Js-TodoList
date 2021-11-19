import React from 'react';
import './App.css';


const data = [];

function App() {
 function addData(){
  const parag = document.getElementById("parag");
  const input = document.getElementById("input");
  const select = document.getElementById("select");
   if (input.value === undefined || input.value == null ){
     console.log("undefined or null")
     return "eror";
   }
  else{
    
      data.push(input.value); 
      console.log(input.value);
     console.log(data);
     console.log (select.value);
     switch (select.value) {
     case "Shopping":
      parag = parag + (0).innerHTML ;
      parag.innerHTML = data[0];
     break;
    case "Tech" : 
    parag = parag + (5).innerHTML ;
    parag.innerHTML = data[0];
    break;
    case "Pleasure" : 
    parag = parag + (10).innerHTML ;
    parag.innerHTML = data[0];
    break;
 default:
  parag = parag + (0).innerHTML ;
  parag.innerHTML = data[0];
  break;
     }
    
    
  }
  
}
  return (
    <div className="App">
      <p>New Task</p>
      <input className="input" id="input"></input>
      <select id = "select">
      <option >Shopping</option>
      <option>Tech </option>
      <option>Pleasure</option>
      </select>
      <button className ="buttonP" onClick={addData}> +</button>
      
      <p id = "shop">Shopping List</p>
      <p  id='parag0'>empty</p>
      <p id="parag1" >empty</p>
      <p id="parag2" >empty</p>
      <p id="parag3" >empty</p>
      <p  id="parag4" >empty</p>
      <hr></hr>
      <p id = "tech">Tech List</p>
      <p className="parag" id="parag0">empty</p>
      <p id="parag5" >empty</p>
      <p id="parag6" >empty</p>
      <p id="parag7" >empty</p>
      <p  id="parag8" >empty</p>
      <p id="parag9" >empty</p>
      <hr></hr>
      <p id = 'pleasure'>Pleasure List</p>
      <p className="parag" id="parag0">empty</p>
     
      <p id="parag10" >empty</p>
      <p id="parag11" >empty</p>
      <p  id="parag12" >empty</p>
      <p  id="parag13" >empty</p>
      <p  id="parag13" >empty</p>
    </div>
  );
  }

export default App;
