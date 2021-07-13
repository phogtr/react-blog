import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { NavBar, RouteWrapper } from "..";

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
      paddingTop: theme.spacing(3),
    },
  })
);

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" className={classes.root}>
        <RouteWrapper />
      </Container>
    </>
  );
};
