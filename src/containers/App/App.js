import React from "react";
import "./App.css";
import {
  Container,
  Grid,
  makeStyles,
  Card,
  Button,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { blue, grey, yellow } from "@material-ui/core/colors";
import { constant } from "../../constants";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 0),
  },
  section: {
    "& h3.title": {
      border: "4px solid #00d0ff",
      background: blue[100],
      padding: theme.spacing(1, 2),
      color: grey[900],
      margin: theme.spacing(0),
      fontSize: theme.spacing(4),
      borderBottom: "none",
    },
    "& .bottom": {
      border: "4px solid " + grey[400],
      background: grey[100],
      borderTop: "none",
      padding: theme.spacing(2, 1),
    },
  },
  dishes: {
    "& .dish": {
      width: "100%",
      padding: theme.spacing(0.5, 2),
      "& .inner": {
        border: "1px solid" + grey[900],
        background: blue[100],
        padding: theme.spacing(1, 1),
        display: "flex",
        alignItems: "center",
      },
      "& .img": {
        width: theme.spacing(10),
        height: theme.spacing(10),
        border: "2px solid " + blue[700],
      },
      "& img": {
        width: "100%",
        height: "100%",
      },
      "& .info": {
        flexGrow: "1",
        textAlign: "center",
      },
      "& .name": {
        margin: theme.spacing(1, 0),
        fontSize: theme.spacing(3),
      },
    },
  },
  orderListItem: {
    borderBottom: "2px solid " + yellow[900],
  },
}));

function App() {
  const classes = useStyle();

  return (
    <Container>
      <Grid container justify="space-between" className={classes.container}>
        <Grid item xs={7} className={classes.section}>
          <h3 className="title">dishes</h3>
          <div className="bottom">
            <div className={classes.dishes}>
              {constant.dishes.map((dish) => (
                <div className="dish" key={dish.id}>
                  <Card className="inner">
                    <div className="img">
                      <img src={dish.url} alt={dish.name} />
                    </div>
                    <div className="info">
                      <h4 className="name">{dish.name}</h4>
                      <span className="price">{dish.price} KGS</span>
                    </div>
                    <Button variant="contained" color="secondary">
                      add to cart
                    </Button>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className={classes.section}>
          <h3 className="title">Order</h3>
          <div className="bottom">
            <Typography variant="h5">List of dishes in cart: </Typography>
            <List>
              <ListItem className={classes.orderListItem}>
                <Grid container justify="space-between">
                  <Grid item>Плов x1</Grid>
                  <Grid item>210</Grid>
                </Grid>
              </ListItem>
              <ListItem className={classes.orderListItem}>
                <Grid container justify="space-between">
                  <Grid item>Плов x1</Grid>
                  <Grid item>210</Grid>
                </Grid>
              </ListItem>
            </List>
            <Typography variant="h6">Total price: 100</Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
