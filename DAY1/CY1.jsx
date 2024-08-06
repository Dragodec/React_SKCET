import React from 'react';
import './App.css';

const App = () => {
  const name1="Ahil Aadithya R S";
  const name2="Ahil Aadithya R S";
  const obj1={name:"Ahil Aadithya R S"}
  const obj2={name:"Ahil Aadithya R S"}
  if(name1===name2)
  {
    alert(true);
  }else{
    alert(false);
  }
  if(obj1.name === obj2.name)
  {
    alert(true);
  }else{
    alert(false);
  }
}
 const CY1 = () =>{
  return(
    <div>
      <button onClick={CY1}>Click</button>
      {/*<p>This is World Functional Component</p>*/}
    </div>
  )
 }

export default CY1;
