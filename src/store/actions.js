const { ADD_DISH } = require("./actionsType");

export const addDishToCart = (id) => {
  return {
    type: ADD_DISH,
    dishId: id,
  };
};
