import React from 'react'
import { makeStyles } from '@material-ui/core'
import Social from './Social/Social'
import Photo from './Photo/Photo'
import Profile from './Profile/Profile'

const useStyles = makeStyles(() => ({
  devInfo: {
    backgroundColor: '#292929',
    display: 'grid',
    width: '100vw',
    height: '45vh',
    flexWrap: 'wrap',
    gridTemplateColumns: '15% 15% 70%',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateAreas: `". . ."
                        "social picture devInfo"
                        ". . ."`,
  },
  social: {
    gridArea: 'social',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    gridArea: 'picture',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  profile: {
    gridArea: 'devInfo',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: '2em',
  },
}))

const DevInfo = () => {
  const classes = useStyles()
  return (
    <div className={classes.devInfo}>
      <div className={classes.social}>
        <Social />
      </div>
      <div className={classes.photo}>
        <Photo />
      </div>
      <div className={classes.profile}>
        <Profile />
      </div>
    </div>
  )
}

export default DevInfo
