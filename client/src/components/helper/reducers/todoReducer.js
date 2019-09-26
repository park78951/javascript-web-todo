import { statusToggle } from '../../../myUtil';

export const todoReducer = ({ todoItems, showingBtnTitle }, { type, payload }) => {
  const todoDuplicate = [...todoItems];
  let updatedTodoItems;
  
  switch (type) {
    case 'INIT_TODOITEMS':
      return { todoItems: [...payload], showingBtnTitle };

    case 'ADD_TODOITEMS':
      return { 
        todoItems: [{"title": payload, "id": Date.now(), "status": "todo"}, ...todoDuplicate],
        showingBtnTitle 
      };
        
    case 'UPDATE_TODOITEMS':
      updatedTodoItems = statusToggle({ itemCollection: todoDuplicate, id: payload })
      return { todoItems: updatedTodoItems, showingBtnTitle };
    
    case 'DELETE_TODOITEMS':
      updatedTodoItems = todoDuplicate.filter(todoItem => todoItem.id !== payload)
      return { todoItems: updatedTodoItems, showingBtnTitle };
    
    case 'CHANGE_BTNTITLE':
      return { 
        todoItems: todoDuplicate,
        showingBtnTitle: showingBtnTitle === 'Hide' ? 'Show' : 'Hide' 
      };

    default:
      break;
  }
}