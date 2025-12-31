const express= require ("express");
const app = express();

app.get("/",(req,res) => { res.send("Hi from worker 1"); } );

app.get("/health",(req,res) => { res.send("OK"); } );

app.listen(3001,() => {console.log("Worker 1 running on port 3001")} );

