import React, { useMemo } from 'react';
import ContentsList from './ContentsList';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LOADING, EMPTY_LIST } from '../../../config';

const TodoContnentsWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  color: #05386b;
  font-weight: bold;

  p {
    font-size: 1.8rem;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: center;
  }
`

const Contents = ({ myTodo, isFetched }) => {
  const todoList = useMemo( 
    () => myTodo.map( ({ title, id, status }) => {
    return (
      <ContentsList 
        title={title} 
        status={status.toUpperCase()} 
        key={id}
        id={id}
      />
    )
  }), 
  [myTodo]
  );

  const ifEmpty = isFetched ? EMPTY_LIST : LOADING;

  return (
    <TodoContnentsWrapper>
      <p>Todo</p>
      <ul>
        {myTodo.length ? todoList : ifEmpty}
      </ul>
    </TodoContnentsWrapper>
  );
}

Contents.propTypes = {
  myTodo: PropTypes.array,
  isFetched: PropTypes.bool
}

export default Contents;