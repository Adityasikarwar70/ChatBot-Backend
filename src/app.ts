import app from "./index.js";
import { connectToDatabase } from "./db/connection.js";

const PORT = process.env.PORT 
connectToDatabase().then(()=>{
  app.listen (PORT,()=> console.log("Server Open and connected to database" ))
  })
  .catch((err) => console.log(err));
