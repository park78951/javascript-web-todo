import React, { useContext } from 'react';
import RemoveBtn from './RemoveBtn';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TodoContext } from '../../TodoStorage';

const EachTodoListWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 2px solid #05386b;
  margin-bottom: 5px;

  div {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 80%;
    cursor: pointer;
  }
  
  .line-through::before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    border-bottom: 1px solid #111;
    width: 100%;
  }
`

const ContentsList = ({ title, status, id }) => {
  const { dispatch } = useContext(TodoContext);

  const removeHandler = () => {
    dispatch({ type: 'DELETE_TODOITEMS', payload: id });
  }
  
  const changeStatus = ({ target }) => {
    const { localName } = target;
    if(localName === 'li' || localName === 'button') return;
    
    const lineThroughList = target.closest('li div');
    lineThroughList.classList.toggle('line-through');
    dispatch({ type: 'UPDATE_TODOITEMS', payload: id });
  }

  return (
    <EachTodoListWrapper onClick={ changeStatus } >
      <div>
        <span>{ title }</span>
        <span>{ status }</span>
      </div>
      <RemoveBtn removeHandler={ removeHandler } />
    </EachTodoListWrapper>
  );
}

ContentsList.propTypes = {
  title: PropTypes.string,
  status: PropTypes.string,
  id: PropTypes.number
}

export default ContentsList;