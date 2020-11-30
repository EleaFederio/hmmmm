import React, { useEffect, useState } from 'react';
import { axios } from '../lib/axios';
import FoodCatalog from './FoodCatalog';
import "../design/HomeDesign.css";

 const Home = () => {


    const [foods, setFoods] = useState([]);

    const getFoods = async () => {
        const responce = await axios.get("/foods/").catch((error) => console.log("Error: ", error));
        // console.log("Console log Foods: ", responce.data)
        if (responce && responce.data.data){
            setFoods(responce.data.data);
        }
    }

    const noFoods = !foods || (foods && foods.length === 0);

    useEffect(() => {
        getFoods();
    }, [])


    console.log('noFoods : ' + noFoods);

    return(
      <div className={'container'}>
            <br/><br/>
          <h1>This is Home</h1>
          <div className={'row'}>
              {!noFoods && foods.map((food, index) => (
                  <FoodCatalog key={food.id} {...food}/>
                  
              ))}
          </div>
      </div>
    );
}


export default Home;