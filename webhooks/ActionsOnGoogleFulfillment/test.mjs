import fetch from "node-fetch";

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
                conv.add(`Your total balance is $${totalBalance.toLocaleString()} on ${curr.networkName}.`);
            }
            } catch (err) {
                console.log(err);
        } 

    }
    
    
    return totalBalance;
}

console.log(`${walletBalance(networkData)}`);