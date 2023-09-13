import { useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as CounterActionCreators from '../../redux/slices/counterSlice';

function Counter(props) {
  const { count, step } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const { increment, decrement, reset, changeStep } = useMemo(
    () => bindActionCreators(CounterActionCreators, dispatch),
    [dispatch]
  );
  
  const changeStepHandler = useCallback(
    ({ target: { value } }) => {
      changeStep(+value);
    },
    [changeStep]
  );

  // non optimized
  // const { increment, decrement, reset, changeStep } = bindActionCreators(
  //   CounterActionCreators,
  //   dispatch
  // );

  // const changeStepHandler = ({ target: { value } }) => {
  //   changeStep(+value);
  // };

  useEffect(() => {
    console.log('rerender');
  }, [changeStepHandler]);

  return (
    <div>
      <p>Count is : {count}</p>
      <p>
        Step is :{' '}
        <input type='number' value={step} onChange={changeStepHandler} />
      </p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default Counter;
