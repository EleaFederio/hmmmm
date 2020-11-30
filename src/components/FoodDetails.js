// import fontawesome from 'fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux';
import React, { useEffect, useState } from "react";
import { axios } from "../lib/axios";

library.add(faShoppingCart)

function FoodDetail({match}){

    useEffect(() => {
        getFoodDetails();
        // console.log("Match: " + match.params.id);
    }, []);

    const [foodDetails, setFoodDetails] = useState([]);
    

    // console.log("Foods: ", foodDetails)

    const getFoodDetails = async () => {
    console.log(match.params);
        axios.defaults.withCredentials = true;
        const responce = await axios.get("/foods/"+match.params.id).catch((error) => console.log("Error: ", error));
        console.log("Console log Foods: ", responce)
        if (responce && responce.data.data){
            setFoodDetails(responce.data.data);
        }
    }

    // addToCartAction = (e) => {
    //     e.preventDefault();
    //     const data = {
    //         firstName: this.state.firstname,
    //         lastName: this.state.lastname,
    //         phoneNumber: this.state.email, 
    //         password: this.state.password,
    //         password_confirmation: this.state.confirm_password,
    //         deviceId: 'yeah'
    //     }

    //     axios.defaults.withCredentials = true;
    //     axios.get("http://10.0.0.222:8000/sanctum/csrf-cookie").then(response => {
    //         axios.post('http://10.0.0.222:8000/api/customer_register', data)
    //         .then(res => {
    //             console.log(res.data);
    //             // cookie.set('user', res.data.customer);
    //             this.props.setLogin(res.data.customer);
    //             this.props.history.push('/profile');
                
    //         })
    //     })
    // }

    return(
      <div className={'container'}>
          <br/><br/><br/>
          <div className={'text-center'}>
              <h5>Food Details</h5>
          </div>
          <br/>
          <div className={'row'}>
              <div className={'col-md-5'}>
                <img src={'https://cdn.phonebooky.com/blog/wp-content/uploads/2019/05/21132504/Brown-Sugar.jpg'} alt={match.params.name} className={'w-100'}/>
              </div>
              <div className={'col-md-7 text-left'}>
                  <h2>{foodDetails.name}</h2>
                  <h6><span className="badge badge-info">{foodDetails.category}</span></h6>
                  <br/>
                  <h2>₱{foodDetails.price}</h2>
                  <br/>
                  <h6>Seller: <b>{foodDetails.seller}</b></h6>

                  <br/>
                  <h6>Details: </h6>
                  <p>{foodDetails.detail}</p>

              {/*    Add to cart and buy button*/}
                  <div className={'row justify-content-around'}>
                      <div className={'col-md-6 mb-3'}>
                          <a href={'#'} className={'btn btn btn-cart-details'}><FontAwesomeIcon icon={'shopping-cart'}/> Add to Cart</a>
                      </div>
                      <div className={'col-md-6'}>
                          <a href={'#'} className={'btn btn btn-buy-details'}>Buy Now</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        prop: state.auth.user
    }
}

export default  connect(mapStateToProps)(FoodDetail);