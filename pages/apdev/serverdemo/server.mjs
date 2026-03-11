import { createServer } from 'node:http' 
//http module to build a web server

const hostname = 'localhost'
const port = 3000

let users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" }
] 
let nextId = 3 

const server = createServer((req, res) => {

	if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end(); // stop here, no further processing
  }

	if(req.url == '/' && req.method === 'GET') {
		res.writeHead(200, {
			'Content-Type': 'text/html',
			'Access-Control-Allow-Origin': '*'
		})

		res.end("Kill me please")
	}

	else if(req.url === '/users' && req.method === 'GET') {
		res.writeHead(200, { 
			'Content-Type': 'application/json', 
			'Access-Control-Allow-Origin': '*'
		})

		res.end(JSON.stringify(users))
	} 
	
	else if(req.url === '/users' && req.method === 'POST') {
		let body = ''

		req.on('data', chunk => body += chunk) //incoming http req obj
		req.on('end', () => {
			const { name } = JSON.parse(body)
			const newUser = { id: nextId++, name }
			users.push(newUser)
			res.writeHead(201, { 
				'Content-Type': 'application/json', 
				'Access-Control-Allow-Origin': '*'
			}) 
			res.end(JSON.stringify(newUser))
		})
		
	} 

	else {
		res.writeHead(404, {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		})

		res.end(JSON.stringify({
			error: 'Route not found'
		}))
	}
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})

