import { MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationPages.css";
import { nanoid } from "@reduxjs/toolkit";
import { changePage } from "../../store_Todo_Own";
import { useDispatch } from "react-redux";

const pages = [
  "Grocery",
  "Meat and Fish",
  "Vegetables and Fruits",
  "Dairy",
  "Desserts",
  "P/F",
  "Other goods",
];

export const NavigationPages = () => {
  const [page, setPage] = useState("");
  const dispatch = useDispatch();
  const handleCloseMainMenu = (event) => {
    setPage(event.target.innerHTML);
    dispatch(changePage(event.target.innerHTML));
    // console.log(event.target.innerHTML);
  };

  return (
    <nav className="nav-menu">
      <ul className="container nav-block fix-align-items">
        {pages.map((page) => {
          return (
            <div key={nanoid()}>
              <MenuItem key={page} onClick={handleCloseMainMenu}>
                <Typography textAlign="center">
                  <li className="nav-block__menu-item">
                    <Link className="nav-block__menu-item-link">{page}</Link>
                  </li>
                </Typography>
              </MenuItem>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};
//to={"/${page}"}
