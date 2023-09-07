import { connect } from 'react-redux';
import * as CounterActionCreators from '../../redux/actions/counterActionCreators';

function Counter(props) {
  const { count, step, dispatch } = props;

  const handleIncrement = () => {
    const action = CounterActionCreators.increment();

    dispatch(action);
  };

  const handleDecrement = () => {
    dispatch(CounterActionCreators.decrement());
  };

  const handleReset = () => {
    dispatch(CounterActionCreators.reset());
  };

  const handleChangeStep = (e) => {
    const {
      target: { value },
    } = e;

    dispatch(CounterActionCreators.changeStep(+value));
  };

  return (
    <div>
      <p>Count is : {count}</p>
      <p>
        Step is : <input type='number' value={step} onChange={handleChangeStep} />
      </p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function mapStateToProps(state) {
  return state.counter
}

export default connect(mapStateToProps)(Counter);
