import React from 'react';
import {
  render,
  fireEvent
} from '@testing-library/react';
import TodoApp from '../../components/Todo';
import { TodoContext } from '../../components/TodoStorage';
import InputBox from '../../components/Todo/Input/InputBox';
import Summary from '../../components/Todo/Summary/Summary';
import TodoList from '../../components/Todo/TodoList/TodoList';

// describe('<TodoApp />', () => {
//   it('should have InputBox, Summary, TodoList', () => {
//     const { container } = render(
//       <TodoApp>
//         <TodoContext.Provider>
//           <InputBox />
//           <Summary />
//           <TodoList />
//         </TodoContext.Provider>
//       </TodoApp>
//     );
//     expect(container).toMatchSnapshot();
//   });
// });