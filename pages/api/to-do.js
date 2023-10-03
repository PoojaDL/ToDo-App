import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Poojadl02:Poojadl02@cluster0.e1kn1kh.mongodb.net/todos?retryWrites=true&w=majority"
    );
    const db = client.db();

    const todosCollection = db.collection("todos");

    const result = await todosCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "To-Do added!" });
  }
}
