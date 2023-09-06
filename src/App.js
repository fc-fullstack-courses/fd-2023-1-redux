import { connect } from 'react-redux';
import './App.css';

function App(props) {
  const { count, dispatch } = props;

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
      <p>Count is : {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

function mapStateToProps (state) {
  return {
    count: state.count
  }
}

const withProps = connect(mapStateToProps);

const AppWithProps = withProps(App);

export default AppWithProps;

/*

  Redux :
    store - обьект хранилища данных
    dispatch - функция, которая отправляет экшены в редюьсер
    редюьсер - чистая функция, которая примает стейт и экшен и возвращает новый стейт
    экшены - аналог событий, обьект с данными, которых редьюсеру 
      будет достаточно чтобы понять как менять стейт

  react-redux:
    Provider - компонент, который принимает стору и дает дочерним элементам на неё подписыватся
    connect - функция, которую используем для подключения к стейту редакса компонентов
      mapStateToProps - функция, принимает стейт редакса и возвращает обьект, который будет
        добавлен в пропсы подключаемому компоненту. Туда обычно передаем часть стейта

*/