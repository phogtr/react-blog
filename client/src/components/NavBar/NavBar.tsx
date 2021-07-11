import { AppBar, Container, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import { GuessNav } from "./Auth/GuessNav";
import { UserNav } from "./Auth/UserNav";

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

export interface HeaderData {
  label: string;
  href: string;
}

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { userData } = useContext(UserContext);

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component={Link} to={"/"} variant="h6" className={classes.title}>
            React Blog
          </Typography>
          {userData?.userName ? (
            <>
              <UserNav isMobile={isMobile} username={userData.userName} />
            </>
          ) : (
            <>
              <GuessNav isMobile={isMobile} />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
