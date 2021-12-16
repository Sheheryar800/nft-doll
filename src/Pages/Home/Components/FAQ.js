import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';


const useStyles = makeStyles({
    root: {
        textAlign: 'left'
    },
})

function FAQ() {
    const classes = useStyles()
    AOS.init()
    return (
        <div>
            <h1
                data-aos="fade-in"
                data-aos-offset="1"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                FAQ
            </h1>
            <div className={classes.root}>
                <div
                    data-aos="fade-in"
                    data-aos-offset="1"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h2>
                    <p>Nulla et ligula sit amet justo egestas molestie.</p>
                    <p>Vivamus efficitur augue vel ex molestie, in dignissim neque elementum.</p>
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-offset="1"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <h2>Etiam finibus ante non cursus tempus?</h2>
                    <p>Vestibulum sit amet tortor pulvinar, suscipit libero eleifend, lobortis arcu.</p>
                    <p>Sed sollicitudin mauris sit amet risus volutpat, id sodales tortor elementum.</p>
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-offset="1"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <h2>Integer rutrum nisi vel dui tincidunt, sed ornare tellus porta?</h2>
                    <p>Aenean imperdiet nulla eget quam porttitor malesuada.</p>
                    <p>Maecenas ac ex venenatis, iaculis nisi et, eleifend lacus.</p>
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-offset="1"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <h2>Vestibulum dignissim justo quis augue fermentum efficitur?</h2>
                    <p>Nam accumsan magna sed lectus fringilla, a dapibus ante ornare.</p>
                    <p>Nam imperdiet sapien vel nisi hendrerit, eget accumsan nunc accumsan.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQ
