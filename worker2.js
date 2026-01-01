const express= require ("express");
const app = express();

app.get("/",(req,res) => { res.send("Hi from worker 2"); } );

app.get("/health",(req,res) => { res.send("OK"); } );

app.listen(3002,() => {console.log("Worker 2 running on port 3002")} );

