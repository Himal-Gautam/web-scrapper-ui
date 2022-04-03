import { makeStyles } from "@material-ui/core/styles";



export const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: "5em",
    padding: 15
  },
  input: {
    display: "none"
  }
}));
