require("dotenv").config({path: ".env.development.local"});
const {sql} = require("@vercel/postgres");

async function execute() {
    const deleteTable = await sql`DROP TABLE IF EXISTS notes`

    const createTable = await sql`
    CREATE TABLE IF NOT EXISTS notes (
        id SERIAL PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        website VARCHAR(50) NOT NULL,
        komentar VARCHAR(150) NOT NULL
    )
    `;
    console.log(createTable)
}

execute()


