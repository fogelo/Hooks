import React, { useEffect, useState, useRef } from 'react';
import './App.css';


//Задача посчитать сколько раз мы рендерили наш компонент 
function Ref() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value)
  })

  return (
    <div>
      <h1>количество рендеров {renderCount.current}</h1>
      <input ref={inputRef} value={value} onChange={(e)=>setValue(e.target.value)}></input>
    </div>
  )
}

export default Ref;
