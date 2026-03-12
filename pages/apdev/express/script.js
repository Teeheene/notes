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

function code(str) {
	const pre = document.createElement("pre");
	pre.textContent = str; // preserves line breaks & indentation
	document.body.appendChild(pre);
}

header("background")
write("express is used to remove boiler from nodejs to increase ur efficiency type shit")
header("setup")
write("first you need to set up your directory to be npm and express ready")
code(`
npm init -y
npm install express
`)
write("then using the following code, you can setup your express server")
code(`
import express from "express"; // if using "type": "module"
const app = express();
const PORT = 3000;

// Start server
app.listen(PORT, () => console.log(\`Server running on http://localhost:\${PORT}\`));`)

header("basic routing")
code(`
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/create", (req, res) => {
    res.send("POST request received!");
});

app.put("/update", (req, res) => {
    res.send("PUT request received!");
});

app.delete("/delete", (req, res) => {
    res.send("DELETE request received!");
});
`)

header("route params & query strings")
write("route params")
code(`
app.get("/users/:id", (req, res) => {
    res.send(\`User ID: \${req.params.id}\`);
});
`)
write("query params")
code(`
app.get("/search", (req, res) => {
    // /search?name=John
    res.send(\`Searching for: \${req.query.name}\`);
});
`)

header("serving static files")
code(`app.use(express.static("public")); // serves files in public folder

// Example: public/index.html is now accessible at http://localhost:3000/index.html`)

header("json and form data")
code(`
app.post("/data", (req, res) => {
    // req.body requires express.json() middleware
    console.log(req.body);
    res.json({ received: true, data: req.body });
});
`)

header("routing with express.Router()")
write("good for modular routes")
write("in a route file...")
code(`
import express from "express";
const router = express.Router();

router.get("/", (req, res) => res.send("User List"));
router.get("/:id", (req, res) => res.send(\`User \${req.params.id}\`));

export default router;
`)
write("then in app.js")
code(`import userRoutes from "./routes/users.js";
app.use("/users", userRoutes);`)

header("error handling")
code(`
// 404 handler
app.use((req, res) => {
    res.status(404).send("Page not found");
});

// Error middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});
`)

header("sample mini crud")
code(`
let users = [];

app.get("/users", (req, res) => res.json(users));
app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});
app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json(users[id]);
});
app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const deleted = users.splice(id, 1);
    res.json(deleted);
});
`)


