import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { Provider } from 'react-redux';
import store from './redux/store';
import { TodoList } from './components/TodoList';
import { LoadTodos } from './components/LoadTodos';

function App() {
  return (
    <div>
      <Provider store={store}>
        <>
          our todo list
          <AddTodo />  
          <LoadTodos />
          <TodoList />
        </>
      </Provider>
    </div>
  );
}

export default App;
