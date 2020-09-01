import React from 'react'
import { makeStyles, Card, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  experiences: {
    display: 'flex',
    width: '100vw',
    height: '30vh',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: '5em',
    width: '55vw',
    height: '35vh',
  },
  message: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: '1em',
    marginLeft: '1.5em',
  },
}))

const Experiences = () => {
  const classes = useStyles()
  return (
    <div className={classes.experiences}>
      <Card className={classes.card} variant="elevation">
        <Typography className={classes.message} variant="h5">
          Formation au Javascript
        </Typography>
        <Typography className={classes.message} variant="subtitle1">
          unirakun
        </Typography>
        <Typography className={classes.message} variant="h5">
          Formation React
        </Typography>
        <Typography className={classes.message} variant="subtitle1">
          unirakun
        </Typography>
        <Typography className={classes.message} variant="h5">
          Formation Material-ui
        </Typography>
        <Typography className={classes.message} variant="subtitle1">
          unirakun
        </Typography>
      </Card>
    </div>
  )
}

export default Experiences
