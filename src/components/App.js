import React, { useState, useEffect } from 'react';
import InputBox from './Input/InputBox';
import TodoList from './TodoList/TodoList';
import ContentsBtn from './ContentsBtn/ContentsBtn';
import styled from 'styled-components';
import todoApi from '../apis/todoApi';
import { INVALID_DATA, NETWORK_ERROR } from '../message/error';

const Div = styled.div`
  margin: 50px auto;
  width: 50%;
`

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const fetchMyTodoList = async (todoItems) => {
    try {
      const todoJson = await todoApi.get('/api');
      const myTodoList = todoJson.data.body;
      setTodoItems([...todoItems, ...myTodoList]);
    } catch(err) {
      if(err.name === 'typeError') console.log(INVALID_DATA);
      if(err.message === 'Network Error') console.log(NETWORK_ERROR);
    }
  }

  const addTodo = value => {
    setTodoItems(
      [
        ...todoItems, 
        {
          "title": value,
          "id": Date.now(),
          "status": "todo"
        }
      ]
    )
  }

  const removeTodo = id => {
    const todoDuplicate = [...todoItems]
    const [matchedItem] = todoDuplicate.filter( item => id === item.id );
    const matchedIdx = todoDuplicate.indexOf(matchedItem);
    todoDuplicate.splice(matchedIdx, 1)
    setTodoItems(todoDuplicate);
  }

  useEffect( () => {
    fetchMyTodoList(todoItems);
  }, [])

  return(
    <Div>
      <InputBox addTodo={ addTodo } />
      <TodoList myTodo={ todoItems } removeTodo={ removeTodo } />
      <ContentsBtn />
    </Div>
  )
}

export default App;