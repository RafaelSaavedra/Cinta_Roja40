import React,{useState/*Esto es un hook*/} /*Esto es un destructuring*/from 'react';//ES6 notation ya no usa require
import logo from './logo.svg';
import './App.css';
import Count from './Count'
import controls from './Controls'

function App() {
  const[count, setCount] = useState(0);//Hook recibe como parametro el valor inicial del estado
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-controls">
          <h2>{count}</h2>
          <div className="App-buttons">
          <Count num={Count}/>
          <controls 
            aumentar={()=> setCount(Count+1)}
            disminuir={()=> setCount(Count - 1)}
            reset={()=> setCount(0)}
          
          />
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
