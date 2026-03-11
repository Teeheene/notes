import express from "express"
import { connectDB } from "./db.js"

const app = express()

app.use(express.json())
app.use(express.static('public'))

connectDB().then(() => {
	app.listen(3000, () => {
		console.log("Server running on port 3000")
	})
})
