import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CreateShortUrl } from "../service/CreateShortUrl";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import validator from 'validator';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 50,
    direction: "row",
    justify: "center",
    alignItems: "center",
  },
}));

export default function SearchBar() {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const classes = useStyles();

  const submit = async (e) => {
    e.preventDefault();
    let params = { url: url, slug: slug };
    if(validate(url)){
      let response = await CreateShortUrl(params);
      if (response.data) {
        setShortUrl(response.data.data.shorten_url);
      }
    }
  };
  const handleUrlChange = async (e) => {
    setUrl(e.target.value);
  };

  const handleSlugChange = async (e) => {
    setSlug(e.target.value);
  };

  const validate = (value) => {
    if (!validator.isURL(value)) {
      NotificationManager.error("Error", 'Not Valid URL', 3000);
      return false;
    }
    return true;
  }

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
            <TextField
                value={slug}
                onChange={handleSlugChange}
                label="Type slug here"
                margin="normal"
                variant="outlined"
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
            <a href={url} target="_blank">
              {shortUrl}
            </a>
          </Grid>
        </Grid>
      </div>
    </>
  );
}