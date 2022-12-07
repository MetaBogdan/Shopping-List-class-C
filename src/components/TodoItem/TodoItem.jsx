import React from "react";
import { useDispatch } from "react-redux";
//import { ITask } from "../../Interfaces";
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

const TodoItem = ({
  todo: { id, completed, text, weight, amount, price, img },
}) => {
  const dispatch = useDispatch();

  const handlerDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <ol key={id}>
      <Container>
        <Card
          className="root"
          variant="outlined"
          style={{
            marginTop: 25,
            background: "#f6f6fa",
            textalign: "Center",
          }}
        >
          <CardContent>
            <Typography variant="h6" component="h6">
              <Checkbox
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTodo(id))}
                color="success"
              />
              <img src={img} height="50px" weight="50px" alt={img} />
              {text + " " + weight + " " + amount + " " + price}
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => {
                  handlerDelete(id, text);
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
  );
};

export default TodoItem;
