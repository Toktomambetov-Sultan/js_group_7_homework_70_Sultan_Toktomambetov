import React from "react";
import {
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  formGroup: {
    margin: theme.spacing(2, 0),
  },
}));

const Form = (props) => {
  const classes = useStyle();

  return (
    <div>
      <Typography variant="h5">Enter your details.</Typography>
      <FormControl fullWidth variant="outlined" className={classes.formGroup}>
        <InputLabel htmlFor="name">Name: </InputLabel>
        <OutlinedInput
          id="name"
          value={props.formName}
          onChange={(e) => props.setFormName(e.target.value)}
          startAdornment={
            <InputAdornment position="start">{"->"}</InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
      <FormControl fullWidth variant="outlined" className={classes.formGroup}>
        <InputLabel htmlFor="phone">Phone: </InputLabel>
        <OutlinedInput
          id="phone"
          value={props.formPhone}
          onChange={(e) => props.setFormPhone(e.target.value)}
          startAdornment={
            <InputAdornment position="start">{"->"}</InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
      <FormControl fullWidth variant="outlined" className={classes.formGroup}>
        <InputLabel htmlFor="email">Email: </InputLabel>
        <OutlinedInput
          id="email"
          value={props.formEmail}
          type="email"
          onChange={(e) => props.setFormEmail(e.target.value)}
          startAdornment={
            <InputAdornment position="start">{"->"}</InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
    </div>
  );
};

export default Form;
