import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/todoListState";

const TodoItemCreater = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoLIst = useSetRecoilState(todoListState);
  const [id, setId] = useState(0);
  const addItem = () => {
    setId(id + 1);
    setTodoLIst(oldTodoLIst => [
      ...oldTodoLIst,
      {
        id: id,
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreater;
