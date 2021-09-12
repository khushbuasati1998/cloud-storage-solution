import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import colors from '../constants/colors';
import baseStylesInitial from '../constants/baseStyles';
import clsx from 'clsx';
// Load Material components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// customize switch style according to mockup
const RenderSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: colors.lightPurple,
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: colors.lightPurple,
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${colors.darkGrey}`,
        backgroundColor: colors.darkGrey,
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

const SwitchCard = (props) => {
    // parent component props
    const { title } = props;
    // css states
    const classes = useStyles();
    const commonClasses = baseStylesInitial();
    return (
        <Grid
            container={true}
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.container}
            key={title}
        >
            <Typography className={clsx(classes.textColor, commonClasses.avenirNextDemiBold_regular_16)}>{title}</Typography>
            <FormControlLabel control={<RenderSwitch />} />
        </Grid>
    );
};
export default SwitchCard;
const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        background: colors.grey,
        marginBottom: '1.5rem',
        height: '6vh',
        paddingLeft: '1rem'
    },
    textColor: {
        color: colors.grey2,
    },
}));