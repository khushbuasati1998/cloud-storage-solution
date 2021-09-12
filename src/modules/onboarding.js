import React from 'react';
// Load material components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// Load imgae
import onboardingImg from '../assets/Onboarding.png';
// Load routes 
import ROUTE_KEYS from '../constants/routeKeys';

const Onboarding = (props) => {
    // css states
    const classes = useStyles();
    /**
     * function to go home screen
     */
    const gotoHomePage = () => {
        props.history.push(ROUTE_KEYS.baseURL + ROUTE_KEYS.HOME);
    };
    return (
        <Grid>
            <img src={onboardingImg} className={classes.imgRoot} alt="logo" onClick={gotoHomePage}/>
        </Grid>
    );
}
export default Onboarding;
const useStyles = makeStyles((theme) => ({
    imgRoot: {
        height: '100vh',
        cursor: 'pointer'
    }
}));