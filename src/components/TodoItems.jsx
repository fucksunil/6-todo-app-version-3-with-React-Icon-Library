import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import Todoitem from "./TodoItem";
import styles from "./TodoItems.module.css";


const TodoItems = () => {

  const {todoItems} = useContext(TodoItemsContext);

  
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Todoitem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;
