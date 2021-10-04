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
                    <h2>How to mint / buy lost apes?</h2>
                    <p>Download MetaMask or another Web3 wallet to chrome or your mobile device. Load your wallet with ETH, connect wallet to the website and click the mint button. Approve the transaction in the popup, when the transaction is confirmed, the NFT will be in your wallet.</p>
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-offset="1"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <h2>How much do they cost and what is the total supply?</h2>
                    <p>The total supply of the Lost Apes collection is 7000. The drops will be available in two stages, the first being 0.07 eth, released before the game. The second drop will be a slightly higher price, as they will be released after the game is out.</p>
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-offset="1"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <h2>Does it cost a lot of gas for claiming and minting?</h2>
                    <p>There is of course a gas fee when minting NFT’s, however you’ll only have to pay it once. If the price is too high for you, you can wait for a time when the Ethereum gas fees are lower.</p>
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-offset="1"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <h2>What is the game about and how will it work?</h2>
                    <p>The game will use a community pot of funds to reward those who look after and nurture their apes, in Ethereum. Therefore, the game will primarily be based around raising your apes from babies to adulthood. If they are raised with care, you will earn money and maybe your NFT will even have a new baby! Stay tuned as we drop updates and teasers of what’s to come.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQ
