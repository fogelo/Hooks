import React, { useEffect, useState, useRef } from 'react';
import './App.css';


function App() {
const [number, setNumber] = useState(1)


  return (
    <div>
      <h1>вычисляемое свойство: {number}</h1>
      <button>Добавить</button>
      <button>Убрать</button>
    </div>
  )
}

export default App;
