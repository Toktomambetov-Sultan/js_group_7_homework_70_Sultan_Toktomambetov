import React, { useState } from "react";
import "./AppStyles.js";
import { Container, Grid, Button, List, Typography } from "@material-ui/core";
import { constant } from "../../constants";
import useStyle from "./AppStyles.js";
import DishItem from "../../components/DishItem/DishItem.js";
import {
  addDishToCart,
  deleteDishFromCart,
  changeModalState,
  fetchPost,
} from "../../store/cart/cartActions";
import { useDispatch, useSelector } from "react-redux";
import CartListItem from "../../components/CartListItem/CartListItem.js";
import MyModal from "../../components/Modal/MyModal.js";
import Form from "../../components/Form/Form.js";

function App() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartReducer);
  const addDishToCartHandler = (id) => dispatch(addDishToCart(id));
  const deleteDishFromCartHandler = (id) => dispatch(deleteDishFromCart(id));
  const changeModalStateHandler = (bool) => dispatch(changeModalState(bool));
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formName, setFormName] = useState("");
  const postRequest = () => {
    dispatch(
      fetchPost({
        clientData: { phone: formPhone, name: formName, email: formEmail },
        order: state.dishesInCart,
      }),
    );
  };
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
                onClick={() => changeModalStateHandler(true)}
              >
                Place order
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <MyModal
        isOpen={state.isModalOpen}
        onContinue={postRequest}
        onCancel={() => changeModalStateHandler(false)}
      >
        <Form
          formEmail={formEmail}
          formName={formName}
          formPhone={formPhone}
          setFormEmail={setFormEmail}
          setFormName={setFormName}
          setFormPhone={setFormPhone}
        />
      </MyModal>
    </Container>
  );
}

export default App;
