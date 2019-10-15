import React from 'react';
import { TextField } from './TextField';
import './App.css';
import { Counter } from './Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter>
        {(count, setCount) => (
          <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
      <TextField />
    </div>
  );
};

export default App;
