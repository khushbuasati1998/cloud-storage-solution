import React from 'react';
import baseStylesInitial from '../constants/baseStyles';
import clsx from 'clsx';
// Load React material components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

const Heading = ({ title, icon }) => {
    // css states
    const classes = styles();
    const commonClasses = baseStylesInitial();

    return (
        <Grid
            container={true}
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Typography
                className={clsx(classes.heading, commonClasses.avenirNextDemiBold_bold_34)}
            >
                {title}
            </Typography>
            {
                icon ? <IconButton><img src={icon} alt="logo" className={classes.imgStyle} /></IconButton>
                    : null
            }
        </Grid>
    );
};
const styles = makeStyles((theme) => ({
    heading: {
        color: theme.palette.primary.main,
        marginBottom: 18,
    }
}));
export default Heading;