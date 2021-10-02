import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import img1 from '../../../Assets/Images/Team/AperahamLincoln.jpg';
import img2 from '../../../Assets/Images/Team/LeonardoDeMonke.jpg';
import img3 from '../../../Assets/Images/Team/DwapeJohnson.jpg';
import img4 from '../../../Assets/Images/Team/Apricot.jpg';

import social1 from '../../../Assets/Images/Team/twitter.png';
import social2 from '../../../Assets/Images/Team/discord.png';
import social3 from '../../../Assets/Images/Team/opensea.png';
import social4 from '../../../Assets/Images/Team/etherscan.png';


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
})

function Team() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <h1>Team</h1>
            <div className={classes.team}>
                <div>
                    <img src={img1} alt='' />
                    <h3>Aperaham Lincoln</h3>
                    <p>Developer</p>
                </div>
                <div>
                    <img src={img2} alt='' />
                    <h3>Leonardo Da Monke</h3>
                    <p>Artist</p>
                </div>
                <div>
                    <img src={img3} alt='' />
                    <h3>Dwape Johnson</h3>
                    <p>Marketer</p>
                </div>
                <div>
                    <img src={img4} alt='' />
                    <h3>Apericot</h3>
                    <p>Researcher</p>
                </div>
            </div>
            <div className={classes.icons}>
                <a href='https://twitter.com/lostapes_nft?s=21'>
                    <img src={social1} alt='' />
                </a>
                <a href='discord.com/invite/thyjT45Z'>
                    <img src={social2} alt='' />
                </a>
                <a href='https://Opensea.com'>
                    <img src={social3} alt='' />
                </a>
                <a href='https://etherscan.io'>
                    <img src={social4} alt='' />
                </a>
            </div>
        </div>
    )
}

export default Team
