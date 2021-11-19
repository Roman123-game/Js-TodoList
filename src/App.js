import React from 'react';
import './App.css';


const data = [];
var i=0;
function App() {
 function addData(){
  
  const input = document.getElementById("input");
   if (input.value === undefined || input.value == null ){
     console.log("undefined or null")
     return 0;
   }
  else{
   
      data.push(input.value); 
      console.log(input.value);
      document.getElementById("parag" + i).innerHTML = data[i];
     console.log(data);
     console.log(data[i]);
    i++;
    
  }
  
}
  return (
    <div className="App">
      <p>New Task</p>
      <input className="input" id="input"></input>
      <select>
      <option >Shopping</option>
      <option>Tech </option>
      <option>Pleasure</option>
      </select>
      <button className ="buttonP" onClick={addData}> +</button>
      
      <p id = "shop">Shopping List</p>
      <p className="parag" id="parag0">empty</p>
      <p id="parag1" >empty</p>
      <p id="parag2" >empty</p>
      <p id="parag3" >empty</p>
      <p  id="parag4" >empty</p>
      <hr></hr>
      <p id = "tech">Tech List</p>
      <p className="parag" id="parag0">empty</p>
      <p id="parag1" >empty</p>
      <p id="parag2" >empty</p>
      <p id="parag3" >empty</p>
      <p  id="parag4" >empty</p>
      <hr></hr>
      <p id = 'pleasure'>Pleasure List</p>
      <p className="parag" id="parag0">empty</p>
      <p id="parag1" >empty</p>
      <p id="parag2" >empty</p>
      <p id="parag3" >empty</p>
      <p  id="parag4" >empty</p>
    </div>
  );
  }

export default App;
