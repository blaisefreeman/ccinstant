// Libraries
import React, {Component} from "react";

// Containers
import BodyContainer from "./BodyContainer.js";
import NavDrawerContainer from "./NavDrawerContainer.js";
import AppBarContainer from "./AppBarContainer.js";

class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      leftDrawerIsOpen: false,
      rightDrawerIsOpen: false,
      router:{
        pages: {
          programSearch: {
            pageTitle: 'Programs',
          }
        },
        currentPage: 'programSearch'
      }
    }
    this.updateAppStore = this.updateAppStore.bind(this);
  }

  updateAppStore(action){
    console.log('updating store: '+ action);
    switch(action){
      case "toggleLeftDrawer":
        this.toggleDrawer('left');
        break;
      case "toggleRightDrawer":
        this.toggleDrawer('right');
        break;
      default:
        console.warn('unknown action: ');
        console.warn(action);
        break;
    }
  }

  toggleDrawer (drawer){
    this.setState((state, props) => {
      return { [drawer+'DrawerIsOpen']: !state[drawer+'DrawerIsOpen'] };
    });
  }

  render() {
    return(
      <div style={{ display:'flex', }}>
        <NavDrawerContainer appStore={this.state} updateStore={this.updateAppStore} />
        <AppBarContainer appStore={this.state} updateStore={this.updateAppStore} />
        <BodyContainer appStore={this.state} updateStore={this.updateAppStore} />
      </div>
    );
  }
}


export default AppContainer;