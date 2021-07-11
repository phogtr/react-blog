import { AppBar, Container, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logoutRequest } from "src/api/user/userApi";
import { UserContext } from "../../utils/UserContext";
import { GuessNav } from "./Auth/GuessNav";
import { DesktopScreen } from "./Screens/DesktopScreen";

const guessHeader = [
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Register",
    href: "/register",
  },
];

let userHeader = [
  {
    label: "Create Post",
    href: "/create-post",
  },
  {
    label: "",
    href: "/",
  },
  {
    label: "Logout",
    href: "/",
  },
];

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
      color: "white",
      "&:hover": {
        color: "white",
        "text-decoration": "none",
      },
    },
  })
);

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { userData, setUser } = useContext(UserContext);

  const logoutHandler = async () => {
    await logoutRequest();
    setUser({});
    localStorage.clear();
  };

  // let desktopScreen = userData?.userName ? (
  //   <>
  //     <Button component={Link} to={"/create-post"} color="inherit" className={classes.nav_link}>
  //       Create Post
  //     </Button>
  //     <Button component={Link} to={"/"} color="inherit" className={classes.nav_link}>
  //       {userData.userName}
  //     </Button>
  //     <Button
  //       component={Link}
  //       to={"/"}
  //       color="inherit"
  //       onClick={logoutHandler}
  //       className={classes.nav_link}
  //     >
  //       Logout
  //     </Button>
  //   </>
  // ) : (
  //   <>
  //     <Button component={Link} to={"/login"} color="inherit" className={classes.nav_link}>
  //       Login
  //     </Button>
  //     <Button component={Link} to={"/register"} color="inherit" className={classes.nav_link}>
  //       Register
  //     </Button>
  //   </>
  // );

  // let mobileScreen = (
  //   <>
  //     <IconButton color="inherit" aria-label="menu" onClick={() => setDrawer(true)}>
  //       <MenuIcon />
  //     </IconButton>
  //     <Drawer anchor="top" open={drawer} onClose={() => setDrawer(false)}>
  //       <List>
  //         <ListItem button>
  //           <ListItemText primary="Login" />
  //         </ListItem>
  //         <ListItem button>
  //           <ListItemText primary="Register" />
  //         </ListItem>
  //       </List>
  //     </Drawer>
  //   </>
  // );

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component={Link} to={"/"} variant="h6" className={classes.title}>
            React Blog
          </Typography>
          {userData?.userName ? (
            <div>User</div>
          ) : (
            <>
              {isMobile ? (
                <div>Mobile</div>
              ) : (
                <GuessNav guessHeader={guessHeader}>
                  {(header) => <DesktopScreen header={header} />}
                </GuessNav>
              )}
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
