// Libraries
import React from "react";
import {
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {Hidden, AppBar} from "@material-ui/core";
import {FilterOutline} from "mdi-material-ui";


const styles = theme => ({
  grow: {
    flexGrow:1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${theme.layout.leftDrawerWidth}px)`,
      marginLeft: theme.layout.leftDrawerWidth,
    }
  },
  firstIcon: {
    marginLeft:-20,
  },
  lastIcon: {
    marginRight:-20,
  },
});

function AppBarContainer (props) {
  const {appStore, theme, classes, updateStore} = props;

  function toggleLeftDrawer(){
    updateStore('toggleLeftDrawer');
  }

  function toggleRightDrawer(){
    updateStore('toggleRightDrawer');
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>

        <Hidden {...{'lgUp': true, implementation: 'css'}} >
          <IconButton className={classes.firstIcon} onClick={toggleLeftDrawer}>
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Typography variant="h6" className={classes.grow}>
          Programs
        </Typography>

        <Hidden {...{'mdUp': true, implementation: 'css'}} >
          <IconButton className={classes.lastIcon} onClick={toggleRightDrawer}>
            <FilterOutline />
          </IconButton>
        </Hidden>

      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles, {withTheme:true})(AppBarContainer);


