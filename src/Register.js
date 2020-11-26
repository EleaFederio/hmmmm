import cookie from 'js-cookie';
import React, { Component } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { axios } from './lib/axios';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirm_password: '',
            errors: {}
        }
    }


    handleForm = (e) => {
        e.preventDefault();

        const data = {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            phoneNumber: this.state.email, 
            password: this.state.password,
            password_confirmation: this.state.confirm_password,
            deviceId: 'yeah'
        }

        axios.defaults.withCredentials = true;
        axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then(response => {
            axios.post('http://127.0.0.1:8000/api/customer_register', data)
            .then(res => {
                console.log(res.data);
                cookie.set('token', res.data.token);
                cookie.set('user_id', res.data.customer.id);
                // cookie.set('user', res.data.customer);
                this.props.setLogin(res.data.customer);
                this.props.history.push('/profile');
                
            })
        })
        // this.props.history.push('/profile');
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row className={'justify-content-center mt-5'}>
                        <Col md={8} lg={6}>
                            <Card className={'mt-5'}>
                                <Card.Header>
                                    <h3 className={'text-center'} style={{marginBottom: 0}}><b>FudMo</b></h3>
                                    <p className={'text-center'}>Gubat Food Delivery Service</p>
                                </Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleForm}>
                                        <Form.Group>
                                            <Form.Label>First Name</Form.Label>
                                            <Col>
                                                <Form.Control type={'text'} name={'firstname'} onChange={this.handleInput} placeholder={'Enter Email'} value={this.state.firstname} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Last Name</Form.Label>
                                            <Col>
                                                <Form.Control type={'text'} name={'lastname'} onChange={this.handleInput} placeholder={'Enter Email'} value={this.state.lastname} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Phone Number</Form.Label>
                                            <Col>
                                                <Form.Control type={'text'} name={'email'} onChange={this.handleInput} placeholder={'Enter Email'} value={this.state.email} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Col>
                                                <Form.Control type={'password'} name={'password'} onChange={this.handleInput} placeholder={'Enter Password'} value={this.state.password} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Col>
                                                <Form.Control type={'password'} name={'confirm_password'} onChange={this.handleInput} placeholder={'Enter Password'} value={this.state.confirm_password} />
                                            </Col>
                                        </Form.Group>
                                        <Button variant={'primary'} className={'mt-2'} type={'submit'}>
                                            REGISTER
                                        </Button>
                                        <p className={'text-center mt-2'}>Allready have account. <Link to={'/login'}>Login</Link></p>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {

    return {
        setLogin: (user) => dispatch({type: "SET_LOGIN", payload: user})
    }

}

export default connect(null, mapDispatchToProps)(Register);
