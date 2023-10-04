import { useRouter } from "next/router";
import Todo from "./to-do.js";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import CompletedTodos from "../components/Todos/CompletedTodos.js";

const HomePage = (props) => {
  return (
    <Fragment>
      <Todo todos={props.todos} />
    </Fragment>
  );
};

export default HomePage;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Poojadl02:Poojadl02@cluster0.e1kn1kh.mongodb.net/todos?retryWrites=true&w=majority"
  );
  const db = client.db();

  const todosCollection = db.collection("todos");
  console.log(todosCollection);

  const todoList = await todosCollection.find().toArray();
  console.log(todoList);

  return {
    props: {
      todos: todoList.map((todo) => ({
        task: todo.task,
        taskDescription: todo.taskDescription,
        completed: todo.completed,
        id: todo._id.toString(),
      })),
    },
  };
}
