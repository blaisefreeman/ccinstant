// Libraries
import React from "react";
import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core"
import { withStyles } from '@material-ui/styles';

// Components
import NavDrawer from "../Components/NavDrawer.js";

// Assets
import logo from "../logo.jpeg";

const styles = theme => ({
  logo: {
    padding: 16,
  },
});


function NavDrawerContainer(props) {
  const {appStore, classes, theme, updateStore} = props;

  function toggleLeftDrawer(){
    updateStore('toggleLeftDrawer');
  }

  return (
    <NavDrawer
        open={appStore.leftDrawerIsOpen}
        onClose={toggleLeftDrawer}
      >
      <img src={logo} width={100} height={100} className={classes.logo} />
      <Divider />
      <List>
        {['Find Programs', 'Volunteer Opportunities', 'About', 'Contact'].map((text,
        index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </NavDrawer>
  );

}

export default withStyles(styles, {withTheme: true})(NavDrawerContainer);