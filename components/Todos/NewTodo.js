import { Fragment, useRef } from "react";
import Style from "./NewTodo.module.css";

const NewTodo = () => {
  const taskInput = useRef();
  const taskDesc = useRef();
  const addTodoHandler = () => {
    const task = {
      id: Math.random().toString(),
      task: taskInput.current.value,
      taskDescription: taskDesc.current.value,
      completed: false,
    };
    console.log(task);
    localStorage.setItem(task.id, JSON.stringify(task));
  };

  const cancelHandler = () => {
    taskInput.current.value = "";
    taskDesc.current.value = "";
  };

  return (
    <Fragment>
      <h1>Add To Do</h1>
      <div style={{ border: "1px solid black" }}>
        <div className={Style["form-floating"]} style={{ margin: "0px" }}>
          <div className={Style["container"]}>
            <div className={Style["did-floating-label-content"]}>
              <input
                className={Style["did-floating-input"]}
                type="text"
                placeholder=" "
                ref={taskInput}
              />
              <label className={Style["did-floating-label"]}>Task Name</label>
            </div>
          </div>
        </div>
        <div className={Style["form-floating"]} style={{ margin: "0px" }}>
          <div className={Style["container"]}>
            <div className={Style["did-floating-label-content"]}>
              <input
                className={Style["did-floating-input"]}
                type="text"
                placeholder=" "
                ref={taskDesc}
              />
              <label className={Style["did-floating-label"]}>Description</label>
            </div>
          </div>
        </div>
        <div style={{ margin: "auto" }} align="center">
          <button onClick={addTodoHandler}>Add task</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </Fragment>
  );
};

export default NewTodo;
