import React from "react";
import { ListItem, Grid, IconButton } from "@material-ui/core";
import useStyle from "./CartListItemStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";

const CartListItem = ({ id, count, onClick }) => {
  const classes = useStyle();
  const dishes = useSelector((state) => state.dishes.dishes);
  const obj = dishes.find((elem) => elem.id === id);
  const price = obj.price * count;
  return (
    <ListItem className={classes.orderListItem}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <IconButton onClick={onClick} aria-label="delete" color="secondary">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item>
          {obj.name} x{count}
        </Grid>
        <Grid item>{price}</Grid>
      </Grid>
    </ListItem>
  );
};

export default CartListItem;
