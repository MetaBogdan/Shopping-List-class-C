import { MenuItem } from "@mui/material";
import React from "react";
import { changePage } from "../../store_Todo_Own";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const NavStyleMenu = styled.nav`
  .nav-menu {
    background-color: #0e3dab;
  }

  .nav-block {
    padding: 0;
    list-style: none;
    display: flex;
    min-height: 72px;
    align-items: center;
    justify-content: space-between;
  }
  /* My workaround*/
  /* .fix-align-items:after{
  content:'';
  min-height:inherit;
  font-size:0;
} */

  .nav-block__menu-item {
    border-width: 0;
    text-align: center;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-block__menu-item-link {
    flex: 1;
    border-width: 0;
    border-right: 1px solid transparent;
    border-image: linear-gradient(
      to bottom,
      transparent 10%,
      #1d81f9,
      transparent 90%
    );
    border-image-slice: 1;
    color: #fff;
    display: block;
    text-decoration: none;
    font-size: 21px;
  }
`;

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
  const handleCloseMainMenu = (page: string) => {
    dispatch(changePage(page));
  };

  return (
    <NavStyleMenu>
      <nav className="nav-menu">
        <ul className="container nav-block fix-align-items">
          {pages.map((page) => {
            return (
              <MenuItem
                key={page}
                className="nav-block__menu-item-link"
                onClick={() => handleCloseMainMenu(page)}
              >
                {page}
              </MenuItem>
            );
          })}
        </ul>
      </nav>
    </NavStyleMenu>
  );
};
