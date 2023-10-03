import { Fragment } from "react";
import NewTodo from "../../components/Todos/NewTodo";

const Todo = () => {
  const formSubmitted = async (data) => {
    const response = await fetch("/api/to-do", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();
    console.log(resData);
  };
  return (
    <Fragment>
      <div>
        <h1>This is to-do</h1>
      </div>
      <hr />
      <NewTodo onAddData={formSubmitted} />
    </Fragment>
  );
};

export default Todo;
