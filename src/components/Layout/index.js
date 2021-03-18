import Head from 'next/head'
import { makeStyles } from '@material-ui/core'
import TopBar from './TopBar'
import NavBar from './NavBar'

// função contem vários métodos p/ estilizar os componentes
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}))

export default function Layout({ children, title }) {
  const classes = useStyles()

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>

      <div className={classes.root}>
        <TopBar />
        <NavBar />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
