import { Button, createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { HeaderData } from "../NavBar";

const useStyles = makeStyles(() =>
  createStyles({
    nav_link: {
      color: "black",
      "&:hover": {
        color: "white",
        opacity: 0.7,
        "text-decoration": "none",
        "background-color": "transparent",
      },
    },
    root: {
      "&.Mui-disabled": {
        color: "black",
      },
    },
  })
);

interface DesktopScreenProps {
  header: HeaderData[];
  isLogin: Boolean;
  logoutBtn: () => void;
}

export const DesktopScreen: React.FC<DesktopScreenProps> = ({ header, isLogin, logoutBtn }) => {
  const classes = useStyles();

  return (
    <>
      {/* {isLogin ? (
        <Button
          component={Link}
          to={"/create-post"}
          color="inherit"
          className={classes.nav_link}
          variant="outlined"
        >
          Create Post
        </Button>
      ) : null} */}
      {header.map(({ label, href }) => (
        <Button
          key={label}
          component={Link}
          to={href}
          disabled={href === "" ? true : false}
          color="inherit"
          className={href === "" ? classes.root : classes.nav_link}
        >
          {label}
        </Button>
      ))}
      {isLogin ? (
        <Button
          component={Link}
          to={"/"}
          color="inherit"
          className={classes.nav_link}
          onClick={() => logoutBtn()}
        >
          Logout
        </Button>
      ) : null}
    </>
  );
};
