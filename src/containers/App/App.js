import React from "react";
import "./AppStyles.js";
import {
  Container,
  Grid,
  Button,
  List,
  Typography,
  Modal,
} from "@material-ui/core";
import { constant } from "../../constants";
import useStyle from "./AppStyles.js";
import DishItem from "../../components/DishItem/DishItem.js";
import { addDishToCart, deleteDishFromCart } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import CartListItem from "../../components/CartListItem/CartListItem.js";
import MyModal from "../../components/Modal/MyModal.js";

function App() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const addDishToCartHandler = (id) => dispatch(addDishToCart(id));
  const deleteDishFromCartHandler = (id) => dispatch(deleteDishFromCart(id));
  console.log(state);
  return (
    <Container>
      <Grid container justify="space-between" className={classes.container}>
        <Grid item xs={7} className={classes.section}>
          <h3 className="title">dishes</h3>
          <div className="bottom">
            <div className={classes.dishes}>
              {constant.dishes.map((dish) => (
                <DishItem
                  dish={dish}
                  key={dish.id}
                  onClick={() => addDishToCartHandler(dish.id)}
                />
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className={classes.section}>
          <h3 className="title">Order</h3>
          <div className="bottom">
            <Typography variant="h5">List of dishes in cart: </Typography>
            <List>
              {Object.keys(state.dishesInCart).map((key) => (
                <CartListItem
                  key={key}
                  count={state.dishesInCart[key]}
                  id={key}
                  onClick={() => deleteDishFromCartHandler(key)}
                />
              ))}
            </List>
            <Typography variant="h6">Delivery: 100</Typography>
            <Typography variant="h6">
              Total price: {state.totalPrice}
            </Typography>
            <div className="btn-block">
              <Button
                variant="contained"
                disabled={!state.totalPrice}
                color="primary"
              >
                Send
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <MyModal />
    </Container>
  );
}

export default App;
