import React from "react";
import { constant } from "../../constants";
import { ListItem, Grid, IconButton } from "@material-ui/core";
import useStyle from "./CartListItemStyles";
import DeleteIcon from "@material-ui/icons/Delete";

const CartListItem = ({ id, count }) => {
  const classes = useStyle();
  const obj = constant.dishes.find((elem) => elem.id === id);
  const price = obj.price * count;
  return (
    <ListItem className={classes.orderListItem}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <IconButton aria-label="delete" color="secondary">
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
