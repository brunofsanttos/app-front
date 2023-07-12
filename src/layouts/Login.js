import react, { useState } from "react";

import { Button, Input, Form, Col, FormGroup, Row } from 'reactstrap';

import style from 'assets/css/login.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de autenticação aqui
        console.log('Email:', email);
        console.log('Senha:', password);
    };

    return (
        <>
            <Row>
                <Col md="4" ></Col>
                <Col md="4" className="container">
                    <div className="container-logo">
                        <h2>Seja bem-vindo</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="password" id="examplePassword" placeholder="Senha" />
                        </FormGroup>
                        <Button
                            color="primary" size="lg" block
                        >Logar
                        </Button>
                    </Form>
                </Col>
                <Col md="4" ></Col>
            </Row>
        </>
    );
}

export default Login