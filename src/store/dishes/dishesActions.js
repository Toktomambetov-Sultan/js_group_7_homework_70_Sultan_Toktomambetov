import axiosOrder from "../../axiosOrder";

import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  DISHES_INIT,
} from "./../actionsType";

const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const fetchSuccess = () => {
  return { type: FETCH_SUCCESS };
};
const fetchError = () => {
  return { type: FETCH_ERROR };
};
const dishesInit = (dishes) => {
  return { type: DISHES_INIT, dishes };
};
export const fetchGet = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axiosOrder.get("dishes.json");
      dispatch(dishesInit(response.data));
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};
