import express from "express"
import { getDB } from "../db.js"
import { ObjectId } from "mongodb"

const router = express.Router()

router.get("/", async (req, res) => {
	const users = await getDB().collection("users").find().toArray()
	res.json(users)
})

router.get("/:id", async (req, res) => {
	try {
		const user = await getDB()
			.collection("users")
			.findOne({ _id: new ObjectId(req.params.id) })

		if(!user) return res.status(404).json({ error: "User not found" })

		res.json(user)
	} catch(err) {
		res.status(500).json({ error: err.message })
	}
})

router.post("/", async (req, res) => {
	const { name, email, age } = req.body
	if(!name || !email || !age)
		return rest.status(400).json({ error: "All fields required" })
	const result = await getDB()
		.collection("users")
		.insertOne({ name, email, age: Number(age) })
	res.json({ result })
})

router.put("/:id", async (req, res) => {
	try {
    const result = await getDB()
      .collection("users")
      .updateOne(
        { _id: new ObjectId(req.params.id) }, // find user by _id
        { $set: { 
            name: req.body.name,
            email: req.body.email,
            age: Number(req.body.age) 
          } } // update fields
      )
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.delete("/:id", async (req, res) => {
	const result = await getDB()
		.collection("users")
		.deleteOne({ _id: new ObjectId(req.params.id) })

	if(result.matchedCount === 0)
		return res.status(404).json({ error: "User not found" })
	res.json({ message: "User deleted" })
})

export default router
