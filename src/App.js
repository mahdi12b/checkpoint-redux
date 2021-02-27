import './App.css';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';
function App() {
  return (
    <div className="App">
        <TodoInput/>
        <TodoList/>
    </div>
  );
}

export default App;
