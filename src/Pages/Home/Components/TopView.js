import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import bg from '../../../Assets/Images/BACKGROUNDS 2000x3000/backOUTSIDEdoll.png';
import leftMonkey from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-22_09-04-32.jpg';
import rightMonkey from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-22_09-04-33.jpg';
import gif from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-25_07-12-15 (2).jpg'

const theme = createMuiTheme();

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        textAlign: 'center',
        width: '50%',
        backgroundColor: '#00000087',
        padding: '30px',
        borderRadius: '20px',
        [theme.breakpoints.down('md')]: {
            width: '60%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
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
        '& a':{
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
})
function TopView() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                {/* <img src={logo} alt='' /> */}
                <br />
                <img src={gif} alt='' width={'300'} />
                {/* <br /> */}
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vulputate turpis. Mauris eros lacus, tristique quis sollicitudin ac, venenatis sit amet diam. Vivamus maximus metus eu turpis accumsan, vel aliquam nulla varius. Ut aliquet nulla vel sem tempus, in convallis elit convallis. In gravida tincidunt ipsum a ornare. Morbi dignissim et sem nec scelerisque. Integer semper volutpat quam, vitae rutrum dui efficitur id. Suspendisse fermentum neque odio, sollicitudin iaculis arcu iaculis at. In cursus pulvinar turpis, vel gravida leo accumsan eget. Sed vel mauris sem. Sed non cursus velit.</p>
                {/* <Button href='https://lostapes.art/mint'>MINT A LOST APE</Button> */}
            </div>
            <div className={classes.monkey}>
                {/* <img src={leftMonkey} alt=''/>
                <img src={rightMonkey} alt=''/> */}
            </div>
        </div>
    )
}

export default TopView
