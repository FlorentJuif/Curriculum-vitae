import React from 'react'
import { makeStyles } from '@material-ui/core'
import DevPhoto from './photo.jpg'

const useStyles = makeStyles(() => ({
  photo: {
    width: '8em',
    height: 'auto',
    marginTop: '2em',
  },
}))

const Photo = () => {
  const classes = useStyles()
  return <img className={classes.photo} src={DevPhoto} alt="devPhoto" />
}

export default Photo
