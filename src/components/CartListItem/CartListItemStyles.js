import { yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  orderListItem: {
    borderBottom: "2px solid " + yellow[900],
  },
}));
export default useStyle;
