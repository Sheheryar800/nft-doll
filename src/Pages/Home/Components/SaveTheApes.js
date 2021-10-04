import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import lost from '../../../Assets/Images/Question Mark/background.png';
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
            backgroundColor: '#0d5b4d',
            padding: '1px 20px 5px 20px',
            borderRadius: '15px',
            marginBottom: '25px'
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
                <h1>Save the Apes</h1>
                <p>On the 26th of May 2016, our beloved, great Western Lowland gorilla Harambe, was fatally shot by zookeepers after a human child fell into his enclosure and he went to inspect the child. This caused widespread grief and anger as many believed that Harambe meant no harm to the child and did not have to die that day.</p>
                <p>After the tragic death of the alpha male Harambe, thousands of baby gorillas were left without their leader & parent, leaving them stranded, alone and lost.</p>
                <p>We need you to help these Lost Apes find a new home. Adopt these Lost Apes and help keep Harambe’s babies and his legacy alive.</p>
                <p></p>
            </div>
            <div>
                <img src={lost} alt='' />    
            </div>
        </div>
    )
}

export default SaveTheApes
