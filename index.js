const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());

// user: dbuser1
// pass: gB0mmkui5M2RgSBZ

const uri =
  "mongodb+srv://dbuser1:gB0mmkui5M2RgSBZ@cluster0.q4bl5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    // await client.close();
    await client.connect();

    const userCollection = client.db("foodExpress").collection("user");
    const user = { name: "Rubel", email: "rubel@gmail.com" };
    const result = await userCollection.insertOne(user );
    console.log(`User inserted with id: ${result.insertedId}`);
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("runnng my node crud server");
});

app.listen(port, () => {
  console.log("Crud server is runnig");
});
