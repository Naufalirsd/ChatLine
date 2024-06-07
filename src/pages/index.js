import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("/api/getData")
            .then((res) => res.json())
            .then((data) => {
                setNotes(data.data);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="header">Welcome to My Project</h1>
            <div className="profileContainer">
                <div className="profileDetails">
                    <h2>
                        <strong>Naufal Irsyad Ihsan</strong>
                    </h2>
                    <p>
                        Saya Naufal Irsyad Ihsan telah membuat project aplikasi
                        presensi. Aplikasi ini memungkinkan pengguna untuk
                        mencatat kehadiran dengan mudah dan efisien.
                    </p>
                    <p>
                        <strong>Project:</strong> Aplikasi Presensi
                    </p>
                    <p>
                        <strong>Description:</strong> Aplikasi ini dibuat untuk
                        membantu pengguna mencatat dan memantau kehadiran mereka
                        dalam berbagai kegiatan. Dengan fitur-fitur yang mudah
                        digunakan, aplikasi ini diharapkan dapat meningkatkan
                        efisiensi dan produktivitas pengguna.
                    </p>
                </div>
                <img
                    className="profileImage"
                    src="/Absensi.png"
                    alt="Profile Picture"
                />
            </div>
            <Link href="/add-comment">
                <button className="button">Add Comment</button>
            </Link>
            <h1 className="header">Comments</h1>
            <div>
                {notes.length > 0 ? (
                    notes.map((note, index) => (
                        <div className="noteContainer" key={index}>
                            <p>
                                <strong>Name:</strong> {note.name}
                                <br />
                                <strong>Website:</strong>{" "}
                                <a
                                    className="noteLink"
                                    href={note.website}
                                    target="_blank">
                                    {note.website}
                                </a>
                                <br />
                                <strong>Komentar:</strong> {note.komentar}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>Loading....</p>
                )}
            </div>
            <style jsx>{`
                .container {
                    padding: 20px;
                    font-family: Arial, sans-serif;
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .header {
                    text-align: center;
                    color: #2c3e50;
                    font-size: 24px;
                    margin-bottom: 15px;
                    font-weight: bold;
                }
                .profileContainer {
                    margin-bottom: 20px;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    background-color: #f9f9f9;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .profileImage {
                    border-radius: 5px;
                    width: 100%;
                    max-width: 800px;
                    height: auto;
                }
                .profileDetails {
                    flex: 1;
                    line-height: 1.5;
                    padding: 10px;
                }
                .noteContainer {
                    margin: 20px 0;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    background-color: #f9f9f9;
                }
                .noteLink {
                    color: #007bff;
                    text-decoration: none;
                }
                .noteLink:hover {
                    text-decoration: underline;
                }
                .button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px;
                    cursor: pointer;
                    font-size: 16px;
                    border-radius: 5px;
                    margin: 10px 0;
                }
            `}</style>
        </div>
    );
}
