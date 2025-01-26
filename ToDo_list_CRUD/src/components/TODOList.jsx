function TODOList({ todos, onDelete, onMoveUp, onMoveDown, onToggleDone }) {
    return (
      <ol className="todo_list">
        {todos && todos.length > 0 ? (
          todos.map((item, index) => (
            <Item
              key={item.id}
              item={item}
              index={index}
              onDelete={onDelete}
              onMoveUp={onMoveUp}
              onMoveDown={onMoveDown}
              onToggleDone={onToggleDone}
            />
          ))
        ) : (
          <p className="empty_list_message"></p>
        )}
      </ol>
    );
  }
  
  export default TODOList;
  
  function Item({ item, index, onDelete, onMoveUp, onMoveDown, onToggleDone }) {
    return (
      <li id={item.id} className={`todo_item ${item.completed ? "done" : ""}`}>
        {/* "Done" button */}
        <button
          className="todo_done_button"
          onClick={() => onToggleDone(item.id)}
          aria-label={item.completed ? "Mark as not done" : "Mark as done"}
        >
          {item.completed ? "✔" : "○"}
        </button>
  
        {/* left part */}
        <div className="todo_items_left">
          <p>{item.title}</p>
        </div>
  
        {/* right part */}
        <div className="todo_items_right">
          <button onClick={() => onMoveUp(index)} aria-label="Move task up">
            <span className="visually-hidden">Move Up</span>
            <svg aria-hidden="true">
              <path d="M10 15l5-5-5-5" />
            </svg>
          </button>
          <button onClick={() => onMoveDown(index)} aria-label="Move task down">
            <span className="visually-hidden">Move Down</span>
            <svg aria-hidden="true">
              <path d="M10 5l5 5-5 5" />
            </svg>
          </button>
          <button onClick={() => onDelete(item.id)} aria-label="Delete task" className="delete_button">
            <span className="visually-hidden">Delete</span>
            <svg aria-hidden="true">
              <path d="M5 5l10 10M15 5l-10 10" />
            </svg>
          </button>
        </div>
      </li>
    );
  }
  