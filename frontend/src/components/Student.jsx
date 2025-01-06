import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { useEffect } from 'react';

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [students, setStudents] = useState([])
    const [errors, setErrors] = useState({});


    const validate = () => {
        const newErrors = {};
        if (!name || name.length < 2) {
            newErrors.name = "Name must be between 2";
        }
        if (!address || address.length < 2 || address.length > 100) {
            newErrors.address = "Address must be between 5 and 100 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleClick = (e) => {
        e.preventDefault()
        if (validate()) {
            const student = { name, address }
            console.log(student, address)

            fetch("http://localhost:8080/student/add", {

                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            }).then(() => {
                console.log("New student added")
            })
            setName("")
            setAddress("")

        }

    }

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/student/deleteStudent/${id}`, {
            method: "DELETE",

        })
            .then((response) => {
                if (response.ok) {
                    console.log(`Student with id ${id} deleted successfully`);
                } else {
                    console.log("Failed to delete student")
                }
            })
            .catch((error) => {
                console.log("Error: ", error)
            })
    }

    const handleUpdate = (student) => {
        const updatedName = prompt(`Enter the updated name for ${student.name}:`, student.name);
        const updatedAddress = prompt(`Enter the updated address for ${student.address}:`, student.address);
        const updatedStudent = {
            ...student, // Orijinal obyektin bütün sahələrini saxlayırıq
            name: updatedName, // Yeni ad
            address: updatedAddress, // Yeni ünvan
        };

        fetch(`http://localhost:8080/student/updateStudent/${student.id}`, {
            method: "PUT", // HTTP PUT metodu
            headers: {
                "Content-Type": "application/json", // JSON formatında məlumat göndəririk
            },
            body: JSON.stringify(updatedStudent), // Yenilənmiş məlumatı JSON formatına çeviririk
        })
            .then((response) => {
                if (response.ok) {
                    console.log(`Student with id ${student.id} updated successfully`);
                    // Məsələn, tələbə siyahısını yenidən yükləyə bilərsiniz
                    // fetchStudents(); 
                } else {
                    console.error("Failed to update student");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            })
    })
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}><u>Add Student</u></h1>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1 } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Student name" variant="outlined" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                    <Button variant="contained" color='secondary' onClick={handleClick}>Submit</Button>


                </Box>
            </Paper>
            <Paper elevation={3} style={paperStyle}>
                {students.map(student => (
                    <Paper elevation={6} style={{
                        margin: "10px", padding: "15px", textAlign: "left", display: "flex", justifyContent: "space-between",
                        alignItems: "center"
                    }} key={student.id}>
                        <div>
                            Id: {student.id}
                            <br />
                            Name: {student.name}
                            <br />
                            Address: {student.address}
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <Button variant="contained" style={{ backgroundColor: "red", color: "white" }} onClick={() => handleDelete(student.id)}>Delete</Button>
                            <Button variant="contained" style={{ backgroundColor: "blue", color: "white" }} onClick={() => handleUpdate(student)}>Update</Button>
                        </div>
                    </Paper>
                )

                )}
            </Paper>
        </Container>
    );
}
