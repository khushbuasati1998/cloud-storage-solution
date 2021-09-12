import React from 'react';
import colors from '../constants/colors';
import baseStylesInitial from '../constants/baseStyles';
import clsx from 'clsx';
// Load Material components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Load Reusable component
import Heading from '../commonComponents/pageHeading';
// Load notification image
import notificationImg from '../assets/notification.png';

const Notification = (props) => {
    // css states
    const commonClasses = baseStylesInitial();
    const classes = useStyles();
    return (
        <Grid>
            <Heading title={'Notifications'} />
            <Grid
                container={true}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <img src={notificationImg} alt="logo" className={classes.imgRoot} onClick={props.updateModalToggle} />
            </Grid>
            <Grid
                container={true}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Typography className={clsx(classes.primaryFont, commonClasses.avenirNextDemiBold_bold_20)}>
                    No notifcations yet
                </Typography>
                <br />
                <Typography className={clsx(classes.greyFont, commonClasses.avenirNextDemiBold_regular_15)}>
                    Here you will see the external changes in your shared folders, tags from your peers and other updates
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Notification;
const useStyles = makeStyles((theme) => ({
    imgRoot: {
        height: 246,
        width: 305,
        margin: '5rem 0px'
    },
    greyFont: {
        color: colors.grey4
    },
    primaryFont: {
        color: theme.palette.primary.main,
        marginBottom: '0.8rem',
        textAlign: 'center'
    },
    inlineGrid: {
        display: 'inline-grid'
    }
}));