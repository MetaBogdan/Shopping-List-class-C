import { MenuItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./NavigationPages.css";

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
  const dispatch = useDispatch();
  const handleCloseMainMenu = (page) => {
    dispatch(changePage(page));
  };

  return (
    <nav className="nav-menu">
      <ul className="container nav-block fix-align-items">
        {pages.map((page) => {
          return (
            <MenuItem key={page} onClick={() => handleCloseMainMenu(page)}>
              <Typography textAlign="center">
                <Link className="nav-block__menu-item-link">{page}</Link>
              </Typography>
            </MenuItem>
          );
        })}
      </ul>
    </nav>
  );
};
