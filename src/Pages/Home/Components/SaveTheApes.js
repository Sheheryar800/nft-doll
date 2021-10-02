import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import lost from '../../../Assets/Images/Question Mark/background.png'

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
                fontSize: '40px'
           },
           '& p':{
                textAlign: 'left'
           },
           [theme.breakpoints.down('sm')]:{
                width: '90%',
            },
        }
    },
})

function SaveTheApes() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div>
                <h1>Save the Apes</h1>
                <p>On the 26th of May 2016, our beloved, great Western Lowland gorilla Harambe, was fatally shot by zookeepers after a human child fell into his enclosure and he went to inspect the child. This caused widespread grief and anger as many believed that Harambe meant no harm to the child and did not have to die that day.</p>
                <p>After the tragic death of the alpha male Harambe, thousands of baby gorillas were left without their leader & parent, leaving them stranded, alone and lost.</p>
                <p>We need you to help these Lost Apes find a new home. </p>
                <p>Adopt these Lost Apes and help keep Harambe’s babies and his legacy alive.</p>
            </div>
            <div>
                <img src={lost} alt='' />    
            </div>
        </div>
    )
}

export default SaveTheApes
