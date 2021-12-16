import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import video from '../../../Assets/Images/BACKGROUNDS 2000x3000/Doll_Face_Preview.mp4';
import logo from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-24_10-18-46.png'
import bg from '../../../Assets/Images/BACKGROUNDS 2000x3000/backOUTSIDEdoll.png'
import { Grid } from '@material-ui/core';

const theme = createMuiTheme();

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& video':{
            position: 'absolute',
            // objectFit: 'cover',
            height: '100vh',
            width: '100%'
        },
    },
    logo: {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#00000087',
        borderRadius: '20px',
        height: '100vh',
    },
    video: {
        [theme.breakpoints.up('md')]:{
            objectFit: 'cover'
        },
        [theme.breakpoints.down('xs')]:{
            objectFit: 'cover'
        },
    }
})
function TopView() {
    const classes = useStyles()
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <video autoplay muted loop controls className={classes.video} style={{width: '100%', height: '100vh'}}>
                        <source src={video} type='video/mp4 ' />
                    </video>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.logo}>
                        <br />
                        <img src={logo} alt='' width={'300'} />
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p style={{padding: '0 30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vulputate turpis. Mauris eros lacus, tristique quis sollicitudin ac, venenatis sit amet diam. Vivamus maximus metus eu turpis accumsan, vel aliquam nulla varius. Ut aliquet nulla vel sem tempus, in convallis elit convallis. In gravida tincidunt ipsum a ornare. Morbi dignissim et sem nec scelerisque. Integer semper volutpat quam, vitae rutrum dui efficitur id. Suspendisse fermentum neque odio, sollicitudin iaculis arcu iaculis at. In cursus pulvinar turpis, vel gravida leo accumsan eget. Sed vel mauris sem. Sed non cursus velit.</p>
                    </div>
                </Grid>
            </Grid>
            {/* <div className={classes.root}>
                <video autoplay muted loop controls>
                    <source src={bg} type='video/mp4 ' />
                </video>
                <div className={classes.logo}>
                    <br />
                    <img src={logo} alt='' width={'300'} />
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vulputate turpis. Mauris eros lacus, tristique quis sollicitudin ac, venenatis sit amet diam. Vivamus maximus metus eu turpis accumsan, vel aliquam nulla varius. Ut aliquet nulla vel sem tempus, in convallis elit convallis. In gravida tincidunt ipsum a ornare. Morbi dignissim et sem nec scelerisque. Integer semper volutpat quam, vitae rutrum dui efficitur id. Suspendisse fermentum neque odio, sollicitudin iaculis arcu iaculis at. In cursus pulvinar turpis, vel gravida leo accumsan eget. Sed vel mauris sem. Sed non cursus velit.</p>
                </div>
            </div> */}
        </>
    )
}

export default TopView
