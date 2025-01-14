import { useState, useEffect } from 'react';
import todoApi from '../../../Apis';
import { INVALID_DATA, NETWORK_ERROR } from '../../../config';

const useFetch = setInitDataFunc => {
  const [isFetched, setIsFetched] = useState(false);

  const fetchMyTodoList = async () => {
    try {
      const todoJson = await todoApi.get('/api');
      const initData = todoJson.data.body;
      setInitDataFunc(initData);
      setIsFetched(true);
    } catch(err) {
      if(err.name === 'typeError') console.log(INVALID_DATA);
      if(err.message === 'Network Error') console.log(NETWORK_ERROR);
    }
  };

  useEffect(() => {
    fetchMyTodoList();
  }, []);
  
  return isFetched;  
}

export default useFetch;