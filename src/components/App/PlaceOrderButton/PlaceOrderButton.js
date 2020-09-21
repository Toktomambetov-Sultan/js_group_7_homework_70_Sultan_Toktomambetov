import React from "react";
import { Button } from "@material-ui/core";

const PlaceOrderButton = ({ disabled, onClick }) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      color="primary"
      onClick={onClick}
    >
      Place order
    </Button>
  );
};

export default PlaceOrderButton;
