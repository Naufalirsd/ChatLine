const {sql} = require("@vercel/postgres");

async function insertData(req, res) {
    try {
        if (req.method !== "POST") {
            return res
                .status(405)
                .json({message: "Method tidak diperbolehkan"});
        }
        const {name, website, komentar} = req.body;

        if (!name) {
            return res.status(400).json({message: "Nama Harus Diisi"});
        }

        if (!website) {
            return res.status(400).json({message: "Nama Harus Diisi"});
        }

        if (!komentar) {
            return res.status(400).json({message: "Nama Harus Diisi"});
        }

        const rows = await sql`INSERT INTO notes (name, website, komentar)
        VALUES (${name}, ${website}, ${komentar})`;
        
        res.status(200).json({message: "Success", data: rows});
    } catch (error) {
        console.log("Ada error", error);
        return res.status(500).json({message: "Terjadi error"});
    }
}

export default insertData;