import React, { useState } from 'react';

function App() {
  function computeInitialState() {
    console.log('some calculations...')    
    return Math.trunc(Math.random() * 20)
  }
  const [counter, setCounter] = useState(computeInitialState())

  const [state, setState] = useState({
    title: 'счетчик',
    date: Date.now(),

  })

  function increment() {
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  function decrement() {
    setCounter(counter - 1)
  }

function updateTitle(){
  setState(prev=>{
    return {...prev, title: 'новое название'}
  })
}

  return (
    <div className="App">
      <div>Счетчик {counter}</div>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Убрать</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={updateTitle}>Изменить название</button>
    </div>
  );
}

export default App;
