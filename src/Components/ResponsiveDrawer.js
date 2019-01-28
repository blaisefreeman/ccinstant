import React from "react";
import { Drawer } from "@material-ui/core"
import { withTheme } from '@material-ui/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

function ResponsiveDrawer (props) {
  const {
      breakpoint="md",
      ModalProps={},
      variant,
      ...other
    } = props;
  const {theme} = props;
  const dockDrawer = useMediaQuery(theme.breakpoints.up(breakpoint));

  ModalProps.keepMounted = true;
  ModalProps.disablePortal = true;

  return (
    <Drawer
        ModalProps = {ModalProps}
        variant = {(dockDrawer) ? 'permanent' : 'temporary'}
        {...other}
    />
  );
}
export default withTheme()(ResponsiveDrawer);