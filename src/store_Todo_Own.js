import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState_todo = [
  {
    id: nanoid(),
    text: "Test 1",
    completed: false,
    img: "",
    weight: "200 гр",
    amount: "20 шт",
    price: "200 usd",
  },
  {
    id: nanoid(),
    text: "Test 2",
    completed: false,
    img: "",
    weight: "100 гр",
    amount: "10 шт",
    price: "100 usd",
  },
];

export const sliceTodo = createSlice({
  name: "@@todos",
  initialState: initialState_todo,
  reducers: {
    addTodo: {
      reducer: (state, actions) => {
        state.push(actions.payload);
      },
    },
    removeTodo: {
      reducer: (state, actions) => {
        // console.log(actions.payload);
        const id = actions.payload;
        return state.filter((todo) => todo.id !== id);
      },
    },
    toggleTodo: {
      reducer: (state, actions) => {
        const id = actions.payload;
        const todo = state.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
      },
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = sliceTodo.actions;

//const initialState_page = [{ page: "Grosery" }];
/*const initialState_page = [
  { page: "Grocery", addImgComponent: "img/product-group/grocery.png" },
];*/
const initialState_page = "Grocery";
export const slicePage = createSlice({
  name: "@@pages",
  initialState: initialState_page,
  reducers: {
    changePage: {
      reducer: (state, action) => {
        //   console.log(action.payload);
        return (state = action.payload);
      },
    },
  },
});

export const { changePage } = slicePage.actions;

export const store = configureStore({
  reducer: {
    todos: sliceTodo.reducer,
    pages: slicePage.reducer,
  },
  devTools: true,
});
