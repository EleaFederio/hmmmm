import React, { Fragment } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Layout(props) {
    return (
        <Fragment>
            <Navbar bg={'dark'} variant={'dark'}>
                <Navbar.Brand as={Link} to={'/'}>
                    <h4>FudMo</h4>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">

                {
                    !props.loggedIn ?    <Fragment>
                                            <Link to="/login">
                                                <Button size={'sm'}>
                                                    <span>LOGIN</span>
                                                </Button>
                                            </Link>
                                            <Link to="/register">
                                                <Button  className={'ml-2'} size={'sm'}>
                                                    <span>REGISTER</span>
                                                </Button>
                                            </Link>
                                        </Fragment>: 
                                        <Fragment>
                                            <Nav.Link as={Link} to={'/cart'}>Cart</Nav.Link>
                                            <Nav.Link as={Link} to={'/profile'}>Account</Nav.Link>
                                        </Fragment>
                }

                    {/* <Nav.Link as={Link}>Cart</Nav.Link> */}
                    {/* <Nav.Link as={Link} to={'/profile'}>Account</Nav.Link> */}
                    
                </Navbar.Collapse>
            </Navbar>
            {/* {props.children} */}
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(Layout)