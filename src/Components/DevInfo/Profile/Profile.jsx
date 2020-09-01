import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  profile: {
    color: 'white',
    fontSize: '2em',
  },
  age: {
    color: 'white',
    fontSize: '1em',
  },
}))

const Profile = () => {
  const classes = useStyles()
  return (
    <div>
      <p className={classes.profile}>Florent JUIF</p>
      <p className={classes.profile}>Javascript junior developer - Front-end</p>
      <p className={classes.age}>27 ans - 6 mois d'expérience </p>
    </div>
  )
}

export default Profile
