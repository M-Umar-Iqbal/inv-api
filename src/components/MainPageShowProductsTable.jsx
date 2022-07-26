import React, { useState } from "react";
import { useEffect } from "react";
import AddProduct from "./MainPageAddProduct";
import Header from "./Header";
import Indicator from "./Indicator";
import ProductDetail from "./Product";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Chip, FormControlLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/AddBox";
import { Container } from "@mui/system";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
// import Footer from "./Footer";
import LinearProgress from '@mui/material/LinearProgress';

import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Button,
} from "@mui/material";
import axios from "axios";

function MainPageShowProducts(props) {


  const [Stores, setStores] = useState(null);

    useEffect(() => {
        document.title = "Inventory | Products";
    });

    const location = useLocation();
    const id = location.state;

    console.log(id);
    useEffect(() => {
        getAll();
      }, []);
    
      function getAll() {
        axios
          .get(
            `https://product-store-v1.herokuapp.com/get-products-by-store-id/${id}`
          )
          .then((response) => {
            // setStores(response.data.payload.data)
            console.log(response.data.payload.data);
            setStores(response.data.payload.data);
          });
      }

    return (
        <div>
            <Header />

            <Indicator indicator="PRODUCTS"/>

            <Routes>
                <Route path="/Addproduct" element={<AddProduct />} />
                <Route path="//ProductDetail" element={<ProductDetail />} />
            </Routes>

            <Container
                fixed
                maxWidth="lg"
                style={{ marginTop: "50px", marginBottom: "50px" }}
            >
        
                <Link
                                        to="/Addproduct"
                                        state={id}
                                        style={{
                                            textDecoration: "none",
                                            color: "#E4DCCF",

                                        }}
                                    >
                   <Button style={{
                            backgroundColor: "#222f3e",
                            padding: "10px",
                            borderRadius: "10px",
          }}
          variant="contained"
          >Add New Product </Button>
          <br/>
                    
                </Link>
          <br/>
                
                
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead style={{backgroundColor:"#222f3e"}}>

                            <TableRow>
                                <TableCell style={{color:"#FFFFFF"}}>Product Name</TableCell>
                                <TableCell style={{color:"#FFFFFF"}}> Product Price</TableCell>
                                <TableCell style={{color:"#FFFFFF"}}>Product Quantity</TableCell>
                                <TableCell style={{color:"#FFFFFF"}}>Product Category</TableCell>
                            
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
                        {Stores ? (
        Stores.map((item, index) => (
        
        
                <TableRow key={index}>  
                <TableCell>{item.name}</TableCell>
                                <TableCell>Rs {item.price}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.category}</TableCell>
                            </TableRow>
            
         
        ))
      ) : (
                                    <TableRow>
                                        <TableCell colSpan={4}>
                                        <div style={{ padding: "20px" }}><b>Loading Data From API ... </b>
                                            </div>
                                            <div style={{ padding: "20px" }}><Box sx={{ width: '100%' }}>
                                              <LinearProgress color="inherit"/>
                                                                                </Box>
                                        </div>
                                        
                                              
                                                                            
                                        
                                                                           
                                        </TableCell>
                                   </TableRow>
      
      )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

         

            {/* <Footer /> */}
            
        </div>
    );
}

export default MainPageShowProducts;
