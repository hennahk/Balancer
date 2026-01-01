const express = require("express");
const axios = require("axios");

const app = express();

const workers = ["http://localhost:3001"
,"http://localhost:3002"
,"http://localhost:3003"];

let current=0;

app.get("/",async(req,res) => {
	const worker=workers[current];
	current=(current+1)%workers.length;
	
	const response = await axios.get(worker);
	res.send(response.data);
	}
);

app.listen(3000, ()=> {console.log("load balancer running on port 3000")} );
