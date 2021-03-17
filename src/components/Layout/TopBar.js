import { Box, Paper, InputBase, IconButton, Button } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {
  Apps,
  Menu,
  MoreVert,
  Search,
  VideoCall,
  AccountCircle
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

export default function TopBar() {
  const classes = useStyles()

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center" marginTop="8px">
          <Menu fontSize="large" />
          <img
            src="/youtube-logo.svg"
            alt="Logo Youtube"
            className={classes.logo}
          />
        </Box>

        <Box marginTop="8px">
          <Paper component="form" className={classes.search}>
            <InputBase
              className={classes.input}
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" aria-label="search">
              <Search />
            </IconButton>
          </Paper>
        </Box>

        <Box display="flex" marginTop="8px">
          <IconButton className={classes.icons}>
            <VideoCall fontSize="large" />
          </IconButton>
          <IconButton className={classes.icons}>
            <Apps fontSize="large" />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert fontSize="large" />
          </IconButton>

          <Button
            color="secondary"
            component="a"
            variant="outlined"
            style={{ height: '50px', marginTop: '5px' }}
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    height: 70,
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 12px',
    minHeight: 56
  },
  logo: {
    cursor: 'pointer',
    height: 25,
    marginLeft: theme.spacing(3)
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.action.hover,
    height: 39,
    width: 700
  },
  input: {
    flex: 1,
    padding: '2px 8px'
  },
  icons: {}
}))
