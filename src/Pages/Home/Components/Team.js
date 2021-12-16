import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import img1 from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-22_09-04-32.jpg';
import img2 from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-22_09-04-33.jpg';
import img3 from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-25_07-12-15 (2).jpg';
import img4 from '../../../Assets/Images/bishopbd-attachments/photo_2021-11-24_04-30-47 (2).jpg';

import social1 from '../../../Assets/Images/social/twitter.png';
import social2 from '../../../Assets/Images/social/discord.png';
import social3 from '../../../Assets/Images/social/opensea.png';
import social4 from '../../../Assets/Images/social/etherscan.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const theme = createMuiTheme();

const useStyles = makeStyles({
    root: {
        marginTop: '60px',
        '& h1':{
            marginBottom: '50px'
        },
    },
    team: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
        },
        '& div':{
            width: '25%',
            [theme.breakpoints.down('sm')]:{
                width: '50%'
            },
            [theme.breakpoints.down('xs')]:{
                width: '60%'
            },
            padding: '10px',
            '& img':{
                width: '100%',
                borderRadius: '15px',
            },
        }
    },
    icons: {
        marginTop: '70px',
        marginBottom: '30px',
        '& a':{
            marginLeft: '15px',
            marginRight: '15px'
        },
    },
    copy:{
        marginTop: '50px',
        marginBottom: '20px',
        '& span':{
            marginTop: '10px'
        }
    }
})

function Team() {
    const classes = useStyles()
    AOS.init()
    return (
        <div className={classes.root}>
            <h1
                data-aos="fade-in"
                data-aos-offset="1"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                Team
            </h1>
            <div className={classes.team}>
                <div
                    data-aos="fade-in"
                    data-aos-offset="1"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img src={img1} alt='' />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Developer</p>
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-offset="1"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img src={img2} alt='' />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Artist</p>
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-offset="1"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img src={img3} alt='' />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Marketer</p>
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-offset="1"
                    data-aos-delay="900"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img src={img4} alt='' />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Researcher</p>
                </div>
            </div>
            <div className={classes.icons}>
                <a href='#'
                    data-aos="fade-in"
                    data-aos-offset="-400"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img src={social1} alt='' />
                </a>
                <a href='#'
                    data-aos="fade-in"
                    data-aos-offset="-400"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img src={social2} alt='' />
                </a>
                <a href='#'
                    data-aos="fade-in"
                    data-aos-offset="-400"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img src={social3} alt='' />
                </a>
                <a href='#'
                    data-aos="fade-in"
                    data-aos-offset="-400"
                    data-aos-delay="900"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img src={social4} alt='' />
                </a>
            </div>
            <div className={classes.copy}
                data-aos="fade-in"
                data-aos-offset="-400"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <span>&copy;</span> copyright: 2021 Lost Apes
            </div>
        </div>
    )
}

export default Team
