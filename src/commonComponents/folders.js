import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../constants/colors';
// Load React material components
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
// Load Reusable components
import TitleCard from './titleCard';

const FolderCard = (props) => {
    // css states
    const classes = styles();
    // parent component props
    const { title, secondTitle, images } = props.data;

    return (
        <Grid className={classes.root}>
            <TitleCard title={title} secondTitle={secondTitle} menu={true} tilteBold={true} />
            {
                images && images.length ?
                    <AvatarGroup max={4} className={classes.imgRoot}>
                        {
                            images.map((item) => (
                                <Avatar alt="Remy Sharp" src={item.imgName} />
                            ))
                        }
                    </AvatarGroup>
                    : null
            }
        </Grid>
    );
};
const styles = makeStyles((theme) => ({
    root: {
        background: colors.grey,
        padding: 15,
        borderRadius: 32,
        margin: '1rem'
    },
    iconColor: {
        color: colors.grey4
    },
    imgRoot: {
        paddingLeft: 13
    }
}));
export default FolderCard;