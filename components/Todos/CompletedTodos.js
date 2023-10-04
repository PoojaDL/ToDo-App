import { Fragment, useRef } from "react";

const CompletedTodos = (props) => {
  const selectedInput = useRef();
  const compHandler = (event) => {
    const data = JSON.parse(event.target.value);
    if (event.target.checked) {
      const sendingData = {
        task: data.task,
        taskDescription: data.taskDescription,
        completed: true,
        first: "wrong",
      };
      props.onAddData(sendingData);
    }
  };

  return (
    <Fragment>
      <div>
        <ul>
          {props.todos.map((todo) => {
            if (!todo.completed) {
              return (
                <span>
                  <form>
                    <input
                      type="checkbox"
                      onClick={compHandler}
                      ref={selectedInput}
                      defaultValue={JSON.stringify(todo)}
                    />
                  </form>
                  <li>{todo.task}</li>
                </span>
              );
            }
          })}
        </ul>
        <ul>
          <p>Completed ToDO</p>
          {props.todos.map((todo) => {
            if (todo.completed) {
              return (
                <span>
                  <form>
                    <input
                      type="checkbox"
                      onClick={compHandler}
                      ref={selectedInput}
                      defaultValue={JSON.stringify(todo)}
                    />
                  </form>
                  <li>{todo.task}</li>
                </span>
              );
            }
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default CompletedTodos;
