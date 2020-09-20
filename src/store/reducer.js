import { ADD_DISH, DELETE_DISH, CHANGE_MODAL_STATE } from "./actionsType";
import { constant } from "../constants";

const initialState = {
  totalPrice: 0,
  dishesInCart: {},
  isModalOpen: false,
  isLoading: false,
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
    case CHANGE_MODAL_STATE:
      return { ...state, isModalOpen: action.isOpen };
    default:
      return { ...state };
  }
};
export default reducer;
