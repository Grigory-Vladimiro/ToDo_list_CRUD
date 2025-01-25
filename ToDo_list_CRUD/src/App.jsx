import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";

function Home() {
  const [todos, setTodos] = useState([]);

 
  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), title: newTodo }]);
  };

  
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  
  const moveUp = (index) => {
    if (index === 0) return; 
    const newTodos = [...todos];
    [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
    setTodos(newTodos);
  };

  
  const moveDown = (index) => {
    if (index === todos.length - 1) return; 
    const newTodos = [...todos];
    [newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]];
    setTodos(newTodos);
  };

  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos.filter((todo) => todo.completed).length} total_todos={todos.length} />
      <Form onAddTodo={addTodo} />
      <TODOList todos={todos} onDelete={deleteTodo} onMoveUp={moveUp} onMoveDown={moveDown} />
    </div>
  );
}

export default Home;
