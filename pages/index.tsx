import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
    root: {
      backgroundColor: theme.palette.background.default
    }
  }
})

export default function Index() {
  const classes = useStyles()
  return (
    <Box className={clsx(classes.root)}>
      <Typography align="center" variant="body1" component="h1">
        artel.us
      </Typography>
    </Box>
  );
}
