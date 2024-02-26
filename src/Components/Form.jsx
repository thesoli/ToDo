import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? (title, id, completed) : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }

    setInput("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="add a new task"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button type="submit" className="button-add">
        {editTodo ? "edit" : "add"}
      </button>
    </form>
  );
};

export default Form;
