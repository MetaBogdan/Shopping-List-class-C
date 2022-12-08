import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  Checkbox,
  Container,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { removeTodo, toggleTodo } from "../../store_Todo_Own";
import styled from "styled-components";
import { TodosProps } from "../../Interfaces";

export const ItemStyle = styled.div`
   {
    .card_item_style {
      margin-top: 25px;
      background: #f6f6fa;
    }
    .img_item {
      height: 50px;
      weight: 50px;
    }
  }
`;

const TodoItem: React.FC<TodosProps> = ({
  todo: { id, completed, text, weight, amount, price, img },
}) => {
  const dispatch = useDispatch();

  const handlerDelete = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <ItemStyle>
      <ol key={id}>
        <Container>
          <Card className="card_item_style" variant="outlined">
            <CardContent>
              <Typography variant="h6" component="h6">
                <Checkbox
                  checked={completed}
                  onChange={() => dispatch(toggleTodo(id))}
                  color="success"
                />
                <img src={img} className="img_item" alt={img} />
                {text + " " + weight + " " + amount + " " + price}
                <IconButton
                  className="icon_delete"
                  aria-label="delete"
                  size="large"
                  onClick={() => {
                    handlerDelete(id);
                  }}
                  color="error"
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </ol>
    </ItemStyle>
  );
};

export default TodoItem;
