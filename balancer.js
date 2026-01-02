const express = require("express");
const axios = require("axios");

const app = express();

const workers = ["http://localhost:3001"
,"http://localhost:3002"
,"http://localhost:3003"];

let current=0;

async function isalive(worker) {
	try {
		await axios.get(worker + "/health",{timeout: 1000});
		return true;
	} catch {
		console.log("worker down");
		return false;
	}
}

app.get("/",async(req,res) => {
	for(let i=0; i< workers.length ;i++) {	
		const worker = workers[current];
		current=(current+1)%workers.length;

		if(await isalive(worker)){
			console.log("forwarding to ",worker);
			const response = await axios.get(worker);
			return res.send(response.data);
		}
	}
		res.status(503).send("no worker is available");
}
);

app.listen(3000, ()=> {console.log("load balancer running on port 3000")} );

