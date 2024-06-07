import { useState } from "react";
import { useRouter } from "next/router";

export default function AddComment() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [komentar, setKomentar] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/insertData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, website, komentar }),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Komentar berhasil ditambahkan!");
                router.push("/");
            })
            .catch((err) => {
                console.error("Error: ", err.message);
            });
    };

    return (
        <div className="container">
            <h1 className="header">Tambah Komentar</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label className="label" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="input"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label className="label" htmlFor="website">
                        Website:
                    </label>
                    <input
                        className="input"
                        type="url"
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label className="label" htmlFor="komentar">
                        Komentar:
                    </label>
                    <textarea
                        className="textarea"
                        id="komentar"
                        value={komentar}
                        onChange={(e) => setKomentar(e.target.value)}
                        required
                    />
                </div>
                <button className="button" type="submit">
                    Add Comment
                </button>
            </form>
            <style jsx>{`
                .container {
                    padding: 20px;
                    font-family: Arial, sans-serif;
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .header {
                    text-align: center;
                    color: #2c3e50;
                    font-size: 24px;
                    margin-bottom: 15px;
                    font-weight: bold;
                }
                .form {
                    margin-bottom: 20px;
                    max-width: 600px;
                    margin: auto;
                }
                .formGroup {
                    margin-bottom: 15px;
                }
                .label {
                    display: block;
                    margin-bottom: 5px;
                }
                .input,
                .textarea {
                    width: calc(100% - 22px);
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                .button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px;
                    cursor: pointer;
                    font-size: 16px;
                    border-radius: 5px;
                    margin: 10px;
                }
            `}</style>
        </div>
    );
}
