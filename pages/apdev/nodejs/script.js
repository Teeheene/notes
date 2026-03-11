function write(text) {
const p = document.createElement("p")
p.textContent = text
document.body.appendChild(p)
}

function header(text) {
const parentElement = document.getElementById("container")
const h3 = document.createElement("h3")
h3.textContent = text
document.body.appendChild(h3)
}

function link(url, text) {
	const a = document.createElement("a")
	const p = document.createElement("p")

	a.href = url
	a.textContent = text 
	a.target = "_blank"
	document.body.appendChild(a)
	document.body.appendChild(p)
}

header("commonly used")
write("http, fs")
write("server.listen([port], [host], [callback])")
header("Response Object")
write("1. create the header >> setHeaders() and statusCode(), or writeHead()")
write("2. create the content >> write()")
write("3. signal complete response >> end()")
header("Status codes")
write("1xx informational")
write("2xx successful")
write("-- 200 OK")
write("-- 204 No content")
write("3xx redirects")
write("-- 301 Moved permanently")
write("-- 304 No content")
write("-- 308 Permanent redirect")
write("4xx client errors")
write("-- 400 Bad request")
write("-- 401 Unauthorized")
write("-- 403 Forbidden")
write("-- 404 Not found")
write("5xx server errors")
write("-- 500 Internal Server Error")
write("-- 503 Service Unavailable")
header("URL routing")


header("create a server guide")
write("const http = require('http')")
write("const server = http.createServer((req,res) => {")
write("...console.log(\"Request url: \" + req.url)")
write("})")
write("server.listen(3000, 'localhost', () => {")
write("...console.log(\"Server is listening...\")")
write("})")
