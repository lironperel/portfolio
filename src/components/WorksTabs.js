import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Work from './Work';
import { Link } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 500
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '30%'
  },
  tabPanel: {
    textAlign: 'left',
    width: '100%',
    marginLeft: '30px',
    float: 'left',
    overflowY: 'scroll'
  }
}));

export default function WorksTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs'
        className={classes.tabs}
      >
        <Tab label='Football Info' {...a11yProps(0)} />
        <Tab label='Item Two' {...a11yProps(1)} />
        <Tab label='Item Three' {...a11yProps(2)} />
        <Tab label='Item Four' {...a11yProps(3)} />
        <Tab label='Item Five' {...a11yProps(4)} />
        <Tab label='Item Six' {...a11yProps(5)} />
        <Tab label='Item Seven' {...a11yProps(6)} />
      </Tabs>
      <TabPanel
        id='scrollbar'
        className={classes.tabPanel}
        value={value}
        index={0}
      >
        <Work
          gitHubUrl='https://github.com/lironperel/football-info'
          images={[
            'https://github.com/lironperel/football-info/raw/master/screen1.png',
            'https://github.com/lironperel/football-info/raw/master/screen2.png',
            'https://github.com/lironperel/football-info/raw/master/screen3.png',
            'https://github.com/lironperel/football-info/raw/master/screen4.png'
          ]}
          title='Football-Info App'
          techs='React.js | Node.js | MongoDB | Express.js'
        >
          <ul>
            <b>Main Features</b>
            <li>Login/Register to application</li>
            <li>Main page showing 5 top football leagues</li>
            <li>When choosing a league, league standing table is shown</li>
            <li>
              Leagues data taken from{' '}
              <Link href='https://www.football-data.org/'>
                www.football-data.org
              </Link>{' '}
              API
            </li>
          </ul>
          <ul>
            <b>Server Side Functionality</b>
            <li>Node.js & Express</li>
            <li>DB - mongoDB</li>
            <ul>
              <b>Security/Authentication</b>
              <li>JWT token generated from server</li>
              <li>
                Endpoints in server are getting JWT in request header for
                validation
              </li>
              <li>Passwords are encrypted using bcrypt</li>
              <li>Passwords are encrypted using bcrypt</li>
            </ul>
          </ul>
          <ul>
            <b>Client side</b>
            <li>React.js with Material-UI</li>
            <li>React Context API</li>
            <li>Responsive UI + Mobile support</li>
          </ul>
        </Work>
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
