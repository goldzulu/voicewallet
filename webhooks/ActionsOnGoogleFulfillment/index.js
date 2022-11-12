const { conversation } = require('@assistant/conversation');
const functions = require('firebase-functions');
const fetch = require('node-fetch');

const DEFAULT_ADDRESS = '0xe44a503E5c21B3211015bB8796F5Bd095193fB32';

const app = conversation({debug: true});



app.handle('greeting', conv => {
    let message = "Welcome back to Voice Wallet";
    if (!conv.user.lastSeenTime) {
        message = "Welcome to Voice Wallet, your friendly AI De-Fi Assistant";
    }
    conv.add(message);
});

app.handle('checkbalance', async conv => {

    // moralis part-start

    //Get Wallet Balance and Token Price on all chains.
    const web3ApiKey = 'ADDMORALISAPIKEYHERE!';
    
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-API-Key': web3ApiKey
    }
    };
    // Chain and its wrapper token address data
    const networkData = [
        {
            "networkName": "Ethereum",
            "chainId": "0x1",
            "wrappedTokenAddress": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
        },
        {
            "networkName": "Polygon",
            "chainId": "0x89",
            "wrappedTokenAddress": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
        },
        {
            "networkName": "Binance",
            "chainId": "0x38",
            "wrappedTokenAddress": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
        },
        {
            "networkName": "Avalanche",
            "chainId": "0xa86a",
            "wrappedTokenAddress": "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"
        },
        {
            "networkName": "Fantom",
            "chainId": "0xfa",
            "wrappedTokenAddress": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"
        },
        {
            "networkName": "Cronos",
            "chainId": "0x19",
            "wrappedTokenAddress": "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23"
        }
    ]
  
    let addressToCheck = DEFAULT_ADDRESS;

    const walletBalance = async (networkData) => {
        let totalBalance = 0;

        for (const curr of networkData) {
            let added = false;
            try {
                const resBalanceData = await fetch(`https://deep-index.moralis.io/api/v2/${addressToCheck}/balance?chain=${curr.chainId}`, options);
                const resBalance = await resBalanceData.json();
                const resTokenPriceData = await fetch(`https://deep-index.moralis.io/api/v2/erc20/${curr.wrappedTokenAddress}/price?chain=${curr.chainId}`, options);
                const resTokenPrice = await resTokenPriceData.json();
                console.log(`
                    Network Name - ${curr.networkName}
                    Wallet Balance - ${resBalance.balance/1e18}
                    Token Price - $${resTokenPrice.usdPrice.toLocaleString()}/${resTokenPrice.nativePrice.symbol}
                `);
                totalBalance = resBalance.balance/1e18 * resTokenPrice.usdPrice;
                if (added == false) {
                    added = true;
                    conv.append(`Your balance is $${totalBalance.toLocaleString()} on ${curr.networkName}.`);
                }
                } catch (err) {
                    console.log(err);
            } 

        }
        
        
        return totalBalance;
    }
    

    conv.append('Your total balance is $' + await walletBalance(networkData));
});
  
// moralis part-end

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);