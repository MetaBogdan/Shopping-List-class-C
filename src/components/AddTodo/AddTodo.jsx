import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  Container,
  Button,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material/";
import { Add, Close } from "@mui/icons-material";
import "./addTodo.css";
import { addTodo } from "../../store_Todo_Own";
import { nanoid } from "@reduxjs/toolkit";
//import { SelectChangeEvent } from "@mui/material/Select";
import {
  amountList,
  priceList,
  weightList,
} from "../../categories/categories-options/options.js";

import { groceryList } from "../../categories/categories-products/grocery";
import { milkyList } from "../../categories/categories-products/milky";
import { vegFruitsList } from "../../categories/categories-products/vegfruits";
import { dessertList } from "../../categories/categories-products/dessert";
import { customList } from "../../categories/categories-products/custom";
import { semiFinishedList } from "../../categories/categories-products/semifinished";
import { meatFishList } from "../../categories/categories-products/meatfish";

export const AddTodo = () => {
  const [text, setText] = useState("");
  const [weighttext, setWeighttext] = useState("");
  const [amounttext, setAmounttext] = useState("");
  const [pricetext, setPricetext] = useState("");
  const [flagShowSelector, setflagShowSelector] = useState(true);
  const [textSelectorTodo, setTextSelectorTodo] = useState("");

  const dispatch = useDispatch();

  const page = useSelector((state) => {
    return state.pages;
  });

  const data = getDataForToDoSelector(page);
  const pageImage = getPageImageSelector(page);
  //console.log(pageImage);
  useEffect(() => {
    //pageImage = getPageImageSelector(page);
    setTextSelectorTodo("");
    if (page === "Other goods") {
      setflagShowSelector(false);
    } else {
      setflagShowSelector(true);
    }
  }, [page]);

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleChangeWeightTextSelector = (event) => {
    setWeighttext(event.target.value);
  };

  const handleChangeAmountTextSelector = (event) => {
    setAmounttext(event.target.value);
  };
  const handleChangePriceTextSelector = (event) => {
    setPricetext(event.target.value);
  };

  const handleChangeTextSelectorTodo = (event) => {
    setTextSelectorTodo(event.target.value);
    console.log(event);
  };

  const createTodo = (e) => {
    e.preventDefault();
    let textTodo;
    if (page === "Other goods") {
      textTodo = text;
    } else {
      textTodo = textSelectorTodo;
    }

    const todo = {
      id: nanoid(),
      text: textTodo,
      completed: false,
      weight: weighttext,
      amount: amounttext,
      price: pricetext,
    };
    dispatch(addTodo(todo));

    setText("");
    setWeighttext("");
    setAmounttext("");
    setPricetext("");
    setTextSelectorTodo("");
  };

  return (
    <div>
      <Container maxWidth="sm">
        <form className="add_todo">
          <FormControl fullWidth={true}>
            <Button variant="close">
              <Close />
            </Button>
            <Typography gutterBottom variant="h5" component="div">
              {page}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <img
                  src={pageImage}
                  height="100px"
                  weight="100px"
                  alt={page}
                ></img>
              </Grid>

              {!flagShowSelector && (
                <Grid item xs={2}>
                  <TextField
                    label="I will do this"
                    variant="standard"
                    onChange={handleChangeText}
                    required={true}
                    value={text}
                  />{" "}
                </Grid>
              )}
              {flagShowSelector && (
                <Grid item xs={4}>
                  <FormControl sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      {page}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={textSelectorTodo}
                      onChange={handleChangeTextSelectorTodo}
                      autoWidth
                      label={page}
                      defaultValue="choose"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>

                      {data.map((value) => (
                        <MenuItem key={value.id} value={value.label}>
                          {value.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              )}
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    {"Weight"}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={weighttext}
                    onChange={handleChangeWeightTextSelector}
                    autoWidth
                    label={weighttext}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>

                    {weightList.map((value) => (
                      <MenuItem key={value.id} value={value.item}>
                        {value.item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    {"Amount"}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={amounttext}
                    onChange={handleChangeAmountTextSelector}
                    autoWidth
                    label={amounttext}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>

                    {amountList.map((value) => (
                      <MenuItem key={value.id} value={value.item}>
                        {value.item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    {"Price"}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={pricetext}
                    onChange={handleChangePriceTextSelector}
                    autoWidth
                    label={pricetext}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>

                    {priceList.map((value) => (
                      <MenuItem key={value.id} value={value.item}>
                        {value.item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <img
                  src={pageImage}
                  height="100px"
                  weight="100px"
                  alt={page}
                ></img>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 5 }}
              onClick={createTodo}
            >
              <Add />
              Add
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

function getDataForToDoSelector(type) {
  let data;
  switch (type) {
    case "Grocery":
      data = groceryList.products;
      break;
    case "Meat and Fish":
      data = meatFishList.products;
      break;
    case "Vegetables and Fruits":
      data = vegFruitsList.products;
      break;
    case "Dairy":
      data = milkyList.products;
      break;
    case "Desserts":
      data = dessertList.products;
      break;
    case "P/F":
      data = semiFinishedList.products;
      break;

    default:
      data = [];
      break;
  }
  return data;
}

function getPageImageSelector(type) {
  let image;
  switch (type) {
    case "Grocery":
      image = groceryList.image;
      break;
    case "Meat and Fish":
      image = meatFishList.image;
      break;
    case "Vegetables and Fruits":
      image = vegFruitsList.image;
      break;
    case "Dairy":
      image = milkyList.image;
      break;
    case "Desserts":
      image = dessertList.image;
      break;
    case "P/F":
      image = semiFinishedList.image;
      break;
    case "Other goods":
      image = customList.image;
      break;
    default:
      image = "";
      break;
  }
  return image;
}

export default AddTodo;
