import React, { useState } from "react";
import { Card, Container, Label, Form, FormGroup, Input, Button } from "reactstrap";
import Fade from 'react-reveal/Fade';
import Swal from 'sweetalert2';
import AuthAPI from "res/apis/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the sign-in logic here
        if (email && password) {

            AuthAPI.signin({ email, password }).then(result => {
                console.log('SignIn Result: ', result);
                localStorage.setItem('wingToken', result?.data?.body?.accessToken);
                Swal.fire({
                    icon: 'success',
                    title: 'Signed in successfully',
                    text: `Welcome back, ${email}!`
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/');
                    }
                });
            }).catch(e => {
                console.log('Error:', e)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something else on the signIn!'
                });
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please provide both email and password!'
            });
        }
    };

    return (
        <Container className="mt-3 flex justify-content-center">
            <Fade left>
                <Card body className="auth_card">
                    <Label className="h1">Sign In</Label>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </FormGroup>
                        <Button type="submit" color="primary">Sign In</Button>
                    </Form>
                </Card>
            </Fade>
        </Container>
    );
}

export default SignIn;
