const express= require ("express");
const app = express();

app.get("/",(req,res) => { res.send("Hi from worker 3"); } );

app.get("/health",(req,res) => { res.send("OK"); } );

app.listen(3003,() => {console.log("Worker 3 running on port 3003")} );
