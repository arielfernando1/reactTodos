import "./css/todo.css";
export const Todo = ({todo}) => {
  return (
    <div
      className="card"
      style={
        todo.done ? { backgroundColor: "#abebc6" } : { backgroundColor: "#f1948a" }
      }
    >
      <input type="hidden" value={todo.id} />
      <h4>{todo.text}</h4>
      {todo.id}
      <button>Delete</button>
    </div>
  );
};
