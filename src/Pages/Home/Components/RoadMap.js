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
            backgroundColor: '#191936',
            padding: '1px 20px 5px 20px',
            borderRadius: '15px',
            marginBottom: '15px'
        }
    },
    avatar:{
        padding: '9px',
        color: '#0d5b4d !important',
        backgroundColor: '#0a0a0a !important',
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin tellus at tempor semper. Aliquam ut dui ex. Ut ac.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin tellus at tempor semper. Aliquam ut dui ex. Ut ac.</p>
                        <p>Nam accumsan magna sed lectus fringilla, a dapibus ante ornare.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin tellus at tempor semper. Aliquam ut dui ex. Ut ac.</p>
                        <p>Aenean aliquam erat eu finibus mollis.</p>
                        <p>Vivamus convallis nisl at nibh tincidunt, sed volutpat eros rhoncus.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin tellus at tempor semper. Aliquam ut dui ex. Ut ac.</p>
                        <p>Proin quis magna interdum, porta massa a, cursus diam.</p>
                        <p>Donec rutrum lectus vel augue efficitur tristique.</p>
                        <p>Fusce in metus tincidunt, ornare libero a, consequat nulla.</p>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default RoadMap
