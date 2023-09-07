import { connect } from 'react-redux';
import * as CounterActionCreators from '../../redux/actions/counterActionCreators';

function Counter(props) {
  const { count, dispatch } = props;

  const handleIncrement = () => {
    const action = CounterActionCreators.increment();

    dispatch(action);
  };
  
  const handleDecrement = () => {
    dispatch(CounterActionCreators.decrement());
  };

  return (
    <div>
      <p>Count is : {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
