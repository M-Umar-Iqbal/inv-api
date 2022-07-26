import React, { useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


import {
  Collapse,
  Alert,
  Autocomplete,
  Switch,
  FormControlLabel,
} from '@mui/material';

import { Container, TextField, Button } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';

export default function Products() {
  
  const [productname, setproductname] = useState(''); //Use State For product name
  const [productprice, setproductprice] = useState(0); //Use State For product price
  const [productquantity, setproductquantity] = useState(0); //
  
  const [Stores, setStores] = useState(null);
 
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [categoryValue, setCategoryValue] = useState('');
  

 

  const location = useLocation();
  const Id = location.state;

  console.log(Id);

    function tagsonly() {
    axios
      .get(
        `https://product-store-v1.herokuapp.com/get-store-by-id/${Id}`
      )
      .then((response) => {
        // setStores(response.data.payload.data)
        console.log(response.data.payload.data.categories);
        setStores(response.data.payload.data.categories);
       
        

      });

    
      
  }
  useEffect(() => {
    tagsonly();
  
  }, []);

  const newproduct = {
    
    name: productname,
    quantity: productquantity,
    price: productprice,
    category: categoryValue,
   
    
   
  };

  function postProduct() {
    axios
      .post(`https://product-store-v1.herokuapp.com/add-product/${Id}`, newproduct)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  function AddProduct() {
    const Name = document.getElementById('name').value;
    setproductname(Name);
    const Price = document.getElementById('price').value;
    setproductprice(Price);
    const Quantity = document.getElementById('quantity').value;
    setproductquantity(Quantity);

  

    setproductname('');
    document.getElementById('name').value = '';
    setproductprice('');
    document.getElementById('price').value = '';
    setproductquantity('');
    document.getElementById('quantity').value = '';

 
    setOpen(true);
    postProduct();
    setTimeout(function () {
      navigate('/showproducts', { state: Id });
    }, 1000);

    
  }

  function validPriceCheck(e) {
    setproductprice(e);
    const value = document.getElementById('price').value;
    if (value <= 0) {
      document.getElementById('priceWarn').innerHTML =
        '* Price must be Greater Than 0';
    } else {
      document.getElementById('priceWarn').innerHTML = '';
    }
  }
  
  function validQuantityCheck(e) {
    setproductquantity(e);
    const value = document.getElementById('quantity').value;
    if (value <= 0) {
      document.getElementById('quantityWarn').innerHTML =
        '* Quantity must me greater than 0';
    } else {
      document.getElementById('quantityWarn').innerHTML = '';
    }
  }
  let t;
  
          
  Stores ? (t = Stores) : (t = ["No Category"]);

  return (
    <div>
      <Header />
      <Collapse in={open}>
        <div style={{ padding: '20px' }}>
          <Alert severity="success">Product Added Successfully! </Alert>
        </div>
      </Collapse>
      <Container
        fixed
        maxWidth="md"
        style={{
          marginTop: '50px',
          marginBottom: '40px',
          paddingTop: '10px',
          boxShadow: '10px 10px 30px 5px rgb(0,0,0,0.2)',
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            fontFamily: 'calbari',
            marginBottom: '30px',
            marginLeft: '10px',
            paddingTop: '30px',
          }}
        >
          <h1 style={{ color: '#252628', display: 'inline' ,fontFamily:"sans-serif"}}>
            Add your Product
          </h1>
        </div>

        <div style={{ margin: '10px', padding: '10px' }}>
          <TextField
            type="text"
            variant="outlined"
            autoComplete="off"
            label="Product Name"
            onChange={(e) => setproductname(e.target.value)}
            fullWidth
            id="name"
          />
        </div>
        <div style={{ margin: '10px', padding: '10px' }}>
          <TextField
            autoComplete="off"
            type="number"
            label="Price"
            InputProps={{
              inputProps: {
                min: 0,
              },
            }}
            onChange={(e) => validPriceCheck(e.target.value)}
            fullWidth
            id="price"
          />
          <div
            style={{
              color: 'red',
              fontWeight: 'bold',
              marginTop: '10px',
              fontSize: '10px',
            }}
            id="priceWarn"
          ></div>
        </div>
        <div style={{ margin: '10px', padding: '10px' }}>
          <TextField
            type="number"
            InputProps={{
              inputProps: {
                max: 1000,
                min: 0,
              },
            }}
            autoComplete="off"
            variant="outlined"
            label="Quantity"
            onChange={(e) => validQuantityCheck(e.target.value)}
            fullWidth
            id="quantity"
          />
          <div
            style={{
              color: 'red',
              fontWeight: 'bold',
              marginTop: '10px',
              fontSize: '10px',
            }}
            id="quantityWarn"
          ></div>
        </div>

   
         <div style={{ margin: '10px', padding: '10px' }}>
         <Autocomplete
           fullWidth
           onChange={(event, newValue) => {
             setCategoryValue(newValue);
           }}
           value={categoryValue}
           id="combo-box-demo"
           options={t}
           renderInput={(params) => (
             <TextField {...params} label="Categories" />
           )}
         />
       </div>
     


     
        <div
          style={{
            margin: '10px',
            padding: '20px',
          }}
        >
          <Button
            style={{
              padding: '15px',
              fontWeight: 'bold',
              fontSize: '15px',
              backgroundColor: '#222f3e',
            }}
            variant="contained"
            fullWidth
            onClick={AddProduct}
            disabled={
              !productname ||
              (!productname &&
                !categoryValue &&
                !productprice &&
                !productquantity) ||
              !categoryValue ||
              !productprice ||
              !productquantity ||
              productprice <= 0 ||
              productquantity <= 0
            }
          >
            Add Product
          </Button>
        </div>
      </Container>
    </div>
  );
}
