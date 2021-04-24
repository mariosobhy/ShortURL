import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CreateShortUrl } from "../service/CreateShortUrl";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { validateUrl } from '../lib/ValidateUrl';

const useStyles = makeStyles(() => ({
  root: {
    margin: 50,
    direction: "row",
    justify: "center",
    alignItems: "center",
  },
}));

export default function SearchBar() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const classes = useStyles();

  const submit = async (e) => {
    e.preventDefault();
    let params = { url: url };
    if(validateUrl(url)){
      let response = await CreateShortUrl(params);
      if (response.data) {
        setShortUrl(response.data.shorten_url);
      }
    } else {
      NotificationManager.error("Error", "Not Valid URL", 3000);
    }
  };
  const handleUrlChange = async (e) => {
    setUrl(e.target.value);
  };

  return (
    <>
      <div className={classes.root}>
        <NotificationContainer/>
        <Grid>
          <Typography variant="h4" align="center" component="h1" gutterBottom>
            Short URL
          </Typography>
          <form onSubmit={submit}>
            <Grid>
              <TextField
                value={url}
                onChange={handleUrlChange}
                label="Enter a long URL"
                margin="normal"
                variant="outlined"
                fullWidth={true}
                required={true}
              />
            </Grid>
            <Grid>
              <Button variant="contained" color="primary" type="submit">
                Short it
              </Button>
            </Grid>
          </form><br />
          <Grid>
            <p>Short URL: </p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </Grid>
        </Grid>
      </div>
    </>
  );
}