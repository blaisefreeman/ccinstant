import React, {Component} from "react";

// Material UI
import { withStyles } from "@material-ui/styles";
import {
  Divider,
  Toolbar,
  Typography,
} from "@material-ui/core";

// Algolia Search
import algoliasearch from 'algoliasearch/lite';
//import 'instantsearch.css/themes/algolia.css';
import { InstantSearch } from 'react-instantsearch-dom';
import {
  RefinementList,
  SearchBox,
  Hits,
  ClearRefinements,
  connectSearchBox,
  connectRefinementList,
  connectHierarchicalMenu,
  connectSortBy,
  connectInfiniteHits,
  connectCurrentRefinements,
} from 'react-instantsearch-dom';

// Components
import SideDrawer from "../Components/SideDrawer.js";
import ProgramSearchResult from "../Components/ProgramSearchResult.js";


// Algolia Search Keys
const searchClient = algoliasearch(
  'BCF1FSSMDA',
  '55f8717dec7a470e2f783472abf12223'
);

const styles = theme => ({
  divider: {
    marginTop:20,
    marginBottom:20,
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.layout.maxWidthBody - 2*(theme.spacing.unit * 2),
      width: `calc(100% - ${theme.layout.rightDrawerWidth}px)`,
      marginRight: theme.layout.rightDrawerWidth,
    }
  },
  body: {
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit * 1,
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 2,
    },
    width:'100%',
  },
  sideBarHeading: {
    marginBottom:16,
  },
});

function BodyContainer (props) {
  const {appStore, theme, classes, updateStore} = props;

  function toggleRightDrawer(){
    updateStore('toggleRightDrawer');
  }

  return (

    <div className={classes.body}>

      <InstantSearch indexName="dev_ccinstant" searchClient={searchClient}>

        <div className={classes.content}>
          <div className={classes.body}>
            <Toolbar />
            <SearchBox />
            <Divider className={classes.divider} />
            <Hits hitComponent={HitComponent} />
          </div>
        </div>

        <SideDrawer
            open={appStore.rightDrawerIsOpen}
            onClose={toggleRightDrawer}
          >
          <React.Fragment>
            <Toolbar />
            <Typography className={classes.sideBarHeading} variant="h6">Categories</Typography>
            <RefinementList attribute="category" />
            <br />
            <ClearRefinements />
          </React.Fragment>
        </SideDrawer>

      </InstantSearch>

    </div>
  );
}

// InstantSearch throws a wrong type error if you pass a component function that's wrapped by withStyle
function HitComponent (props){
  return (
    <ProgramSearchResult {...props} />
  );
}

export default withStyles(styles, {withTheme: true})(BodyContainer);