import React from 'react'
import { makeStyles } from '@material-ui/core'
import Github from './GitHub-Mark-32px.png'
import Twitter from './Twitter_Bird.svg.png'

const useStyles = makeStyles(() => ({
  logo: {
    height: '1.5em',
    width: 'auto',
    marginRight: '1em',
    marginTop: '1em',
    color: 'white',
  },
  twitter: {
    height: '1.2em',
    width: 'auto',
    marginRight: '1em',
    marginTop: '1em',
    color: 'white',
  },
}))

const Social = () => {
  const classes = useStyles()
  return (
    <div>
      <div>
        <img className={classes.logo} src={Github} alt="github" />
        <a
          className={classes.logo}
          href="https://github.com/FlorentJuif"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/FlorentJuif
        </a>
      </div>
      <div>
        <img className={classes.twitter} src={Twitter} alt="twitter" />
        <a
          className={classes.twitter}
          href="https://twitter.com/soefr"
          rel="noopener noreferrer"
          target="_blank"
        >
          @SoEFr
        </a>
      </div>
    </div>
  )
}

export default Social
