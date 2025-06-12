# Real-Time Chat Application (Node.js + Socket.IO)

## Overview
This is a simple, scalable real-time chat app that demonstrates the power of Node.js's non-blocking I/O model and concurrent connection handling.

## Features
- Real-time messaging via WebSockets (Socket.IO)
- Displays active online users
- Efficient handling of multiple clients

## Technologies
- Backend: Node.js, Express.js, Socket.IO
- Frontend: HTML, Vanilla JS
- Testing: Apache Bench (for performance testing)

## Getting Started

### Prerequisites
- Node.js (v18+)

### Installation

1. Clone the repo:
   ```
   git clone https://github.com/Adekola-Adeniran/node-chat-app.git
   cd node-chat-app
   ```

2. Install dependencies:
   ```
   npm install express socket.io cors
   ```

3. Run the server:
   ```
   node server.js
   ```

4. Open `index.html` in multiple browser tabs or machines.

## Performance Testing

Use Apache Bench:
```
ab -n 1000 -c 100 http://localhost:3000/
```

## Scaling

Enable clustering with the `cluster` module or use PM2:
```
pm2 start server.js -i max
```

## License
MIT
