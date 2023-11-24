import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        // "Sarath_Paul"
        // "Test_123ai07"
        let data = null;
        try {
            let response = await axios({
                url: `https://react-test.aventusinformatics.com/api/auth/login`,
                method: 'POST',
                data: {
                    "username": username,
                    "password": password
                },
                headers: { 'Content-Type': `application/json`, 'accept': 'application/json' }
            });


        } catch (e) {

        }
    }
    return (
        <div className='Login'>
            {/* <button onClick={handleLogin}>Login</button> */}
            <Form>
                <h1>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                     type="text" 
                     placeholder="Enter Username"
                     onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                       />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                </Form.Group>
                <Button onClick={handleLogin} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login