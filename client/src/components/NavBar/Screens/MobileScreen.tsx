import {
  createStyles,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderData } from "../NavBar";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "&.Mui-disabled": {
        opacity: 1,
      },
    },
    drawer: {
      backgroundColor: "#ff9800",
    },
    drawer_text: {
      textTransform: "capitalize",
      "&:hover": {
        color: "white",
        opacity: 0.7,
      },
    },
  })
);

interface MobileScreenProps {
  header: HeaderData[];
  isLogin: Boolean;
  isAdmin: Boolean | undefined;
  logoutBtn: () => void;
}

export const MobileScreen: React.FC<MobileScreenProps> = ({
  header,
  isLogin,
  isAdmin,
  logoutBtn,
}) => {
  const [drawer, setDrawer] = useState(Boolean);
  const classes = useStyles();

  return (
    <>
      <IconButton color="default" aria-label="menu" onClick={() => setDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={drawer} onClose={() => setDrawer(false)}>
        <div onClick={() => setDrawer(false)}>
          <List className={classes.drawer}>
            {isAdmin ? (
              <ListItem component={Link} to={"/admin"} button>
                <ListItemText primary="Admin" className={classes.drawer_text} />
              </ListItem>
            ) : null}
            {header.map(({ label, href }) => (
              <ListItem
                component={Link}
                to={href}
                disabled={href === "" ? true : false}
                button
                key={label}
                className={href === "" ? classes.root : ""}
              >
                <ListItemText primary={label} className={classes.drawer_text} />
              </ListItem>
            ))}
            {isLogin ? (
              <ListItem component={Link} to={"/"} button onClick={() => logoutBtn()}>
                <ListItemText primary="Logout" className={classes.drawer_text} />
              </ListItem>
            ) : null}
          </List>
        </div>
      </Drawer>
    </>
  );
};
