import React, { useEffect, useState } from "react";
import { Card, Container, Label, Form, FormGroup, Input, Button } from "reactstrap";
import Swal from 'sweetalert2';
import Fade from 'react-reveal/Fade'
import { useLocation, useNavigate } from "react-router-dom";
import { getTokenFromPath } from "res/utils";
import AuthAPI from "res/apis/auth";

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const token = getTokenFromPath(pathname);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Handle the reset password logic here

            AuthAPI.resetPassword({ password, token }).then(result => {
                console.log('Result: ', result);
                Swal.fire({
                    icon: 'success',
                    title: 'Password reset successfully',
                    text: 'Your password has been updated!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/sign-in');
                    }
                });
            }).catch(e => {
                console.log('Error: ', e);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something else...'
                });
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match!'
            });
        }
    };

    return (
        <Container className="mt-3 flex justify-content-center">
            <Fade left>
                <Card body className="auth_card">
                    <Label className="h1">Reset Password</Label>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="password">New Password <Label className="text-danger">*</Label></Label>
                            <Input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter new password"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirm New Password <Label className="text-danger">*</Label></Label>
                            <Input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm new password"
                            />
                        </FormGroup>
                        <Button type="submit" color="primary">Reset Password</Button>
                    </Form>
                </Card>
            </Fade>
        </Container>
    );
}

export default ResetPassword;
