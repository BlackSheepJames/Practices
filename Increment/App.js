import React, { useState } from 'react';
function Counter(){

  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
    <h1 style={{color: 'blue'}}>Count: {count}</h1>
    <button style={{backgroundColor: 'red', color: 'white'}}
    onClick={handleButtonClick}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
    <Counter />
    </div>
  );
}

export default App;