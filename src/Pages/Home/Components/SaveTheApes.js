import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import lost from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-22_09-04-36.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const theme = createMuiTheme();

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
            marginTop: '50px',
            marginBottom: '50px',
        },
        '& div':{
            width: '50%',
            textAlign: 'center',
            padding: '15px',
           '& img' :{
               width: '90%',
               borderRadius: '15px'
           },
           '& h1':{
                fontSize: '35px'
           },
           '& p':{
                textAlign: 'left'
           },
           [theme.breakpoints.down('sm')]:{
                width: '90%',
            },
        },
        '& .div':{
            backgroundColor: '#00000087',
            borderRadius: '15px',
        },
    },
})

function SaveTheApes() {
    const classes = useStyles()
    AOS.init()
    return (
        <div className={classes.root} 
            data-aos="fade-in"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <div className='div'>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta ipsum vitae egestas gravida. Aliquam rutrum tempus lorem et feugiat. Nulla sit amet luctus purus, vitae convallis felis. Praesent enim dolor, ultrices eget aliquet nec, tincidunt sit amet magna. Quisque vehicula tellus et massa porttitor, ultrices rhoncus turpis vulputate. Duis nec feugiat mauris, id elementum turpis. Donec eget elementum felis. Phasellus in elementum nibh, ut aliquet ipsum. Vestibulum congue porttitor nunc ut sodales. Pellentesque placerat sollicitudin lorem, nec iaculis urna semper ut. Aenean auctor, nibh ac tempus faucibus, velit urna eleifend risus, id viverra est eros vitae nisi. Aenean auctor, nibh ac tempus faucibus, velit urna eleifend risus, id viverra est eros vitae nisi.</p>
            </div>
            <div>
                <img src={lost} alt='' />    
            </div>
        </div>
    )
}

export default SaveTheApes
