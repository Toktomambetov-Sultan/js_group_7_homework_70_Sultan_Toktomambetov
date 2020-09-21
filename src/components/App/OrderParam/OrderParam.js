import React from "react";
import { Typography } from "@material-ui/core";

const OrderParam = ({ prop, value }) => {
  return (
    <Typography variant="h6">
      {prop}: {value} KGS
    </Typography>
  );
};

export default OrderParam;
