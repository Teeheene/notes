import express from "express"
import { connectDB } from "./db.js"
import userRoutes from "./routes/users.js"

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use("/users", userRoutes)

connectDB().then(() => {
	app.listen(3000, () => {
		console.log("Server running on port 3000")
	})
})

