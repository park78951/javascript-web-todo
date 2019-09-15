import React from 'react';
import InputBox from './Input/InputBox';
import Summary from './Summary/Summary';
import TodoList from './TodoList/TodoList';
import styled from 'styled-components';

const ComponentsWrapper = styled.div`
  margin: 0 auto;
  font-weight: bold;
`

const App = () => {
  return (
    <ComponentsWrapper>
      <InputBox />
      <Summary />
      <TodoList />
    </ComponentsWrapper>
  )
}

export default App;
