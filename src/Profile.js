import cookie from 'js-cookie';
import React from 'react';
import { connect } from 'react-redux';
import store from './store';

const Profile = (props) => {

    console.log('XXXXXXXXXXXXXXXXXXX')
    const auth = store.getState('user');
    console.log(auth.loggedIn);

    const handleLogout = (e) => {
        e.preventDefault();
        cookie.remove("token");
        cookie.remove("user_id");
        props.logout();
    }

    // return (
    //     <Fragment>
    //         <Container>
    //             <h1 className={'center-text'}>Profile</h1>
    //             <Link to={'/logout'} onClick={handleLogout} >Logout</Link>
    //         </Container>
    //     </Fragment>
    // )


    return(
        <div className={'container'}>

            <br/><br/><br/>
            <div>
                <h3>My Profile</h3>
            </div>

            <div className={'main-body'}>

                <div className={'row gutter-sm'}>
                    <div className={'col-md-4 mb-3'}>
                        <div className={'card'}>
                            <div className={'card-body'}>
                                <div className={'d-flex flex-column align-items-center text-center'}>
                                    <img src={'https://bootdey.com/img/Content/avatar/avatar7.png'} alt={'Admin'} className={'rounded-circle'} width={'150'} />
                                    <div className={'mt-3'}>
                                        <h4>{props.user.firstName} {props.user.lastName}</h4>
                                        <p className="text-secondary mb-1">{props.user.phoneNumber}</p>
                                        <p className="text-muted font-size-sm">{ props.user.address === null ? 'User address not define' : props.user.address }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>

                        <div className={'card'}>
                            <div className={'card-body'}>
                                <div className={'d-flex flex-column align-items-center text-center'}>
                                    < div className={'btn btn-danger btn-sm'} onClick={handleLogout}>
                                        Logout
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={'col-md-8'}>
                        <div className={'card mb-3'}>
                            <div className={'card-body'}>
                                <div className={'row'}>
                                    <div className={'col-sm-5'}>
                                        <h6 className={'mb-0'}>{props.user.firstName} {props.user.lastName}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );


}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
        user: state.auth.user
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({ type: 'SET_LOGOUT' })
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Profile)
