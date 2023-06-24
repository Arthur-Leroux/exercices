const { Client } = require("pg");
const dotenv = require("dotenv");
const path = require("path");

// I don't know why I have to load the environment variables in this file as well. 
// Since they are already loaded in the index.js, I'm expecting process.env.DB_NAME to be defined here but it's not...
// Re-loading them manually...
const envFilePath = path.join(__dirname, "../.env");
dotenv.config({ path: envFilePath });


const client = new Client({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "pokemon",
    user: process.env.DB_USER || "pokemon",
    password: process.env.DB_PASSWORD || "pokepass"
});

client.connect();

module.exports = client;
