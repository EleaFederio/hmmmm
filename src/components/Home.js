import React, { useEffect, useState } from 'react';
import { axios } from '../lib/axios';
import FoodCatalog from './FoodCatalog';

export default function Home() {


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


    return(
      <div className={'container'}>
            <br/><br/>
          <h1>This is Home</h1>
          <div className={'row'}>
              {!noFoods && foods.map((foods, index) => (
                  <FoodCatalog key={foods.id} {...foods}/>
              ))}
          </div>
      </div>
    );
}
