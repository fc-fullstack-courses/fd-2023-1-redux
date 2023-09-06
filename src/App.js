import { useReducer } from 'react';
import './App.css';

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment': {
      const newState = {
        ...state,
        count: state.count + 1
      }

      return newState;
    }
    case 'decrement': {
      const newState = {
        ...state,
        count: state.count - 1
      }

      return newState;
    }
    default: return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {

    const action = {
      type: 'increment'
    }

    dispatch(action);
  }
  const handleDecrement = () => {
    const action = {
      type: 'decrement'
    }

    dispatch(action);
  }

  return (
    <div>
      <p>Count is : {state.count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
