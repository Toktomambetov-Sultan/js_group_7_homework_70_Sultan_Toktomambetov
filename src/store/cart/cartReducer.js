import {
  ADD_DISH,
  DELETE_DISH,
  CHANGE_MODAL_STATE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  DISHES_INIT_IN_CART,
} from "../actionsType";

const initialState = {
  totalPrice: 0,
  dishesInCart: {},
  isModalOpen: false,
  isLoading: false,
  error: null,
};
const cartReducer = (state = initialState, action) => {
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
          +action.dishes.find((elem) => elem.id === action.dishId).price,
      };
    case DELETE_DISH:
      if (state.dishesInCart[action.dishId] === 1) {
        delete state.dishesInCart[action.dishId];
        return {
          ...state,
          totalPrice:
            state.totalPrice -
            +action.dishes.find((elem) => elem.id === action.dishId).price,
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
          +action.dishes.find((elem) => elem.id === action.dishId).price,
      };
    case DISHES_INIT_IN_CART:
      return { ...state, dishesInCart: {}, totalPrice: 0 };
    case CHANGE_MODAL_STATE:
      return { ...state, isModalOpen: action.isOpen };
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false };
    case FETCH_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return { ...state };
  }
};
export default cartReducer;
