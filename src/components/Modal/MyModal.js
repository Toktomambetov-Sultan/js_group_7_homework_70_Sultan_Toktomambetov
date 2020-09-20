import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyle = makeStyles((theme) => ({
  darkBack: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    bottom: "0",
    background: "rgba(0,0,0,0.3)",
    zIndex: "10",
  },
  front: {
    position: "absolute",
    background: "#fff",
    zIndex: "11",
    minWidth: theme.spacing(50),
    left: "50%",
    transform: "translate(-50%)",
    top: "10%",
    padding: theme.spacing(2),
    "& .btns": {
      marginTop: theme.spacing(1),
      borderTop: "1px solid " + grey[700],
      padding: theme.spacing(1, 0),
      display: "flex",
      justifyContent: "space-between",
    },
  },
  closeModal: {
    display: "none",
  },
}));
const MyModal = ({ isOpen, children, onContinue, onCancel }) => {
  const classes = useStyle();
  const mainCls = isOpen ? "" : classes.closeModal;
  return (
    <div className={mainCls}>
      <div className={classes.darkBack}></div>
      <div className={classes.front}>
        {children}
        <div className="btns">
          <Button variant="contained" color="secondary">
            canсel
          </Button>
          <Button variant="contained" color="primary">
            continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
