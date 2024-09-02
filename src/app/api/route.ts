import connect from '../../utils/start.mongo'

export async function GET(request: Request) {
  const client = await connect
  const cursor = await client.db("demo_db").collection("demo_collection_db").find();
  const greetings = await cursor.toArray()
  return Response.json(greetings)
}

export async function POST(request: Request){
    const client = await connect;
    const cursor = await client.db("demo_db").collection("demo_collection_db").insertOne({greeting:"Goodbye cruel world"});
    return Response.json({message: "successfully updated the document"})
  }