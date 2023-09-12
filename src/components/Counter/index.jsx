import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as CounterActionCreators from '../../redux/actions/counterActionCreators';

function Counter(props) {
  const { count, step } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('rerender');
  }, [step]);

  const increment = () => {
    dispatch(CounterActionCreators.increment());
  };

  const decrement = () => {
    dispatch(CounterActionCreators.decrement());
  };

  const reset = () => {
    dispatch(CounterActionCreators.reset());
  };

  const changeStep = ({ target: { value } }) => {
    dispatch(CounterActionCreators.changeStep(+value));
  };

  return (
    <div>
      <p>Count is : {count}</p>
      <p>
        Step is : <input type='number' value={step} onChange={changeStep} />
      </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
