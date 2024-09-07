// lib/mongodb.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb+srv://contact-form:iRsEz35NfAzn8p!@prospexplore.6wyph.mongodb.net/?retryWrites=true&w=majority&appName=ProspeXplore"; // Replace with your MongoDB connection string
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to store the client to prevent multiple connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's fine to create a new client with every function call
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
