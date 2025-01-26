import doneIcon from "../assets/done.png";
import upIcon from "../assets/up.png";
import downIcon from "../assets/down.png";
import deleteIcon from "../assets/delete.png";

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
      {/* "Done" */}
      <button
        className="todo_done_button"
        onClick={() => onToggleDone(item.id)}
        aria-label={item.completed ? "Mark as not done" : "Mark as done"}
      >
        <img src={doneIcon} alt="Done" />
      </button>

      {/* left part */}
      <div className="todo_items_left">
        <p>{item.title}</p>
      </div>

      {/* right part */}
      <div className="todo_items_right">
        <button onClick={() => onMoveUp(index)} aria-label="Move task up">
          <img src={upIcon} alt="Move Up" />
        </button>
        <button onClick={() => onMoveDown(index)} aria-label="Move task down">
          <img src={downIcon} alt="Move Down" />
        </button>
        <button onClick={() => onDelete(item.id)} aria-label="Delete task" className="delete_button">
          <img src={deleteIcon} alt="Delete" />
        </button>
      </div>
    </li>
  );
}
