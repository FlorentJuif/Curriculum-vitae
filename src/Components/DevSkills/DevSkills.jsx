import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100vw',
    height: '26vh',
    backgroundColor: '#151515',
    color: 'white',
    fontSize: '1.2em',
    justifyContent: 'space-around',
  },
  content: {
    marginTop: '2em',
  },
}))

const Skills = () => {
  const classes = useStyles()
  return (
    <div className={classes.skills}>
      <div className={classes.content}>Javascript ★★★★</div>
      <div className={classes.content}>ReactJS ★★★★</div>
      <div className={classes.content}>material-ui ★★★★</div>
    </div>
  )
}

export default Skills
