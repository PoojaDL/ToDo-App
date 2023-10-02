import { Fragment } from "react";
import NewTodo from "../../components/Todos/NewTodo";

const Todo = () => {
  return (
    <Fragment>
      <div>
        <h1>This is to-do</h1>
      </div>
      <hr />
      <NewTodo />
    </Fragment>
  );
};

export default Todo;
