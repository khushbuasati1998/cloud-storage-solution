import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../constants/colors';
// Load React material components
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const InputBox = (props) => {
    // css states
    const classes = styles();
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon color={colors.grey4} />
            </div>
            <InputBase
                placeholder="Search"
                classes={{ input: classes.inputInput }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
};
const styles = makeStyles((theme) => ({
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.grey4
    },
    search: {
        position: 'relative',
        borderRadius: 14,
        backgroundColor: colors.grey,
        '&:hover': {
            backgroundColor: colors.grey,
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
export default InputBox;