import React from 'react'

const Clock = () => {
        return(
      <div>
        <h1>Hello, world!: What is the time</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
  setInterval(Clock, 1000);
export default Clock