import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignIn = () => {
        // Implement your sign-in logic here
        setIsLoggedIn(true);
    };

    const handleSignOut = () => {
        // Implement your sign-out logic here
        setIsLoggedIn(false);
    };

    const handleForgotPassword = () => {
        // Implement your forgot password logic here
        alert('Forgot Password');
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Welcome, {username}!</p>
                    <Button variant="primary" onClick={handleSignOut}>Sign Out</Button>
                </div>
            ) : (
                <div className='d-flex justify-content-center mt-4'>
                    <div className='w-50 card p-5'>
                        <Form className='d-grid'>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Link to='/home' className='mt-5 mx-auto'>
                                <Button variant="primary" type="submit" onClick={handleSignIn}>Sign In</Button>
                            </Link>


                            {/* <Button variant="secondary" onClick={handleForgotPassword}>Forgot Password</Button> */}
                        </Form>
                    </div>

                </div>
            )}
        </div>
    );
}

export default LoginPage;
