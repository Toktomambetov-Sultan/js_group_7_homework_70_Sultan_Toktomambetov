const { ADD_DISH, DELETE_DISH } = require("./actionsType");

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
