const Todolist = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todos) => (
        <li className="list-group-item d-flex jsutify-content-between align-items-center">
          {todos.title}
          <input type="checkbox" checked={todos.completed} />
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
