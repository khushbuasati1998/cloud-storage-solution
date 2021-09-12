import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../constants/colors';
import baseStylesInitial from '../constants/baseStyles';
import clsx from 'clsx';
// Load Material components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const TitleCard = (props) => {
    // parent component props
    const { title, secondTitle, menu, prefixImg, tilteBold } = props;
    // css states
    const classes = useStyles();
    const commonClasses = baseStylesInitial();

    return (
        <ListItem
            button={menu ? false : true}
            className={clsx(classes.container, {
                [classes.containerBg]: !menu
            })}
            key={title}
        >
            {
                prefixImg ? <img src={prefixImg} alt="logo" className={classes.imgStyle} /> : null
            }
            <ListItemText
                primary={
                    <>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            className={clsx(classes.textColor, commonClasses.avenirNextDemiBold_regular_16,
                                { [classes.boldTitle]: tilteBold })}
                            noWrap={true}
                        >
                            {title}
                        </Typography>
                        {
                            secondTitle ?
                                <>
                                    <br />
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        className={clsx(classes.textColor, commonClasses.avenirNextDemiBold_regular_14)}
                                    >
                                        {secondTitle}
                                    </Typography>
                                </>
                                : null
                        }
                    </>
                }
            />
            {
                menu ?
                    <IconButton><MoreVertIcon className={classes.iconColor} /></IconButton>
                    : <IconButton><ChevronRightIcon className={classes.iconColor} /></IconButton>
            }
        </ListItem>
    );
};

export default TitleCard;

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        marginBottom: '1.5rem',
        height: '6vh'
    },
    containerBg: {
        background: colors.grey,
    },
    textColor: {
        color: colors.grey2,
    },
    secondaryText: {
        color: colors.grey2
    },
    iconColor: {
        color: colors.grey4
    },
    imgStyle: {
        height: 52,
        marginRight: '1.2rem'
    },
    boldTitle: {
        fontWeight: 'bold !important'
    }
}));