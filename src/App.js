import './App.css';
import Counter from './components/Counter';
import TaskList from './components/TaskList';
import UserCreationForm from './components/UserCreationForm';

function App(props) {

  return (
    <>
      <Counter />
      <TaskList />
      <UserCreationForm />
    </>
  )
}

export default App;

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
