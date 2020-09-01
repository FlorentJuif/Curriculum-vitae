import React from 'react'
import { makeStyles, Card } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  motivation: {
    display: 'flex',
    width: '100vw',
    height: '30vh',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    backgroundColor: '#292929',
    justifyContent: 'center',
    marginTop: '5em',
    color: 'White',
    width: '49vw',
    height: '19vh',
  },
  message: {
    display: 'flex',
    margin: '1.5em',
    fontSize: '1.3em',
    alignSelf: 'center',
  },
  experiences: {
    display: 'flex',
    fontSize: '2.3em',
    marginTop: '2.2em',
    marginBot: '2em',
    justifyContent: 'center',
  },
}))

const Motivation = () => {
  const classes = useStyles()
  const message =
    'Toujours à la recherche de nouvelles connaissances, Florent aime apprendre, que se soit seul ou en équipe !'
  return (
    <>
      <div className={classes.motivation}>
        <Card className={classes.card} variant="elevation">
          <div className={classes.message}>{message} </div>
        </Card>
      </div>
      <div className={classes.experiences}>Expériences</div>
    </>
  )
}

export default Motivation
