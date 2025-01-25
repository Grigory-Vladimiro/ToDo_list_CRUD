function TODOList({ todos, onDelete, onMoveUp, onMoveDown }) {
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
            />
          ))
        ) : (
          <p>Seems lonely in here, what are you up to?</p>
        )}
      </ol>
    );
  }
  
  export default TODOList;
  
  function Item({ item, index, onDelete, onMoveUp, onMoveDown }) {
    return (
      <li id={item.id} className="todo_item">
        <button className="todo_items_left">
          <svg>
            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
          </svg>
          <p>{item.title}</p>
        </button>
  
        <div className="todo_items_right">
          <button onClick={() => onMoveUp(index)}>
            <span className="visually-hidden">Move Up</span>
            <svg>
              <path d="M10 15l5-5-5-5" />
            </svg>
          </button>
          <button onClick={() => onMoveDown(index)}>
            <span className="visually-hidden">Move Down</span>
            <svg>
              <path d="M10 5l5 5-5 5" />
            </svg>
          </button>
          <button onClick={() => onDelete(item.id)}>
            <span className="visually-hidden">Delete</span>
            <svg>
              <path d="M5 5l10 10M15 5l-10 10" />
            </svg>
          </button>
        </div>
      </li>
    );
  }
  