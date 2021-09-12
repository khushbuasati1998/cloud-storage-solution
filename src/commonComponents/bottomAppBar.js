import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Load Material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import colors from '../constants/colors';
import clsx from 'clsx';

const BottomAppBar = (props) => {
  // css states
  const classes = useStyles();
  // Parent component props
  const { menuOptions, activeIndex, onLinkClick } = props;

  /**
   * function to navigate between different screen
   * @param {*} item selected menu object 
   * @param {*} index index of selected menu
   */
  const navigate = (item, index) => {
    if (index !== activeIndex) {
      if (props.onLinkClick) {
        onLinkClick(index);
      }
      if (item.label !== 'Upload') {
        props.history.push(item.link);
      }
    }
  };

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Grid
          container={true}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {
            menuOptions && menuOptions.length ?
              menuOptions.map((item, index) => (
                <IconButton
                  color="inherit"
                  onClick={() => navigate(item, index)}
                >
                  <img
                    src={index === activeIndex ? item.active : item.inActive}
                    alt="logo"
                    className={clsx({ [classes.imgMargin]: activeIndex === 3 && item.label === 'Notifications' })}
                  />
                </IconButton>
              ))
              : null
          }

        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default BottomAppBar;
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: '-8px',
    background: colors.white
  },
  imgMargin: {
    marginBottom: '-28px'
  }
}));