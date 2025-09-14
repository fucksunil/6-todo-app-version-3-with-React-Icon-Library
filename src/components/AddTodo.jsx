import { useState } from "react";
import { MdAddCard } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDueDate(event.target.value);
  };

  const handleAddButtonCliced = (event) => {
    event.preventDefault();
    onNewItem(todoName, todoDueDate);
    setTodoName("");
    setTodoDueDate("");
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonCliced}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" value={todoDueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="submit"  className="btn btn-success kg-button">
            <MdAddCard />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
