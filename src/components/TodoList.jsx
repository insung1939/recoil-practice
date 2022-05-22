import { useRecoilValue } from "recoil";
import TodoItemCreater from "./TodoItemCreater";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import { filteredTodoListState } from "../recoil/filteredTodoListState";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreater />
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
