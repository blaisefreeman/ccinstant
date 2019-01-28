import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";

const styles = theme => ({
  card: {
    display:'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom:16,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    width:80,
    height:80,
    borderRadius:100,
  },
  resultsTitle: {
    lineHeight:1.25,
    paddingBottom:4,
    paddingTop:4
  },
  resultsSnippet: {

  },
  content: {
    paddingLeft:0,
  }
});

function ProgramSearchResult (props) {
  const {classes} = props;
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <div className={classes.column} style={{flex:1, alignItems:'center', padding:16}}>
          <CardMedia
              className={classes.avatar}
              image={props.hit.orgAvatar}
              title={props.hit.orgName}
            />
        </div>
        <div className={classes.column} style={{flex:11}}>
          <CardContent className={classes.content}>
            <Typography className={classes.resultsTitle} variant="h6">{props.hit.programName}</Typography>
            <Typography className={classes.resultsSnippet} variant="body1">{props.hit.programSnippet}</Typography>
          </CardContent>
        </div>
      </Card>
    </React.Fragment>
  );
}
export default withStyles(styles)(ProgramSearchResult);