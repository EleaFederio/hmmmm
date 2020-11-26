import cookie from 'js-cookie';
import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = (props) => {

    const handleLogout = (e) => {
        e.preventDefault();
        cookie.remove("token");
        cookie.remove("user_id");
        props.logout();
    }

    return (
        <Fragment>
            <Container>
                <h1 className={'center-text'}>Profile</h1>
                <Link to={'/logout'} onClick={handleLogout} >Logout</Link>
            </Container>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({ type: 'SET_LOGOUT' })
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Profile)
