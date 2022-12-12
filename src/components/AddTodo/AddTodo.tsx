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
import { addTodo } from "../../store_Todo_Own";
import { nanoid } from "@reduxjs/toolkit";

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
import styled from "styled-components";

const StyledItem = styled.div`
   {
    .selector_field {
      max-width: 20em;
      margin: 0.05em 0.3em 0.3em 0.3em;
      padding-top: 0.3em;
      background-color: #ffffff;
      border-radius: 0.5em;
    }
    img_item_add_main {
      height: 80px;
      weight: 80px;
    }
    .img_item_add {
      height: 50px;
      weight: 50px;
    }
  }
`;

export const AddTodo = () => {
  const [text, setText] = useState("");
  const [weightText, setWeighttext] = useState("");
  const [amountText, setAmounttext] = useState("");
  const [priceText, setPricetext] = useState("");
  const [imgText, setImgtext] = useState("");
  const [isElImgAvaliable, setIsElImgAvaliable] = useState(false);
  const [flagShowSelector, setflagShowSelector] = useState(true);
  const [textSelectorTodo, setTextSelectorTodo] = useState("");
  const dispatch = useDispatch();

  const page = useSelector((state: any) => {
    return state.pages;
  });

  const data = getDataForToDoSelector(page);
  const pageImage = getPageImageSelector(page);

  useEffect(() => {
    setTextSelectorTodo("");
    if (page === "Other goods") {
      setflagShowSelector(false);
    } else {
      setflagShowSelector(true);
    }
    setIsElImgAvaliable(false);
  }, [page]);

  const handleChangeText = (event: React.BaseSyntheticEvent) => {
    setText(event.target.value);
  };

  const handleChangeWeightTextSelector = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setWeighttext(event.target.value);
  };

  const handleChangeAmountTextSelector = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAmounttext(event.target.value);
  };
  const handleChangePriceTextSelector = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPricetext(event.target.value);
  };

  const handleChangeTextSelectorTodo = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextSelectorTodo(event.target.value);

    let objectEl = data.find((el) => el.label === event.target.value);

    if (objectEl) {
      let elImg = objectEl.img;
      if (elImg === "") {
        setIsElImgAvaliable(false);
      } else {
        setIsElImgAvaliable(true);
      }
      setImgtext(elImg);
    }
  };

  const createTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let textTodo;
    if (page === "Other goods") {
      textTodo = text;
    } else {
      textTodo = textSelectorTodo;
    }

    if (textTodo) {
      const todo = {
        id: nanoid(),
        text: textTodo,
        completed: false,
        weight: weightText,
        amount: amountText,
        price: priceText,
        img: imgText,
      };
      dispatch(addTodo(todo));
    }
    setText("");
    setWeighttext("");
    setAmounttext("");
    setPricetext("");
    setTextSelectorTodo("");
    setImgtext("");
    setIsElImgAvaliable(false);
  };

  return (
    <StyledItem>
      <Container maxWidth="sm">
        <form className="add_todo">
          <FormControl fullWidth={true}>
            <Close />
            <Typography gutterBottom variant="h5" component="div">
              {page}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <img
                  src={pageImage}
                  className="img_item_add_main"
                  alt={page}
                ></img>
              </Grid>

              {!flagShowSelector && (
                <Grid item xs={8}>
                  <TextField
                    label="I will do this"
                    variant="standard"
                    onChange={handleChangeText}
                    value={text}
                  />
                </Grid>
              )}
              {flagShowSelector && (
                <Grid item xs={4}>
                  <FormControl sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel>{page}</InputLabel>
                    <Select
                      value={textSelectorTodo}
                      onChange={handleChangeTextSelectorTodo}
                      autoWidth
                      label={page}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>

                      {data.map((value: any) => (
                        <MenuItem
                          key={value.id}
                          value={value.label}
                          id={value.id}
                        >
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
                  <InputLabel>Weight</InputLabel>
                  <Select
                    value={weightText}
                    onChange={handleChangeWeightTextSelector}
                    autoWidth
                    label={weightText}
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
                  <InputLabel>Amount</InputLabel>
                  <Select
                    value={amountText}
                    onChange={handleChangeAmountTextSelector}
                    autoWidth
                    label={amountText}
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
                  <InputLabel>Price</InputLabel>
                  <Select
                    value={priceText}
                    onChange={handleChangePriceTextSelector}
                    autoWidth
                    label={priceText}
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
                {isElImgAvaliable && (
                  <img src={imgText} className="img_item_add" alt={page}></img>
                )}
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
    </StyledItem>
  );
};

function getDataForToDoSelector(type: any) {
  let data: { id: number; label: string; img: string }[];
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

function getPageImageSelector(type: string) {
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
/*   <Button variant="close">
              <Close />
            </Button> */
