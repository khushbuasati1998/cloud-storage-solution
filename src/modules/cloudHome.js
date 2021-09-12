import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import ROUTE_KEYS from '../constants/routeKeys';
import { findIndex as _findIndex } from 'underscore';
import clsx from 'clsx';
// Load Material components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// Load Main Screen components
import UserProfile from './profile';
import Notification from './notification';
import UploadCardModal from './uploadModal';
import BottomAppBar from '../commonComponents/bottomAppBar';
import LocalStorage from './localStorage';
import HomePage from './home';
// Load menu icon images
import activeHome from '../assets/activeHome.png';
import inactiveHome from '../assets/inactiveHome.png';
import activeLocalStorage from '../assets/activeLocalStorage.png';
import inActiveLocal from '../assets/inActiveLocal.png';
import inActiveAdd from '../assets/inActiveAdd.png';
import activeNotification from '../assets/activeNotification.png';
import inActiveNotification from '../assets/inActiveNotification.png';
import activeProfile from '../assets/activeProfile.png';
import inActiveProfile from '../assets/inActiveProfile.png';

const CloudHome = (props) => {
    // css states
    const classes = useStyles();

    const { location } = props.history;
    const url = props.match.url;
    const routeLinks = {
        home: url + ROUTE_KEYS.HOME,
        localStorage: url + ROUTE_KEYS.LOCAL_STORAGE,
        notification: url + ROUTE_KEYS.NOTIFICATIONS,
        profile: url + ROUTE_KEYS.PROFILE,
        storageManagement: url + ROUTE_KEYS.STORAGE_MANAGEMENT
    };

    // Component states
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [activeScreenIndex, setActiveScreenIndex] = useState(0);
    // Component states ends here

    // Top Menu icons
    const TOPBAR_TABS = [
        {
            label: 'Home',
            link: routeLinks.home,
            active: activeHome,
            inActive: inactiveHome
        },
        {
            label: 'Local Storage',
            link: routeLinks.localStorage,
            active: activeLocalStorage,
            inActive: inActiveLocal
        },
        {
            label: 'Upload',
            link: url,
            active: inActiveAdd,
            inActive: inActiveAdd
        },
        {
            label: 'Notifications',
            link: routeLinks.notification,
            active: activeNotification,
            inActive: inActiveNotification
        },
        {
            label: 'Profile',
            link: routeLinks.profile,
            active: activeProfile,
            inActive: inActiveProfile
        },
    ];
    // Top Menu icons ends here

    useEffect(
        () => {
            setActiveScreen();
        },
        [location]
    );

    /**
     * active current screen menu item
     */
    const setActiveScreen = () => {
        const currentUrl = location.pathname;
        const screenIndex = _findIndex(TOPBAR_TABS, { link: currentUrl });
        setActiveScreenIndex(screenIndex > -1 ? screenIndex : 0);
    };

    /**
     * 
     * @param {*} iconIndex selected menu item index
     */
    const onMenuLinkClick = (iconIndex) => {
        iconIndex === 2 ? setShowUpdateModal(true) : setShowUpdateModal(false);
        setActiveScreenIndex(iconIndex);
    };

    const renderViews = () => {
        return (
            <Grid className={clsx({[classes.root]: activeScreenIndex !== 0 })}>
                <Route
                    exact={true}
                    path={routeLinks.notification}
                    render={(routeProps) => (
                        <Notification
                            {...routeProps}
                        />
                    )}
                />
                <Route
                    exact={true}
                    path={routeLinks.profile}
                    render={(routeProps) => (
                        <UserProfile
                            {...routeProps}
                        />
                    )}
                />
                <Route
                    exact={true}
                    path={routeLinks.home}
                    render={(routeProps) => (
                        <HomePage
                            {...routeProps}
                        />
                    )}
                />
                <Route
                    exact={true}
                    path={routeLinks.localStorage}
                    render={(routeProps) => (
                        <LocalStorage
                            {...routeProps}
                        />
                    )}
                />
            </Grid>
        );
    };

    return (
        <>
            {renderViews()}
            <BottomAppBar
                menuOptions={TOPBAR_TABS}
                activeIndex={activeScreenIndex}
                onLinkClick={onMenuLinkClick}
                {...props}
            />
            {
                showUpdateModal ?
                    <UploadCardModal
                        visible={showUpdateModal}
                        onClose={() => setShowUpdateModal(false)}
                    />
                    : null
            }
        </>
    );
};

export default CloudHome;
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem 2rem 0px 2rem',
    }
}));