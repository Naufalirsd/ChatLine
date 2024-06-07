require("dotenv").config({path: ".env.development.local"});
const {sql} = require("@vercel/postgres");

async function execute() {
    try {
        const rows = await sql`
        INSERT INTO notes (name, website, komentar)
        VALUES ('Naufal', 'github.com', 'Saya telah membuat project baru')
        RETURNING *
        `;
        console.log("Data Added:", rows);
    } catch (error) {
        console.log(error);
    }
}

execute()