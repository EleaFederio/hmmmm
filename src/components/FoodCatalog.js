import React from "react";
import { Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import StarRating from 'react-bootstrap-star-rating';


const FoodCatalog = (foods) => {

    console.log(foods)

    return(
        // <div className={'col-lg-3 col-md-4 col-sm-6 col-xs-1 product-grid'}  onDoubleClick={e => console.log("Clicked")}>
        <div className={'col-lg-3 col-md-4 col-sm-6 col-xs-1 product-grid'}  onDoubleClick={e => window.location.href='/food/detail/'+foods.id}>
            <div className={'image'}>
                <div>
                    <img src={'https://cdn.phonebooky.com/blog/wp-content/uploads/2019/05/21132504/Brown-Sugar.jpg'} alt={foods.name} className={'w-100'}/>
                    <div className={'overlay'}>
                        <div className={'detail'}><p>Double Click to view Details</p></div>
                    </div>
                </div>
            </div>
            {/* <StarRating 
                defaultValue={5}
                min={0}
                max={10}
                step={0.5}
            /> */}
            <h4 className={'text-center'}>{foods.name}</h4>
            <p className={'description-style'}><i>{foods.detail}</i></p>
            <h5 className={'text-center price-style'}>Price: ₱{foods.price}</h5>
            <div className={'row justify-content-around'}>
                {/* <Button as={Link} size={'sm'} >Add to Cart</Button>
                <Button as={Link} size={'sm'} >Buy</Button> */}

                <a href={'#'} className={'btn btn-sm btn-buy'}>Add to Cart</a>
                <a href={'#'} className={'btn btn-sm btn-cart'}>Buy Now</a>
            </div>
        </div>
    )
}

export default FoodCatalog;