import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setcount] = useState(0);
  const onAdd = () => {
    setcount(() => count + 1);
  };
  const onMinus = () => {
    setcount(count - 1);
  };
  return (
    <>
      <div className="counter-main">
        <h1>{count}</h1>
        <div>
          <button onClick={onAdd}>ADD</button>
          <button onClick={onMinus}>Minus</button>
        </div>
      </div>
    </>
  );
};

export default App;
