import React from "react";
import { Button, Card } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { constant } from "../../constants";

const DishItem = ({ dish, onClick }) => {
  return (
    <div className="dish">
      <Card className="inner">
        <div className="img">
          <img src={dish.url} alt={dish.name} />
        </div>
        <div className="info">
          <h4 className="name">{dish.name}</h4>
          <span className="price">{dish.price} KGS</span>
        </div>
        <Button variant="outlined" onClick={onClick}>
          add to cart <AddShoppingCartIcon />
        </Button>
      </Card>
    </div>
  );
};

export default DishItem;
