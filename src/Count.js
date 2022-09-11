import React, {useState} from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count + 1)
  }
  const decrement= () => {
    setCount(count - 1)
  }
  return (
    <div>
        <h1>smartLabs Counter</h1>

<p> My count will always start at {count} </p>
    <button onClick= {decrement}>-</button>
    <button onClick= {increment}>+</button>
    </div>
  )
}

export default Count