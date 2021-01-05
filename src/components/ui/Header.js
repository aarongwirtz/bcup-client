import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
    toolBarMargin: {
        ...theme.mixins.toolbar
    },
    tabContainer: {
        marginLeft: 'auto'
    }
  }));

export default function Header(props) {

    const classes = useStyles();

    return (
        <Fragment>
            <ElevationScroll>
                <AppBar position='fixed' color='primary'>
                    <Toolbar>
                        <Typography variant='h3' color='secondary'>
                            Bottomless Cup
                        </Typography>
                        <Tabs className={classes.tabContainer}>
                            <Tab label="Home" />
                            <Tab label="About" />
                            <Tab label="Menu" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin} />
        </Fragment>
    );
}