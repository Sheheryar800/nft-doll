import React, {useState, useEffect} from 'react';
import i1 from '../../../Assets/Images/Minting Section/1.png'
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../../redux/blockchain/blockchainActions";
import { fetchData } from "../../../redux/data/dataActions";
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme();

const useStyles = makeStyles({
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


function Wallet() {
    const classes = useStyles()
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
        <div>
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
        </div>
    )
}

export default Wallet
