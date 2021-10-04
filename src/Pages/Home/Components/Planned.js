import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import img1 from '../../../Assets/Images/What do we have planned/1.png';
import img2 from '../../../Assets/Images/What do we have planned/2.png';
import img3 from '../../../Assets/Images/What do we have planned/3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const theme = createMuiTheme();

const useStyles = makeStyles({
    root: {
        marginTop: '60px',
        '& h1':{
            fontSize: '40px',
            fontWeight: 'bolder',
            marginBottom: "70px"
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
            backgroundColor: '#0d5b4d',
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
    }
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
                className='div'
            >
                <h2>The Project:</h2>
                <p>Founded by a dedicated and passionate team, lost apes is most certainly the cutest NFT drop on the blockchain. We aim to ensure Harambe’s legacy lives on forever by making Lost Apes one of the most unforgettable NFT collection projects in the meta-verse, dedicated to the great gorilla.</p>
                <p>Along this journey, we will build a loving community of new Lost Ape adopters, and together we can bring to life the end goal of this project.</p>
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
                <h2>The Game:</h2>
                <p>The final milestone for this project is to create & release our own game application. In-which, we incorporate the power of the ERC-721 ecosystem and reward Lost Ape owners with the luxury of tending to their new babies and earning rewards from the community wallet pool while doing so. We have hired skilled third party developers who are in the process of bringing this idea to life and we will keep the community updated!</p>
                <p>Only 7,000 Lost Apes will ever be released, within two stages, and the game will be exclusive to Lost Ape NFT owners. So make sure you mint yours!</p>
                <p>More details on the game and it’s features will be released as our community grows and the Lost Apes get adopted, without parents there’s nobody to look after them!</p>
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
