import { blue, grey, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";

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
    "& .btn-block": {
      padding: theme.spacing(2, 0.5),
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
export default useStyle;
