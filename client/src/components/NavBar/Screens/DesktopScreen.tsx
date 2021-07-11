import { Button, createStyles, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logoutRequest } from "src/api/user/userApi";
import { UserContext } from "src/utils/UserContext";
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
}

export const DesktopScreen: React.FC<DesktopScreenProps> = ({ header }) => {
  const classes = useStyles();
  const { userData, setUser } = useContext(UserContext);

  const logoutHandler = async () => {
    await logoutRequest();
    setUser({});
    localStorage.clear();
  };

  return (
    <>
      {header.map(({ label, href }) => (
        <Button key={label} component={Link} to={href} color="inherit" className={classes.nav_link}>
          {label}
        </Button>
      ))}
      {userData?.accessToken ? (
        <Button
          component={Link}
          to={"/"}
          color="inherit"
          className={classes.nav_link}
          onClick={() => logoutHandler()}
        >
          Logout
        </Button>
      ) : null}
    </>
  );
};
