# Load Balancer with Round Robin

## Description
This project implements a simple HTTP load balancer using Node.js and Express.
The balancer distributes incoming requests to multiple worker servers using
round-robin scheduling and performs health checks before forwarding requests.

## Ports Used
- Load Balancer: 3000 (Port 3000 used instead of 80 due to permission 
  restrictions)
- Worker 1: 3001
- Worker 2: 3002
- Worker 3: 3003

## How to Run
1. Install dependencies:
   npm install

2. Start workers:
   node worker1.js
   node worker2.js
   node worker3.js

3. Start balancer:
   node balancer.js

4. Test:
   curl http://localhost:3000

## Health Check
Each worker exposes `/health`. The balancer forwards requests only to healthy workers.
If no workers are available, the balancer returns HTTP 503.

