import http from "http"
import fs from "fs"
import path from "path"

const server = http.createServer((req, res) => {
	const url = req.url

	//for sending actual HTML content
	//not redirects
	const serveHTML = (path, statusCode = 200) => {
		fs.readFile(path, "utf8", (err, data) => {
			if(err) {
				res.statusCode = 500
				res.setHeader("Content-Type", "text/plain")
				res.end("Server Error")
			} else {
				res.statusCode = statusCode
				res.setHeader("Content-Type", "text/html")
				res.end(data)
			}
		})
	}

	switch(url) {
		case "/": 
			serveHTML("pages/home.html", 200)
			break;
		case "/profile":
			serveHTML("pages/profile.html", 200)
			break;
		case "/myprofile":
			res.statusCode = 301	
			res.setHeader("Location", "/profile") //relocates immediately to profile
			res.end()
			break;
		default:
			serveHTML("pages/404.html", 404)
			break;

	}
}) 

server.listen(3000, 'localhost', () => {
	console.log("Serveer runnign at http://localhost:3000")
})
