import React from "react";
import Post from './Post/Post';
import { Grid, CircularProgress } from "@material-ui/core";

import useStyles from "./styles";


const Posts = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >

        <Grid key={""} item xs={12} sm={6} md={6}>
          <Post post={""} setCurrentId={""} />
        </Grid>

    </Grid>
  );
};

export default Posts;
