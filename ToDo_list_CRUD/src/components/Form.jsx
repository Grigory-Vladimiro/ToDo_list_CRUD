import React, { useState } from "react";

function Form({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue); 
      setInputValue(""); 
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Put your task here and hit enter or '+' button"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button type="submit" aria-label="Add task">
        +
      </button>
    </form>
  );
}

export default Form;
