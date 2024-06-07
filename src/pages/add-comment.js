import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
`;

const Header = styled.h1`
    text-align: center;
    color: #2c3e50;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    margin: 10px;
`;

const Form = styled.form`
    margin-bottom: 20px;
    max-width: 600px;
    margin: auto;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: calc(100% - 22px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Textarea = styled.textarea`
    width: calc(100% - 22px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

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
        <Container>
            <Header>Tambah Komentar</Header>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Name:</Label>
                    <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="website">Website:</Label>
                    <Input
                        type="url"
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="komentar">Komentar:</Label>
                    <Textarea
                        id="komentar"
                        value={komentar}
                        onChange={(e) => setKomentar(e.target.value)}
                        required
                    />
                </FormGroup>
                <Button type="submit">Add Comment</Button>
            </Form>
        </Container>
    );
}
