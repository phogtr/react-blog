import { Button, createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { HeaderData } from "../NavBar";

const useStyles = makeStyles(() =>
  createStyles({
    nav_link: {
      "&:hover": {
        color: "white",
        opacity: 0.8,
        "text-decoration": "none",
        "background-color": "transparent",
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
      {header.map(({ label, href }) => (
        <Button key={label} component={Link} to={href} color="inherit" className={classes.nav_link}>
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
