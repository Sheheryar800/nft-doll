import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import bf from '../../../Assets/Images/Minting Section/background.jpg';
import logo from '../../../Assets/Images/Minting Section/Lost Apes Logo.png';
import leftMonkey from '../../../Assets/Images/Minting Section/Monkey1.png';
import rightMonkey from '../../../Assets/Images/Minting Section/Monkey2.png';
import gif from '../../../Assets/Images/Minting Section/preview.gif'
import { Button } from '@material-ui/core';

const theme = createMuiTheme();

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${bf})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    },
    logo: {
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '50px'
        },
        '& img:first-child': {
            width: '50%',
            [theme.breakpoints.down('xs')]: {
                width: '100%',
            },
        },
        '& img:nth-child(3)': {
            width: '20%',
            border: '8px solid black',
            [theme.breakpoints.down('sm')]: {
                width: '40%',
            },
            [theme.breakpoints.down('xs')]: {
                width: '50%',
            },
        },
        '& button':{
            fontSize: '20px',
            backgroundColor: 'black',
            color: 'yellow',
            padding: '10px 20px',
            '&:hover':{
                backgroundColor: 'black',
            }
        }
    },
    monkey: {
        '& img': {
            width: '20%',
            [theme.breakpoints.down('sm')]: {
                width: '30%',
            },
            [theme.breakpoints.down('xs')]: {
                width: '40%',
            },
        },
        '& img:first-child': {
            position: 'absolute',
            bottom: '0',
            left: '40px'
        },
        '& img:last-child': {
            position: 'absolute',
            bottom: '0',
            right: '40px',
        },
    },
})
function TopView() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <img src={logo} alt='' />
                <br />
                <img src={gif} alt='' />
                <br />
                <Button>MINT A LOST APE</Button>
            </div>
            <div className={classes.monkey}>
                <img src={leftMonkey} alt='' />
                <img src={rightMonkey} alt='' />
            </div>
        </div>
    )
}

export default TopView
