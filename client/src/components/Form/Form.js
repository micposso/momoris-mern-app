import React from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from './styles';

const Form = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <form action="" className={`${classes.root} ${classes.form}`}>
        <TextField name="creator" label="creator" />
        <TextField name="title" label="title" />
        <TextField name="message" label="message" />
        <TextField name="tags" label="tags" />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} />
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default Form;