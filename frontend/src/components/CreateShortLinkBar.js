import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CreateShortUrl } from "../service/CreateShortUrl";
import { Button, Grid, TextField, FormControl } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 50,
    direction: "row",
    justify: "center",
    alignItems: "center"
  },
}));

export default function SearchBar() {
  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const classes = useStyles();

  const submit = async (e) => {
    e.preventDefault();
    let params = {url: url, slug: slug};
    console.log(params)
    let response = await CreateShortUrl(params);
    console.log(params);
    console.log(response.data.data)
    if(response.data){
        setShortUrl(response.data.data.shorten_url)
    }
  }
  const handleUrlChange = async (e) => {
    setUrl(e.target.value);
  }

  const handleSlugChange= async (e) => {
    setSlug(e.target.value);
  }

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
        <FormControl xs={12} sm={12} fullWidth={true}>
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
            <TextField
            value={slug}
            onChange={handleSlugChange}
            label="Type slug here"
            margin="normal"
            variant="outlined"
            />
          <Grid>
            <Button variant="contained" color="primary" onClick={submit}>Create</Button>
          </Grid>
        </FormControl>
          <Grid item xs={12} sm={4}>
            <a href={url} target="_blank">{shortUrl}</a>
          </Grid>
        </Grid>
      </div>
    </>
  );
}