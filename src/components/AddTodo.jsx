import { useRef } from "react";
import { MdAddCard } from "react-icons/md";

function AddTodo({ onNewItem }) {

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonCliced = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonCliced}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdAddCard />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
