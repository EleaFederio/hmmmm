import cookie from 'js-cookie';
import React, { Component } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { axios } from './lib/axios';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                password: '',
                phoneNumber: '',
                auth: ''
            }
        }
    }


    handleForm = (e) => {
        e.preventDefault();

        const data = {phoneNumber: this.state.email, password: this.state.password}

        axios.defaults.withCredentials = true;
        axios.get("http://10.0.0.222:8000/sanctum/csrf-cookie").then(response => {
            axios.post('http://10.0.0.222:8000/api/customer_login', data)
            .then(res => {
                console.log(res.data);
                cookie.set('token', res.data.token);
                cookie.set('user_id', res.data.customer.id);
                // cookie.set('user', res.data.customer);
                this.props.setLogin(res.data.customer);
                this.props.history.push('/profile');
                
            })
            .catch(error => {
                // Password Error
                // error.response.data.errors.password 
                console.log(error.response.data.errors.password);

                this.setState({ errors: {password: error.response.data.errors.password } })

                console.log(error.response.data.errors)
            });
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
                                            <Form.Label>Phone Number</Form.Label>
                                            <Col>
                                                <Form.Control type={'text'} name={'email'} onChange={this.handleInput} placeholder={'Enter Email'} value={this.state.email} />
                                            </Col>
                                            <p>{this.state.errors.phoneNumber}</p>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Col>
                                                <Form.Control type={'password'} name={'password'} onChange={this.handleInput} placeholder={'Enter Password'} value={this.state.password} />
                                            </Col>
                                        </Form.Group>
                                        <Button variant={'primary'} className={'mt-2'} type={'submit'}>
                                            LOGIN
                                        </Button>
                                        <p className={'text-center mt-2'}>Create new account. <Link to={'/register'}>Register</Link></p>
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

export default connect(null, mapDispatchToProps)(Login);
