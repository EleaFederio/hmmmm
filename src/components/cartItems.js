import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {axios} from '../lib/axios';

const CartItems = (props) => {

    const [foods, setFoods] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const getFoods = async () => {
        const responce = await axios.get("/foods/"+props.food_id).catch((error) => console.log("Error: ", error));
        // console.log("Console log Foods: ", responce.data)
        if (responce && responce.data.data){
            setFoods(responce.data.data);
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        console.log(quantity <= 1);
        if(quantity <= 1){
            setQuantity(quantity = 1)
        }else{
            setQuantity(quantity - 1)
        }
    }

    useEffect(() => {
        getFoods();
    }, [])

    return (
        <Row>
            <Col lg={3} xs={3} md={3} xs={3}><img src={'https://cdn.phonebooky.com/blog/wp-content/uploads/2019/05/21132504/Brown-Sugar.jpg'}  className={'w-100 mb-2'}/></Col>
            <Col lg={6} xs={6} md={6} xs={4}>
            <h6>{foods.name}</h6>
            <h5>₱ {foods.price}</h5>
            <p><b>Category: </b>{foods.category}</p>
            </Col>
            <Col lg={3} xs={3} md={3} xs={4}>
                
                <div style={{width: '90px'}}>
                    <h6>Quantity</h6>
                    <button style={{width: '25px', height: '30px', borderRadius: 0}} size={'sm'} onClick={decreaseQuantity}>-</button>
                    <input type={'text'} style={{width: '30px', height: '30px', borderRadius: 0}}   value={quantity}></input>
                    <button style={{width: '25px', height: '30px', borderRadius: 0}} size={'sm'} onClick={increaseQuantity}>+</button>
                </div>
                
            </Col>
        </Row>
    )
}

export default CartItems;