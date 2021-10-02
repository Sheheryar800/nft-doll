import React from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
    root: {
        
    },
    avatar:{
        padding: '7px',
        color: '#131e21 !important',
        backgroundColor: '#dcfaf8 !important',
        marginRight: '10px',
    }
})

function RoadMap() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <h1>ROADMAP</h1>
            <List sx={{ width: '100%'}}>
                <ListItem>
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
                <ListItem>
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
                <ListItem>
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
                <ListItem>
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
