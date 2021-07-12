import { Drawer, IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderData } from "../NavBar";

interface MobileScreenProps {
  header: HeaderData[];
  isLogin: Boolean;
  logoutBtn: () => void;
}

export const MobileScreen: React.FC<MobileScreenProps> = ({ header, isLogin, logoutBtn }) => {
  const [drawer, setDrawer] = useState(Boolean);

  return (
    <>
      <IconButton color="inherit" aria-label="menu" onClick={() => setDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={drawer} onClose={() => setDrawer(false)}>
        <div onClick={() => setDrawer(false)}>
          <List>
            {header.map(({ label, href }) => (
              <ListItem component={Link} to={href} button key={label}>
                <ListItemText primary={label} />
              </ListItem>
            ))}
            {isLogin ? (
              <ListItem component={Link} to={"/"} button onClick={() => logoutBtn()}>
                <ListItemText primary="Logout" />
              </ListItem>
            ) : null}
          </List>
        </div>
      </Drawer>
    </>
  );
};
