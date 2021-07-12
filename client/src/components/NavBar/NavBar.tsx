import { AppBar, Container, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logoutRequest } from "src/api/user/userApi";
import { UserContext } from "../../utils/UserContext";
import { GuessNav } from "./Auth/GuessNav";
import { UserNav } from "./Auth/UserNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up("lg")]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    title: {
      flexGrow: 1,
      color: "white",
      "text-decoration": "none",
      "&:hover": {
        color: "white",
        "text-decoration": "none",
      },
    },
  })
);

export interface HeaderData {
  label: string;
  href: string;
}

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

  return (
    <AppBar position="static">
      <Container maxWidth="lg" className={classes.root}>
        <Toolbar className={classes.root}>
          <Typography component={Link} to={"/"} variant="h6" className={classes.title}>
            React Blog
          </Typography>
          {userData?.userName ? (
            <>
              <UserNav isMobile={isMobile} username={userData.userName} logoutBtn={logoutHandler} />
            </>
          ) : (
            <>
              <GuessNav isMobile={isMobile} logoutBtn={logoutHandler} />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
