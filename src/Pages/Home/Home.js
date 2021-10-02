import React from 'react';
import Planned from './Components/Planned';
import SaveTheApes from './Components/SaveTheApes';
import TopView from './Components/TopView';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import RoadMap from './Components/RoadMap';
import FAQ from './Components/FAQ';
import Team from './Components/Team';

const theme = createMuiTheme();

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        width: '70%',
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '95%',
        },
    },
})

function Home() {
    const classes = useStyles()
    return (
        <div>
            <TopView />
            <div className={classes.root}>
                <Planned />
                <SaveTheApes />
                <RoadMap />
                <FAQ />
                <Team />
            </div>
        </div>
    )
}

export default Home
