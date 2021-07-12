import { Container, createStyles, CssBaseline, makeStyles, Theme } from "@material-ui/core";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar, RouteWrapper } from "./components";
import store from "./redux/configureStore";
import { UserContext } from "./utils/UserContext";
import { useSession } from "./utils/useSession";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up("lg")]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
      paddingTop: theme.spacing(7),
    },
  })
);

function App() {
  const { userData, setUser } = useSession();
  const value = { userData, setUser };
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <UserContext.Provider value={value}>
          <Router>
            <NavBar />
            <Container maxWidth="lg" className={classes.root}>
              <RouteWrapper />
            </Container>
          </Router>
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default App;
