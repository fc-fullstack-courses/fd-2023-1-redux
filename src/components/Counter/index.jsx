import { connect } from 'react-redux';
import * as CounterActionCreators from '../../redux/actions/counterActionCreators';

function Counter(props) {
  const { count, step, increment, decrement, reset, changeStep } = props;

  // const handleChangeStep = (e) => {
  //   const {
  //     target: { value },
  //   } = e;

  //   changeStep(value);
  // };

  return (
    <div>
      <p>Count is : {count}</p>
      <p>
        Step is :{' '}
        <input type='number' value={step} onChange={changeStep} />
      </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function mapStateToProps(state) {
  return state.counter;
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(CounterActionCreators.increment()),
    decrement: () => dispatch(CounterActionCreators.decrement()),
    reset: () => dispatch(CounterActionCreators.reset()),
    // changeStep: (newStep) =>
    //   dispatch(CounterActionCreators.changeStep(+newStep)),
    changeStep: ({ target: { value } }) =>
      dispatch(CounterActionCreators.changeStep(+value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
