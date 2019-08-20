import React, { useState, useReducer } from 'react';
import useFetch from './useFetch/useFetch';
import { todoReducer } from './reducers/todoReducer';

export const TodoContext = React.createContext();

const TodoStorage = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoReducer, []);
  const [showingBtnTitle, setShowingBtnTitle] = useState('Hide');

  const isFetched = useFetch(setInitTodoData);
  
  const setInitTodoData = initData => {
    dispatch({type: "INIT", payload: initData})
  }
  
  const changeShowBtnTitle = showingBtnTitle => {
    showingBtnTitle === 'Show' 
    ? setShowingBtnTitle('Hide')
    : setShowingBtnTitle('Show');
  }
  
  const showContents = () => {
    changeShowBtnTitle(showingBtnTitle);
  }

  return(
    <TodoContext.Provider value={{ todoItems, showingBtnTitle, showContents, dispatch, isFetched }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoStorage;