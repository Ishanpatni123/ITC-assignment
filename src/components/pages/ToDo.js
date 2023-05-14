import React from "react";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import axios from "axios";
import Todolist from "./Todolist";

function ToDo() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data);
    });
  }, []);

  return <div>{todos ? <Todolist todos={todos} /> : <Loading />}</div>;
}

export default ToDo;
