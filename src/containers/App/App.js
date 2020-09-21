import React, { useState, useEffect } from "react";
import "./AppStyles.js";
import { Container, Grid, Button, List, Typography } from "@material-ui/core";
import useStyle from "./AppStyles.js";
import DishItem from "../../components/DishItem/DishItem.js";
import {
  addDishToCart,
  deleteDishFromCart,
  changeModalState,
  fetchPost,
  dishesInitInCart,
} from "../../store/cart/cartActions";
import { useDispatch, useSelector } from "react-redux";
import CartListItem from "../../components/CartListItem/CartListItem.js";
import MyModal from "../../components/Modal/MyModal.js";
import Form from "../../components/Form/Form.js";
import { fetchGet } from "../../store/dishes/dishesActions";

function App() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const dishesState = useSelector((state) => state.dishes);
  const addDishToCartHandler = (id) =>
    dispatch(addDishToCart(id, dishesState.dishes));
  const deleteDishFromCartHandler = (id) =>
    dispatch(deleteDishFromCart(id, dishesState.dishes));

  const changeModalStateHandler = (bool) => dispatch(changeModalState(bool));
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formName, setFormName] = useState("");
  useEffect(() => {
    dispatch(fetchGet());
  }, [dispatch]);
  const postRequest = () => {
    if (formEmail && formName && formEmail) {
      changeModalStateHandler(false);
      dispatch(dishesInitInCart());
      dispatch(
        fetchPost({
          clientData: { phone: formPhone, name: formName, email: formEmail },
          order: cartState.dishesInCart,
        }),
      );
    } else {
      alert("Some field is not filled!");
    }
  };

  return (
    <Container>
      <Grid container justify="space-between" className={classes.container}>
        <Grid item xs={7} className={classes.section}>
          <h3 className="title">dishes</h3>
          <div className="bottom">
            <div className={classes.dishes}>
              {dishesState.dishes.map((dish) => (
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
              {Object.keys(cartState.dishesInCart).map((key) => (
                <CartListItem
                  key={key}
                  count={cartState.dishesInCart[key]}
                  id={key}
                  onClick={() => deleteDishFromCartHandler(key)}
                />
              ))}
            </List>
            <Typography variant="h6">Delivery: {cartState.delivery} KGS</Typography>
            <Typography variant="h6">
              Total price: {cartState.totalPrice} KGS
            </Typography>
            <div className="btn-block">
              <Button
                variant="contained"
                disabled={!cartState.totalPrice}
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
        isOpen={cartState.isModalOpen}
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
