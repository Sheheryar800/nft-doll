import React from "react";
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import img1 from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-24_04-30-47 (2).jpg';
import img2 from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-25_07-12-15 (2).jpg';
import img3 from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-25_07-12-14.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const theme = createMuiTheme();

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
        '& h1':{
            fontSize: '40px',
            fontWeight: 'bolder',
            marginBottom: "70px",
        },
        '& h2':{
            textAlign: 'left',
            fontSize: '30px'
        },
        '& p':{
            width: '100%',
            textAlign: 'left',
            fontSize: '15px',
            [theme.breakpoints.down('xs')]: {
                width: '100%',
            },
        },
        '& .div':{
            backgroundColor: '#00000087',
            padding: '1px 20px 20px 20px',
            borderRadius: '15px',
            marginBottom: '25px'
        },
    },
    images: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '& div':{
            width: '33.333333%',
            padding: '10px',
            '& img': {
                width: '100%',
                borderRadius: '15px'
            }
        },
    },
})

function Planned() {
    const classes = useStyles()
    AOS.init()
      
    return (
        <div className={classes.root}>
            {/* <h1>Lost Apes. What do we have planned?</h1> */}
            <div
                data-aos="fade-in"
                data-aos-offset="-200"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className='div changeFont'
            >
                <h2>Title:</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta ipsum vitae egestas gravida. Aliquam rutrum tempus lorem et feugiat. Nulla sit amet luctus purus, vitae convallis felis. Praesent enim dolor, ultrices eget aliquet nec, tincidunt sit amet magna. Quisque vehicula tellus et massa porttitor, ultrices rhoncus turpis vulputate. Duis nec feugiat mauris, id elementum turpis. Donec eget elementum felis. Phasellus in elementum nibh, ut aliquet ipsum. Vestibulum congue porttitor nunc ut sodales. Pellentesque placerat sollicitudin lorem, nec iaculis urna semper ut. Aenean auctor, nibh ac tempus faucibus, velit urna eleifend risus, id viverra est eros vitae nisi.</p>
            </div>
            <div
                data-aos="fade-in"
                data-aos-offset="-200"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className='div'
            >
                <h2>Title:</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta ipsum vitae egestas gravida. Aliquam rutrum tempus lorem et feugiat. Nulla sit amet luctus purus, vitae convallis felis. Praesent enim dolor, ultrices eget aliquet nec, tincidunt sit amet magna. Quisque vehicula tellus et massa porttitor, ultrices rhoncus turpis vulputate. Duis nec feugiat mauris, id elementum turpis. Donec eget elementum felis. Phasellus in elementum nibh, ut aliquet ipsum. Vestibulum congue porttitor nunc ut sodales. Pellentesque placerat sollicitudin lorem, nec iaculis urna semper ut. Aenean auctor, nibh ac tempus faucibus, velit urna eleifend risus, id viverra est eros vitae nisi.</p>
            </div>
            <div className={classes.images}>
                <div
                    data-aos="fade-in"
                    data-aos-offset="-200"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img src={img1} alt='' />
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-offset="-200"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img src={img2} alt='' />
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-offset="-200"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img src={img3} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Planned
