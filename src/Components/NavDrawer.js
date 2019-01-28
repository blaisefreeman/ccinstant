import React from "react";
import ResponsiveDrawer from "./ResponsiveDrawer.js";
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  navDrawer: {
    width: theme.layout.leftDrawerWidth,
    flexShrink: 0,
  },
  navDrawerPaper: {
    width: theme.layout.leftDrawerWidth,
  },
});

function NavDrawer (props){
  const {classes, theme, ...other} = props;
  return (
    <ResponsiveDrawer
      breakpoint={'lg'}
      anchor="left"
      className={classes.navDrawer}
      classes={{paper: classes.navDrawerPaper}}
      {...other}
    />
  );
}

export default withStyles(styles, {withTheme:true})(NavDrawer);