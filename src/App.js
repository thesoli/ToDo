import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import axios from "axios";
import TodosList from "./Components/TodosList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/todos")
      .then((response) => setTodos(response.data));
  }, []);

  // const addNewTask = (newTask) => {
  //   newTask.id = uuidv4();
  //   axios
  //     .post("http://localhost:3004/todos", newTask)
  //     .then((response) => {
  //       console.log(response.data);
  //       setTodo([...todo, newTask]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>

        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>

        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
