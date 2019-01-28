import React from "react";
import ResponsiveDrawer from "./ResponsiveDrawer.js";
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  sideDrawer: {
    width: theme.layout.rightDrawerWidth,
    flexShrink: 0,
  },
  sideDrawerPaper: {
    backgroundColor: theme.palette.background.default,
    border:0,
    width: theme.layout.rightDrawerWidth,
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing.unit * 1.5,
      backgroundColor: '#fff',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop:28,
    },
    [theme.breakpoints.up('xl')]: {
      right:'auto',
      left: 0,
      marginLeft: theme.layout.maxWidthBody + theme.layout.leftDrawerWidth,
    }
  },
});

function SideDrawer (props){
  const {classes, theme, className, ...other} = props;
  return (
    <ResponsiveDrawer
      breakpoint={'md'}
      anchor="right"
      classes={{paper: classes.sideDrawerPaper}}
      {...other}
    />
  );
}

export default withStyles(styles, {withTheme:true})(SideDrawer);
