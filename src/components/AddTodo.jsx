import { useState } from "react";
import { MdAddCard } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState('');
  const [todoDueDate, setTodoDueDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDueDate(event.target.value);
  };

  const handleAddButtonCliced = () => {
    onNewItem(todoName, todoDueDate);
    setTodoName("");
    setTodoDueDate("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonCliced}
          >
            <MdAddCard />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
