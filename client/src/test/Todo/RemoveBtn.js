// import React from 'react';
// import { 
//   render, 
//   fireEvent, 
//   waitForElement 
// } from '@testing-library/react';
// import axios from 'axios';
// import MockAdaptor from 'axios-mock-adapter';
// import Home from '../../components/Home';
// import ContentsList from '../../components/Todo/TodoList/ContentsList';
// import { TodoContext } from '../../components/TodoStorage';

// describe('<Home />', () => {
//   it('matches snapshots', () => {
//     const { container } = render(<Home />);
//     expect(container).toMatchSnapshot();
//   });

//   const mock = new MockAdaptor(axios, { delayedResponse: 500 });
//   mock.onGet('https://todo-data.herokuapp.com/api').reply(200, {
//     "statusCode": 200,
//     "body": [{
//       "title": "공부하기",
//       "id": 1233,
//       "status": "todo"
//     }, {
//       "title": "스터디준비",
//       "id": 1234,
//       "status": "todo"
//     }, {
//       "title": "알고리즘공부",
//       "id": 1230,
//       "status": "todo"
//     }, {
//       "title": "컴퓨터게임",
//       "id": 1231,
//       "status": "todo"
//     }]
//   });

//   it('shows the number of todo list', async () => {
//     const { getByText } = render(<TodoContext><Home /></TodoContext>);
//     await waitForElement(() => getByText(('해야할 일: 4개')));
//     await waitForElement(() => getByText(('완료한 일: 0개')));
//   });

  
// });