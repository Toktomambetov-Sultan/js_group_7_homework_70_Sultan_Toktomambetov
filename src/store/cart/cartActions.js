import axiosOrder from "../../axiosOrder";

import {
  ADD_DISH,
  DELETE_DISH,
  CHANGE_MODAL_STATE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  DISHES_INIT_IN_CART,
} from "../actionsType";

export const addDishToCart = (id, dishes) => {
  return {
    type: ADD_DISH,
    dishId: id,
    dishes,
  };
};
export const deleteDishFromCart = (id, dishes) => {
  return {
    type: DELETE_DISH,
    dishId: id,
    dishes,
  };
};
export const changeModalState = (bool) => {
  return {
    type: CHANGE_MODAL_STATE,
    isOpen: bool,
  };
};
export const dishesInitInCart = () => {
  return {
    type: DISHES_INIT_IN_CART,
  };
};
const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const fetchSuccess = () => {
  return { type: FETCH_SUCCESS };
};
const fetchError = (error) => {
  return { type: FETCH_ERROR, error };
};
export const fetchPost = (data) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosOrder.post("orders.json", data);
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};
