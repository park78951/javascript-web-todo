import React from 'react';
import { 
  render, 
  fireEvent, 
} from '@testing-library/react';
import RemoveBtn from '../../../components/Todo/TodoList/RemoveBtn';

describe('<RemoveBtn />', () => {
  it('matches snapshots', () => {
    const { container } = render(<RemoveBtn />);
    expect(container).toMatchSnapshot();
  });

  it('should be clicked', () => {
    const mockRemoveHandler = jest.fn();
    const { getByText } = render(<RemoveBtn removeHandler={ mockRemoveHandler } />);
    const removeBtn = getByText('X');
    fireEvent.click(removeBtn);
    expect(mockRemoveHandler).toHaveBeenCalledTimes(1);
    fireEvent.click(removeBtn);
    expect(mockRemoveHandler).toHaveBeenCalledTimes(2);
  });
});