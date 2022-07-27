import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import axios from "axios";
import ArrowForwardIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import AddShop from "./MainPageAddShop";
import Header from "./Header";
import Showproducts from "./MainPageShowProductsTable";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Papercomponent from "./ShowShopTable";
import Splash from "./Splash";
import Footer from "./Footer";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  FormControlLabel,
} from "@mui/material";

import { Link, Routes, Route } from "react-router-dom";

import { Container } from "@mui/system";
import Indicator from "./Indicator";

import { useEffect, useState } from "react";

function ShopAddToHome(props) {
  const [Stores, setStores] = useState(null);

  useEffect(() => {
    document.title = "Inventory | Shops";
  });

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios
      .get("https://product-store-v1.herokuapp.com/get-all-stores")
      .then((response) => {
        // setStores(response.data.payload.data);
        console.log(response.data.payload.data);
        setStores(response.data.payload.data);
      });
  }

  return (
    <div>
      <Header />
      <Indicator indicator="SHOPS" />

      <Routes>
        <Route path="/AddShop" element={<AddShop />} />
        <Route path="/showproducts" element={<Showproducts />} />
      </Routes>

      <Container
        fixed
        maxWidth="lg"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Link
          to="/AddShop"
          style={{
            textDecoration: "none",
            color: "#E4DCCF",
          }}
        >
          <Button
            style={{
              backgroundColor: "#222f3e",
              padding: "10px",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            Add New Shop
          </Button>
          <br />
        </Link>
        <br />
        {Stores < 5 ? (
          <TableContainer
            component={Paper}
            // style={{ maxHeight: "570px", overflowY: "auto" }}
          >
            <Table
              aria-label="simple table"
              style={{ border: "3px solid #222f3e" }}
            >
              <TableHead style={{ backgroundColor: "#222f3e" }}>
                <TableRow>
                  <TableCell style={{ color: "#FFFFFF" }}>
                    <b>Shop Name</b>
                  </TableCell>
                  <TableCell style={{ color: "#FFFFFF" }}>
                    <b>Categories</b>
                  </TableCell>
                  <TableCell style={{ color: "#FFFFFF" }} align="center">
                    <b>Explore</b>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {Stores ? (
                  Stores.map((item, index) => (
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.categories.join(", ")}</TableCell>
                      <TableCell align="center">
                        <Link
                          to="/showproducts"
                          state={item._id}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          <Button
                            style={{
                              backgroundColor: "#222f3e",
                              padding: "10px",
                              borderRadius: "10px",
                            }}
                            variant="contained"
                            size="small"
                          >
                            Explore
                            <ArrowForwardIcon style={{ marginLeft: "5px" }} />
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4}>
                      <div style={{ padding: "20px" }}>
                        <b>Please Wait! </b>
                        <p> Loading Data From API ...</p>
                      </div>
                      <div style={{ padding: "20px" }}>
                        <Box sx={{ width: "100%" }}>
                          <LinearProgress color="inherit" />
                        </Box>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Papercomponent />
        )}
      </Container>

      <Footer />
    </div>
  );
}

export default ShopAddToHome;
