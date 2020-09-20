import axiosOrder from "../axiosOrder";

const {
  ADD_DISH,
  DELETE_DISH,
  CHANGE_MODAL_STATE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
} = require("./actionsType");

export const addDishToCart = (id) => {
  return {
    type: ADD_DISH,
    dishId: id,
  };
};
export const deleteDishFromCart = (id) => {
  return {
    type: DELETE_DISH,
    dishId: id,
  };
};
export const changeModalState = (bool) => {
  console.log(bool);
  return {
    type: CHANGE_MODAL_STATE,
    isOpen: bool,
  };
};
const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const fetchSuccess = () => {
  return { type: FETCH_SUCCESS };
};
const fetchError = () => {
  return { type: FETCH_ERROR };
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
