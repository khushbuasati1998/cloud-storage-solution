import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import uploadImg from '../assets/upload.png';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import colors from '../constants/colors';
import baseStylesInitial from '../constants/baseStyles';
import clsx from 'clsx';
import InputBox from '../commonComponents/inputBox';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabStyles from '../constants/tabs';
import FolderCard from '../commonComponents/folders';
import { folderCardList, homeTabList } from './utils/constantData';

const HomePage = (props) => {
    // css states
    const tabClasses = TabStyles();
    const commonClasses = baseStylesInitial();
    const classes = useStyles();

    // Component states start here
    const [activeTab, setActiveTab] = useState(1);
    // Component states ends here

    /**
     * handle change for tabs
     * @param {*} event 
     * @param {*} newValue selected tab value
     */
    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Grid className={classes.root}>
            <Grid className={classes.topRoot}>
                <Typography className={clsx(classes.heading, classes.whiteFont, commonClasses.avenirNextDemiBold_bold_34)}>
                    Hello Jessie,
                </Typography>
                <Typography className={clsx(classes.heading, classes.greyFont, commonClasses.avenirNextDemiBold_bold_18)}>
                    at the moment you have
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    className={clsx(commonClasses.inlineFlex, classes.progressBarHeading)}
                >
                    <>
                        <Typography className={clsx(classes.whiteFont, commonClasses.avenirNextDemiBold_bold_24)}>
                            32,5 GB free&nbsp;
                        </Typography>
                        <Typography
                            className={clsx(classes.greyFont, commonClasses.avenirNextDemiBold_bold_18)}>
                            of 100 GB
                        </Typography>
                    </>
                    <IconButton className={classes.imgStyle}><img src={uploadImg} alt="logo" /></IconButton>
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
            </Grid>
            <Grid className={classes.modalRoot}>
                <InputBox />
                <Grid
                    container={true}
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Tabs
                        classes={{ flexContainer: classes.tabsContainer, indicator: tabClasses.activeIndicator }}
                        className={tabClasses.tabs}
                        value={activeTab}
                        onChange={handleChange}
                        indicatorColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {
                            homeTabList.map((item, index) => {
                                return (
                                    <Tab
                                        key={item.value}
                                        className={clsx(tabClasses.tab,
                                            { [tabClasses.activeTab]: activeTab === index }
                                        )}
                                        label={item.label}
                                    />
                                );
                            })
                        }
                    </Tabs>
                </Grid>
                <Grid
                    container={true}
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    {
                        folderCardList.map((item) => (
                            <FolderCard data={item} />
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HomePage;
const useStyles = makeStyles((theme) => ({
    root: {
        background: colors.darkBlue
    },
    topRoot: {
        padding: '2rem'
    },
    profile: {
        height: 90,
        width: 90,
        borderRadius: '2rem'
    },
    heading: {
        textAlign: 'left',
        marginBottom: '0.6rem'
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
        color: colors.grey5
    },
    primaryFont: {
        color: theme.palette.primary.main,
    },
    whiteFont: {
        color: colors.white
    },
    imgStyle: {
        marginLeft: 'auto'
    },
    modalRoot: {
        backgroundColor: colors.white,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: '3rem',
        padding: '3rem'
    }
}));