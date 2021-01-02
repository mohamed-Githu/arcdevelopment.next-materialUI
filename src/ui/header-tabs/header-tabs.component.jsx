import React, { Fragment, useEffect, useState } from "react";
import useStyles from "./header-tabs.styles";
import Link from "../../Link";
import { withRouter } from "react-router-dom";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { menuOptions, tabsOptions } from "./header-tabs.data";

const HeaderTabs = ({ location }) => {
  const classes = useStyles();

  const [activeTab, setActiveTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  
  useEffect(() => {
    [...menuOptions, ...tabsOptions, {
      routeName: "/estimate",
      activeIndex: 5,
    }].forEach(item => {
      switch (location.pathname) {
        case `${item.routeName}`:
          if (activeTab !== item.activeIndex)
            setActiveTab(item.activeIndex);
          if (item.selectedIndex && item.selectedIndex !== selectedIndex)
              setSelectedIndex(item.selectedIndex);
          break;
        default: break;
      }
    })
  
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <Fragment>
      <Tabs
        value={activeTab}
        className={classes.tabContainer}
        indicatorColor="primary"
        >
      {
        tabsOptions.map(({ name, routeName }, index) => {
          return index ===  1 ?
          <Tab
            key={name}
            className={classes.tab}
            component={Link}
            to={routeName}
            label={name}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onMouseOver={handleOpen}
          /> :
          <Tab
              key={name}
              className={classes.tab}
              component={Link}
              to={routeName}
              label={name}
          />
        })
      }
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to="/estimate"
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        MenuListProps={{ onMouseLeave: handleClose }}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        elevation={0}
        keepMounted
        style={{ zIndex: 1303 }}
      >
        {menuOptions.map((item, index) => (
          <MenuItem
            key={item.value}
            classes={{ root: classes.menuItem }}
            selected={index === selectedIndex}
            onClick={handleClose}
            component={Link}
            to={item.routeName}
          >
            {item.value}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
}

export default withRouter(HeaderTabs);