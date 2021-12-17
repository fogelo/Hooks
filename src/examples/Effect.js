import React, { useEffect, useState } from 'react';
import './App.css';

function Effect() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0, y: 0
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
    console.log('effect')
  }, [type])

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    })
  }
  //чтобы убрать подпискку на что-то нужн из useEffect вурнуть функцию, делающую это
  useEffect(() => {
    console.log('componentDidMount')
    window.addEventListener('mousemove', mouseMoveHandler)
  }, [])

  console.log('render')

  return (
    <div>
      <h1>{type}</h1>
      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Посты</button>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Effect;
