import { ADD_DISH, DELETE_DISH } from "./actionsType";
import { constant } from "../constants";

const initialState = {
  totalPrice: 0,
  dishesInCart: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DISH:
      return {
        ...state,
        dishesInCart: {
          ...state.dishesInCart,
          [action.dishId]: state.dishesInCart[action.dishId] + 1 || 1,
        },
        totalPrice:
          state.totalPrice +
          +constant.dishes.find((elem) => elem.id === action.dishId).price,
      };
    case DELETE_DISH:
      if (state.dishesInCart[action.dishId] === 1) {
        delete state.dishesInCart[action.dishId];
        return {
          ...state,
        };
      }
      return {
        ...state,
        dishesInCart: {
          ...state.dishesInCart,
          [action.dishId]: state.dishesInCart[action.dishId] - 1,
        },
        totalPrice:
          state.totalPrice -
          +constant.dishes.find((elem) => elem.id === action.dishId).price,
      };
    default:
      return { ...state };
  }
};
export default reducer;
