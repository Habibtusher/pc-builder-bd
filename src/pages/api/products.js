
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://news:news@cluster0.avdod.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run(req, res) {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         // await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");

//         const newsCollection = client.db("pc-builder").collection("products")
//         if (req.method === 'GET') {
//             let result = await newsCollection.find({}).toArray()
//             function getRandomInt(min, max) {
//                 return Math.floor(Math.random() * (max - min + 1)) + min;
//               }

//               function getRandomObjects(data, count) {
//                 const randomObjects = [];
//                 const dataCount = data.length;
              
//                 if (count >= dataCount) {
//                   return data;
//                 }
              
//                 while (randomObjects.length < count) {
//                   const randomIndex = getRandomInt(0, dataCount - 1);
//                   const randomObject = data[randomIndex];
              
//                   if (!randomObjects.includes(randomObject)) {
//                     randomObjects.push(randomObject);
//                   }
//                 }
              
//                 return randomObjects;
//               }
              
           
//               const randomObjects = getRandomObjects(result, 6);
           
//             res.send({ message: "success", data: randomObjects, status: 200 })
//         }
//         // if (req.method === "POST") {
//         //     const news = req.body
//         //     const result = await newsCollection.insertOne(news)
//         //     res.json(result)
//         // }

//     } finally {
//         // Ensures that the client will close when you finish/error
//         // await client.close();
//     }
// }
// export default run
