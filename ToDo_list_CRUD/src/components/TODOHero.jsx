function TODOHero({ todos_completed, total_todos }) {
    return (
      <section className="todohero_section">
        <div>
          <p>Completion</p>
          <p>Status</p>
        </div>
        <div>
          {total_todos > 0 ? `${todos_completed}/${total_todos}` : "No tasks yet!"}
        </div>
      </section>
    );
  }
  
  export default TODOHero;
  