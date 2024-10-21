import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [control, setControl] = useState(false);

  const onAdd = () => {
    setCount(() => count + 1);
  };
  const onMinus = () => {
    setCount(count - 1);
  };
  const onShow = () => {
    setControl(true);
  };
  const onHide = () => {
    setControl(false);
  };
  return (
    <>
      <div className="counter-main">
        {control ? <h1>{count}</h1> : null}
        <div>
          <button onClick={onHide}>Hide</button>
          <button onClick={onAdd}>ADD</button>
          <button onClick={onMinus}>Minus</button>
          <button onClick={onShow}>Show</button>
        </div>
      </div>
    </>
  );
};

export default App;
