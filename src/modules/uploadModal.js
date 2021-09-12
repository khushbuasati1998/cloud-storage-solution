import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../constants/colors';
import baseStylesInitial from '../constants/baseStyles';
import clsx from 'clsx';
// Load Material components
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
// Load menu icon images
import scan from '../assets/scan.png';
import uploadItem from '../assets/uploadItem.png';
import photo from '../assets/photo.png';
import close from '../assets/close.png';

const Transition = React.forwardRef(function Transition1(
    props1, ref,
) {
    return <Slide direction="up" ref={ref} {...props1} />;
});

const UploadCardModal = (props) => {
    // css states
    const classes = useStyles();
    const commonClasses = baseStylesInitial();
    // parent component props
    const { visible, onClose } = props;

    /**
     * function to close modal
     * @param {*} event 
     * @param {*} reason 
     */
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        onClose();
    };

    return (
        <Dialog
            open={visible}
            onClose={handleClose}
            fullWidth={true}
            maxWidth={'xl'}
            keepMounted={true}
            TransitionComponent={Transition}
            classes={{ paper: classes.modalStyle, scrollPaper: classes.scrollPaper }}
        >
            <DialogContent>
                <Grid
                    container={true}
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <span className={classes.scanBtn}>
                        <IconButton><img src={scan} alt="logo" /></IconButton>
                        <Typography className={clsx(classes.greyFont, commonClasses.avenirNextDemiBold_regular_12)}>
                            Scan
                        </Typography>
                    </span>
                    <span>
                        <IconButton><img src={photo} alt="logo" /></IconButton>
                        <Typography className={clsx(classes.greyFont, commonClasses.avenirNextDemiBold_regular_12)}>
                            Photo
                        </Typography>
                    </span>
                    <span className={classes.scanBtn}>
                        <IconButton><img src={uploadItem} alt="logo" /></IconButton>
                        <Typography className={clsx(classes.greyFont, commonClasses.avenirNextDemiBold_regular_12)}>
                            Upload
                        </Typography>
                    </span>
                </Grid>
                <Grid
                    container={true}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <IconButton onClick={handleClose}><img src={close} alt="logo" /></IconButton>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
export default UploadCardModal;
const useStyles = makeStyles((theme) => ({
    modalStyle: {
        width: '100vw',
        minHeight: '43vh',
        borderRadius: 0,
        bottom: '-14%',
        paddingBottom: '1rem',
        borderTopRightRadius: '10rem',
        borderTopLeftRadius: '10rem',
    },
    scrollPaper: {
        alignItems: 'flex-end',
        marginLeft: '-50px',
        marginRight: '-50px',
    },
    greyFont: {
        color: colors.grey4,
        textAlign: 'center'
    },
    scanBtn: {
        paddingTop: '2rem'
    }
}));