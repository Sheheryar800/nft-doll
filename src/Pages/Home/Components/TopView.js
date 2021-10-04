import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import bg from '../../../Assets/Images/Minting Section/background.jpg';
import logo from '../../../Assets/Images/Minting Section/Lost Apes Logo.png';
import leftMonkey from '../../../Assets/Images/Minting Section/Monkey1.png';
import rightMonkey from '../../../Assets/Images/Minting Section/Monkey2.png';
import gif from '../../../Assets/Images/Minting Section/preview.gif'
import { Button } from '@material-ui/core';
// import branch1 from '../../../Assets/Images/Minting Section/branch1.png'
import branch2 from '../../../Assets/Images/Minting Section/branch2.png'

const theme = createMuiTheme();

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${bg})`,
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
            backgroundColor: '#131e21',
            color: '#ffbc00',
            padding: '10px 20px',
            '&:hover':{
                backgroundColor: '#131e21',
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
            bottom: '0 !important',
            left: '40px'
        },
        '& img:last-child': {
            position: 'absolute',
            bottom: '0 !important',
            right: '40px',
            width: '25%',
            [theme.breakpoints.down('sm')]: {
                width: '35%',
            },
            [theme.breakpoints.down('xs')]: {
                width: '45%',
            },
        },
    },
    branch: {
        backgroundImage: `url(${branch2})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
    },
})
function TopView() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.branch}>
                <div className={classes.logo}>
                    <img src={logo} alt='' />
                    <br />
                    <img src={gif} alt='' />
                    <br />
                    <Button>MINT A LOST APE</Button>
                </div>
                <div className={classes.monkey}>
                    <img src={leftMonkey} alt=''/>
                    <img src={rightMonkey} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default TopView
