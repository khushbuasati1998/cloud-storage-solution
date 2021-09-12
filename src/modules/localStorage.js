import React from 'react';
import colors from '../constants/colors';
import baseStylesInitial from '../constants/baseStyles';
import clsx from 'clsx';
// Load Material components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Load images
import video from '../assets/video.png';
import image from '../assets/image.png';
import music from '../assets/music.png';
import secrete from '../assets/secrete.png';
// Load Reusable components
import Heading from '../commonComponents/pageHeading';
import TitleCard from '../commonComponents/titleCard';
import InputBox from '../commonComponents/inputBox';

const LocalStorage = (props) => {
    // css states
    const commonClasses = baseStylesInitial();
    const classes = useStyles();

    return (
        <Grid>
            <Heading title={'Local storage'} />
            <InputBox />
            <Grid
                container={true}
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.imgRoot}
            >
                <span>
                    <img src={video} alt="logo" className={classes.imgStyle} />
                    <Typography className={clsx(classes.greyFont, commonClasses.avenirNextDemiBold_regular_15)}>
                        Video
                    </Typography>
                </span>
                <span>
                    <img src={image} alt="logo" className={classes.imgStyle} />
                    <Typography className={clsx(classes.greyFont, commonClasses.avenirNextDemiBold_regular_15)}>
                        Image
                    </Typography>
                </span>
                <span>
                    <img src={music} alt="logo" className={classes.imgStyle} />
                    <Typography className={clsx(classes.greyFont, commonClasses.avenirNextDemiBold_regular_15)}>
                        Music
                    </Typography>
                </span>
                <span>
                    <img src={secrete} alt="logo" className={classes.imgStyle} />
                    <Typography className={clsx(classes.greyFont, commonClasses.avenirNextDemiBold_regular_15)}>
                        Archive
                    </Typography>
                </span>
            </Grid>
            <Grid>
                <TitleCard title={'Franky Wah - Aftertime'} secondTitle={'mp3 · 9.2 mb'} menu={true} prefixImg={music} />
                <TitleCard title={'Top secret archive'} secondTitle={'zip · 3.7 gb'} menu={true} prefixImg={secrete} />
                <TitleCard title={`Annie's new car`} secondTitle={'jpg · 4.8 mb'} menu={true} prefixImg={image} />
                <TitleCard title={'On the top of the world'} secondTitle={'doc · 2.3 mb '} menu={true} prefixImg={secrete} />
                <TitleCard title={'Fun times'} secondTitle={'mp4 · 9.2 mb'} menu={true} prefixImg={video} />
            </Grid>
        </Grid >
    );
}

export default LocalStorage;
const useStyles = makeStyles((theme) => ({
    imgStyle: {
        height: 72,
        marginBottom: 8
    },
    imgRoot: {
        margin: '2rem 0px'
    },
    greyFont: {
        color: colors.grey4,
        textAlign: 'center'
    },
    primaryFont: {
        color: theme.palette.primary.main,
        marginBottom: '0.8rem'
    }
}));