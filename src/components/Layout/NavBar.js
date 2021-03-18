import { useRouter } from 'next/router'
import {
  Home,
  Subscriptions,
  Whatshot,
  VideoLibrary,
  History,
  AccountCircle
} from '@material-ui/icons'
import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Button
} from '@material-ui/core'

const primaryMenu = [
  { id: 1, label: 'Início', path: '/', icon: Home },
  { id: 2, label: 'Em alta', path: '/trendding', icon: Whatshot },
  { id: 3, label: 'Inscrições', path: 'subscriptions', icon: Subscriptions }
]

const secondaryMenu = [
  { id: 1, label: 'Biblioteca', icon: VideoLibrary },
  { id: 2, label: 'Histórico', icon: History }
]

export default function NavBar() {
  const router = useRouter()

  const isSelected = (item) => {
    return router.pathname === item.path
  }

  const classes = useStyles()

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={item.label}
              />
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <List>
        {secondaryMenu.map((item) => {
          const Icon = item.icon
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={item.label}
              />
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <Box mx={4} my={2}>
        <Typography variant="body1">
          Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Box>
      </Box>
    </Box>
  )

  return (
    <Hidden mdDown>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  )
}

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 250
  },
  desktopDrawer: {
    width: 250,
    top: 64,
    height: 'calc(100% - 64px)',
    borderRight: 'none'
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3)
  },
  listItemText: {
    fontSize: 17
  }
}))
