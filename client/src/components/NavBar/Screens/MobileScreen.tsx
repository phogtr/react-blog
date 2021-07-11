import { Drawer, IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { logoutRequest } from "src/api/user/userApi";
import { UserContext } from "src/utils/UserContext";
import { HeaderData } from "../NavBar";

interface MobileScreenProps {
  header: HeaderData[];
}

export const MobileScreen: React.FC<MobileScreenProps> = ({ header }) => {
  const [drawer, setDrawer] = useState(Boolean);
  const { userData, setUser } = useContext(UserContext);

  const logoutHandler = async () => {
    await logoutRequest();
    setUser({});
    localStorage.clear();
  };

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
            {userData?.accessToken ? (
              <ListItem component={Link} to={"/"} button onClick={() => logoutHandler()}>
                <ListItemText primary="Logout" />
              </ListItem>
            ) : null}
          </List>
        </div>
      </Drawer>
    </>
  );
};
