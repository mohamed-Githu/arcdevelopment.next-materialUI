import React, { Fragment, useState } from "react";
import useStyles from "./Drawer.styles";
import Link from "../../Link";
import { withRouter } from "react-router-dom";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { listOptions } from "./drawer.data";

const Drawer = ({ location }) => {
  const classes = useStyles();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const pathname = location.pathname;

  const handleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={handleDrawer}
        onOpen={handleDrawer}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {listOptions.map(({ name, routeName }) => {
            const opacity = pathname === routeName ? 1 : ".7";

            return (
              <ListItem
                key={name}
                divider
                button
                component={Link}
                to={routeName}
                onClick={handleDrawer}
                className={
                  routeName === "/estimate"
                    ? classes.drawerItemEstimate
                    : classes.drawerItem
                }
                selected={pathname === routeName}
                style={{ opacity: opacity }}
              >
                <ListItemText>{name}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={handleDrawer}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );
};

export default withRouter(Drawer);
