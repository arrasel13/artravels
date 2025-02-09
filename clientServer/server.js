const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 500;

app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.8";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const touristspotCollection = client
      .db("artravels")
      .collection("touristspot");

    const usersCollection = client.db("artravels").collection("users");

    // Users Related
    app.get("/users", async (req, res) => {
      const getAllUsers = usersCollection.find();
      const result = await getAllUsers.toArray();
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      // console.log(newUser);

      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

    // Tourist Spots

    app.get("/all-tourist-spot", async (req, res) => {
      const getAllSpot = touristspotCollection.find();
      const result = await getAllSpot.toArray();
      res.send(result);
    });

    app.get("/all-tourist-spot/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await touristspotCollection.findOne(query);
      res.send(result);
    });

    app.get("/edit-touristspot/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await touristspotCollection.findOne(query);
      res.send(result);
    });

    app.get("/my-list/:email", async (req, res) => {
      const query = { addedBy: req.params.email };
      const mylists = touristspotCollection.find(query);

      const result = await mylists.toArray();
      res.send(result);
    });

    app.post("/add-tourist-spot", async (req, res) => {
      const newTouristSport = req.body;
      // console.log(newTouristSport);

      const result = await touristspotCollection.insertOne(newTouristSport);
      res.send(result);
    });

    app.put("/update-tourist-spot/:id", async (req, res) => {
      const id = req.params.id;
      const updateTouristSport = req.body;
      // console.log(updateTouristSport);

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateInfo = {
        $set: {
          name: updateTouristSport.name,
          area: updateTouristSport.area,
          distance: updateTouristSport.distance,
          famousFor: updateTouristSport.famousFor,
          tourist_point_name1: updateTouristSport.tourist_point_name1,
          tourist_point_desc1: updateTouristSport.tourist_point_desc1,
          tourist_point_name2: updateTouristSport.tourist_point_name2,
          tourist_point_desc2: updateTouristSport.tourist_point_desc2,
          tourist_point_name3: updateTouristSport.tourist_point_name3,
          tourist_point_desc3: updateTouristSport.tourist_point_desc3,
          description: updateTouristSport.description,
          photo: updateTouristSport.photo,
        },
      };
      // console.log(updateInfo);
      const result = await touristspotCollection.updateOne(
        filter,
        updateInfo,
        options
      );
      res.send(result);
    });

    app.delete("/all-tourist-spot/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await touristspotCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
