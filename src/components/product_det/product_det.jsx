import { Rating } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import "./product_det.css";
import { Grid } from "@mui/material";
import SliderCard from '../sliderCard/sliderCard';

export default function ProductDet({productData}) {
  const [card , setCard] = React.useState([]);

    useEffect (() => {
        fakeStore();
    }, []);

    const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    //console.log(response);
    const jsonData = await response.json();
    //console.log(jsonData);
    setCard(jsonData);
    console.log(card);
  }

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.1
        }}
    />
);

  return (
    <div className="product_det">
    
        <div className="productDescription"> 
            <div classname ="about"><h1>About</h1> </div>
            <div className="desText">
                <p>{productData.description}</p>
            </div>
            <ColoredLine color="grey" />
        </div>

        <div className= "productRR">
            <div className="productRate">
              <h1 className="price"><span className='dollar'>$ </span>{productData.price}</h1>
            </div>
        </div>

        <div className="productRating">
          <Rating name="read-only" value={4} readOnly />
          </div>


          <div className="productDescription"> 
            <div classname ="about"><h1>Similar Products</h1> </div>
            <ColoredLine color="grey" />
        </div>

          <div className="slide-card">
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {card.map((value)=>{
                return (
                  <Grid item xs={3}>
                    <SliderCard
                      values = {value}
                      productCat = {productData.category}
                      curCat = {value.category}
                    />
                  </Grid>
            );
          })}
      </Grid>
        </div>
        

    </div>
  )
}
