import React from 'react';
import colors from '../constants/colors';
import baseStylesInitial from '../constants/baseStyles';
import clsx from 'clsx';
// Load material components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
// Load Reusable components
import Heading from '../commonComponents/pageHeading';
import TitleCard from '../commonComponents/titleCard';
import SwitchCard from '../commonComponents/switchCard';
// Load images
import userImg from '../assets/profileImg.jpeg';
import editIconImg from '../assets/edit.png';

const UserProfile = (props) => {
    // css states
    const commonClasses = baseStylesInitial();
    const classes = useStyles();
    return (
        <Grid>
            <Heading title={'Profile'} icon={editIconImg}/>
            <Grid className={commonClasses.inlineFlex}>
                <img src={userImg} alt="logo" className={classes.profile} />
                <span className={classes.headingRoot}>
                    <Typography className={clsx(classes.heading, classes.primaryFont, commonClasses.avenirNextDemiBold_bold_18)}>
                        Jessie Roberts
                    </Typography>
                    <br />
                    <Typography className={clsx(classes.heading, classes.greyFont, commonClasses.avenirNextDemiBold_regular_18)}>
                        1458 files . 25 folders
                    </Typography>
                </span>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                className={clsx(commonClasses.inlineFlex, classes.progressBarHeading)}
            >
                <Typography className={clsx(classes.primaryFont, commonClasses.avenirNextDemiBold_bold_24)}
                >
                    32,5 GB free&nbsp;
                </Typography>
                <Typography
                    className={clsx(classes.greyFont, commonClasses.avenirNextDemiBold_bold_18)}
                >
                    of 100 GB
                </Typography>
            </Grid>
            <LinearProgress
                variant="determinate"
                value={65}
                className={classes.progressBar}
                classes={{
                    bar: classes.insideProgressBar,
                    barColorPrimary: classes.progressColor
                }}
            />
            <Button variant="outlined" color="primary" fullWidth={true} className={classes.buttonRoot}>
                Increase storage space
            </Button>
            <TitleCard title={'Storage management'} />
            <TitleCard title={'Devices'} secondTitle={'iPhone, Macbook, iPad'} />
            <SwitchCard title={'Camera uploads'} />
            <SwitchCard title={'Use data for file transfer'} />
        </Grid>
    );
}

export default UserProfile;
const useStyles = makeStyles((theme) => ({
    profile: {
        height: 90,
        width: 90,
        borderRadius: '2rem'
    },
    heading: {
        textAlign: 'left',
        marginLeft: '1.5rem',
        marginBottom: '-11px'
    },
    headingRoot: {
        margin: 'auto 0px'
    },
    progressBarHeading: {
        margin: '1rem 0px'
    },
    insideProgressBar: {
        borderRadius: 'inherit'
    },
    progressBar: {
        height: 8,
        borderRadius: 5,
    },
    progressColor: {
        backgroundColor: colors.pink
    },
    buttonRoot: {
        borderRadius: 22,
        borderWidth: 2,
        color: colors.pink,
        borderColor: colors.pink,
        fontSize: 16,
        fontWeight: 'bold',
        margin: '1.5rem 0px',
        '&:hover': {
            borderWidth: 2,
            borderColor: colors.pink,
        },
    },
    greyFont: {
        color: colors.grey4
    },
    primaryFont: {
        color: theme.palette.primary.main,
    }
}));