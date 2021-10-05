import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../../redux/blockchain/blockchainActions";
import { fetchData } from "../../../redux/data/dataActions";
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import img1 from '../../../Assets/Images/What do we have planned/1.png';
import img2 from '../../../Assets/Images/What do we have planned/2.png';
import img3 from '../../../Assets/Images/What do we have planned/3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i1 from '../../../Assets/Images/Minting Section/1.png'
import { Button } from "@material-ui/core";

const theme = createMuiTheme();

const useStyles = makeStyles({
    root: {
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
    },
    i1Img: {
        '& img':{
            width: '35%',
            [theme.breakpoints.down('sm')]: {
                width: '60%',
            },
        }
    },
    connect: {
        backgroundColor: '#0d5b4d',
        width: '100px',
        height: '40px',
        color: '#dcfaf8',
        marginBottom: '20px',
        '&:hover':{
            backgroundColor: '#0d5b4d',
        }
    },
})

function Planned() {
    const classes = useStyles()
    AOS.init()
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
    const [claimingNft, setClaimingNft] = useState(false);

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          dispatch(fetchData(blockchain.account));
        }
    };
    
    useEffect(() => {
    getData();
    }, [blockchain.account]);

    const claimNFTs = (_amount) => {
        if (_amount <= 0) {
          return;
        }
        setFeedback("Minting your Lost Ape...");
        setClaimingNft(true);
        blockchain.smartContract.methods
          .mint(blockchain.account, _amount)
          .send({
            gasLimit: "285000",
            to: "0xce46b858b60888a0af7e8292ea230cbcc6f49a30y",
            from: blockchain.account,
            value: blockchain.web3.utils.toWei((0.07 * _amount).toString(), "ether"),
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setClaimingNft(false);
          })
          .then((receipt) => {
            setFeedback(
              "WOW, you now own a Lost Ape. go visit Opensea.io to view it."
            );
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
          });
      };
      
    return (
        <div className={classes.root}>
            {/* <h1>Lost Apes. What do we have planned?</h1> */}
            <div className={classes.i1Img}>
                <img src={i1} alt='' />
                <h1
                style={{ textAlign: "center", fontSize: 35, fontWeight: "bold" }}
                >
                {data.totalSupply}/1000
                </h1>
            </div>
            <div>
                {Number(data.totalSupply) === 1000 ? (
                <>
                    <p style={{ textAlign: "center" }}>
                    The sale has ended.
                    </p>
                    {/* <s.SpacerSmall /> */}
                    <h2 style={{ textAlign: "center" }}>
                    You can still find Lost Ape on{" "}
                    <a
                        target={"_blank"}
                        rel="noreferrer"
                        href={"https://testnets.opensea.io/collection/babydino"}
                    >
                        Opensea.io
                    </a>
                    </h2>
                </>
                ) : (
                <>
                    <h1 style={{ textAlign: "center" }}>
                    1 Lost Ape costs 0.07 Eth.
                    </h1>
                    {/* <s.SpacerXSmall /> */}
                    <h2 style={{ textAlign: "center" }}>
                    Excluding gas fee.
                    </h2>
                    {/* <s.SpacerSmall /> */}
                    <h2 style={{ textAlign: "center" }}>
                    {feedback}
                    </h2>
                    {/* <s.SpacerMedium /> */}
                    {blockchain.account === "" ||
                    blockchain.smartContract === null ? (
                    <div ai={"center"} jc={"center"}>
                        <h2 style={{ textAlign: "center" }}>
                        Connect to the Ethereum network
                        </h2>
                        {/* <s.SpacerSmall /> */}
                        <Button className={classes.connect}
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                        }}
                        >
                        CONNECT
                        </Button>
                        {blockchain.errorMsg !== "" ? (
                        <>
                            {/* <s.SpacerSmall /> */}
                            <h2 style={{ textAlign: "center" }}>
                            {blockchain.errorMsg}
                            </h2>
                        </>
                        ) : null}
                    </div>
                    ) : (
                    <div ai={"center"} jc={"center"} fd={"row"}>
                        <Button
                        disabled={claimingNft ? 1 : 0}
                        className={classes.connect}
                        onClick={(e) => {
                            e.preventDefault();
                            claimNFTs(1);
                            getData();
                        }}
                        >
                        {claimingNft ? "BUSY" : "BUY 1"}
                        </Button>
                    </div>
                    )}
                </>
                )}
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
