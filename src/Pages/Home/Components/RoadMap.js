import React from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AOS from 'aos';
import 'aos/dist/aos.css';


const useStyles = makeStyles({
    root: {
        '& li':{
            backgroundColor: '#0d5b4d',
            padding: '1px 20px 5px 20px',
            borderRadius: '15px',
            marginBottom: '15px'
        }
    },
    avatar:{
        padding: '9px',
        color: '#ffbc00 !important',
        backgroundColor: '#131e21 !important',
        marginRight: '10px',
    }
})

function RoadMap() {
    const classes = useStyles()
    AOS.init()
    return (
        <div className={classes.root}>
            <h1
                data-aos="fade-in"
                data-aos-offset="-50"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >ROADMAP</h1>
            <List sx={{ width: '100%'}}>
                <ListItem 
                    data-aos="fade-in"
                    data-aos-offset="-50"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                    className='list'
                >
                    <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        25%
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText >
                        <p>Random Airdrop of NFT's</p>
                        <p>More aggressive marketing</p>
                    </ListItemText>
                </ListItem>
                <ListItem
                    data-aos="fade-in"
                    data-aos-offset="-50"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        50%
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText >
                        <p>Preview of the game</p>
                        <p>Readoption of $10,000 worth of apes.</p>
                    </ListItemText>
                </ListItem>
                <ListItem
                    data-aos="fade-in"
                    data-aos-offset="-50"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        75%
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText >
                        <p>Second drop of Lost Apes</p>
                        <p>Merch roll out begins</p>
                        <p>Updated game teaser</p>
                        <p>Add money to community wallet for game launch.</p>
                    </ListItemText>
                </ListItem>
                <ListItem
                    data-aos="fade-in"
                    data-aos-offset="50"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        100%
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText >
                        <p>Release of game (lost apes price sky rockets)</p>
                        <p>All apes are rehoused </p>
                        <p>Day one holders receive a special surprise ;)</p>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default RoadMap
