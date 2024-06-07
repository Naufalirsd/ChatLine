import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
`;

const Header = styled.h1`
    text-align: center;
    color: #2c3e50;
`;

const ProfileContainer = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
`;

const ProfileImage = styled.img`
    border-radius: 5px;
    width: 800px;
    height: auto;
`;

const ProfileDetails = styled.div`
    flex: 1;
    line-height: 40px;
`;

const NoteContainer = styled.div`
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
`;

const NoteLink = styled.a`
    color: #007bff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    margin: 10px 0;
`;

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
        <Container>
            <Header
                style={{
                    fontSize: "20px",
                    marginBottom: "15px",
                    fontWeight: "bold",
                }}>
                Welcome to My Project
            </Header>
            <ProfileContainer>
                <ProfileDetails>
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
                </ProfileDetails>
                <ProfileImage src="/Absensi.png" alt="Profile Picture" />
            </ProfileContainer>
            <Link href="/add-comment">
                <Button>Add Comment</Button>
            </Link>
            <Header
                style={{
                    fontSize: "20px",
                    marginBottom: "15px",
                    fontWeight: "bold",
                }}>
                Comments
            </Header>
            <div>
                {notes.length > 0 ? (
                    notes.map((note, index) => (
                        <NoteContainer key={index}>
                            <p>
                                <strong>Name:</strong> {note.name}
                                <br />
                                <strong>Website:</strong>{" "}
                                <NoteLink href={note.website} target="_blank">
                                    {note.website}
                                </NoteLink>
                                <br />
                                <strong>Komentar:</strong> {note.komentar}
                            </p>
                        </NoteContainer>
                    ))
                ) : (
                    <p>Loading....</p>
                )}
            </div>
        </Container>
    );
}
