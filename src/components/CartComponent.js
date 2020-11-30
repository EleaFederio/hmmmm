import { Component, Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {axios} from '../lib/axios';
import {connect} from 'react-redux';
import CartItems from "./cartItems";

const CartComponent = (props) => {

    console.log('XXXXXXXXXXXXXXXXXXXXXX')
    const user_id = props.user.id;
    console.log();

    const [foods, setFoods] = useState([]);

    const getFoods = async () => {
        const responce = await axios.get("/users/"+user_id+"/cart").catch((error) => console.log("Error: ", error));
        // console.log("Console log Foods: ", responce.data.data)
        if (responce && responce.data.data){
            setFoods(responce.data.data);
        }
    }

    useEffect(() => {
        getFoods();
    }, [])
    
    return ( 
        <Fragment>
            <Container>
                <Card className={'mt-5'}>
                    <Card.Header>
                        <h3>Product List</h3>
                    </Card.Header>
                    <Card.Body>
                        {
                            foods.map((food) => {
                                return <CartItems food_id={food.food_id} user_id={food.user_id} quantity={food.quantity} id={food.id} />
                            })
                        }
                       {/* <CartItems food_id /> */}
                    </Card.Body>
                </Card>
            </Container>
        </Fragment>
     );
}

const mapStateToProps = (state) => {
    return {
        // loggedIn: state.auth.loggedIn,
        user: state.auth.user
    }
}
 
export default connect(mapStateToProps)(CartComponent);