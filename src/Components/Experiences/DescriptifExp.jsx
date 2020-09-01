import React from 'react'
import { makeStyles } from '@material-ui/core'
import Rakun from './unirakun.png'

const useStyles = makeStyles(() => ({
  rakun: {
    display: 'flex',
    width: '5em',
    height: 'auto',
    flexDirection: 'row-reverse',
    marginRight: '2em',
  },
}))

const DescriptifExp = () => {
  const classes = useStyles()
  return (
    <div>
      Formation au Javascript
      <img className={classes.rakun} src={Rakun} alt="rakun" />
    </div>
  )
}

export default DescriptifExp
