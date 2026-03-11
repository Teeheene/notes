import { MongoClient, ObjectId } from "mongodb" 

const uri = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(uri)

let db

export async function connectDB() {
	await client.connect()
	db = client.db("crudsample")
	console.log("MongoDB connected")
}

export function getDB() {
	return db
}
