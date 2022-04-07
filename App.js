import "./App.css";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { ContentCards } from "./ContentCards";
import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Input from "@mui/material/Input";
function App() {
  //using usestate for total no of items in the cart
  const [items, setItems] = useState(0);
  const [search, setSearch] = useState("");

  //products
  const [card_data, setCard_data] = useState([]);

  const handleSearch = async () => {
    await fetch("https://ecommerce-scrapper-server.herokuapp.com/get-products", {
      method: "POST",
      body: JSON.stringify({
        searchString: search,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCard_data(data);
      });
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" id="brand">
            <h3>E-Commerce Scrapper</h3>
          </Navbar.Brand>

          <div className="cart">
            <Button variant="outlined" color="inherit">
              <ShoppingCartIcon /> Cart {items}
            </Button>
          </div>
        </Container>
      </Navbar>

      <div className="searchArea">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <Input
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Electronic Products"
            inputProps={"description"}
            onChange={(event) => setSearch(event.target.value)}
          />

          <IconButton
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <h6>Search terms related to Electronics Section</h6>
      </div>

      <div className="content">
        {/* mapping items to create individual cards + sending total cart items state as props */}
        {card_data.map((item) => (
          <ContentCards item={item} items={items} setItems={setItems} />
        ))}
      </div>
    </div>
  );
}

export default App;
