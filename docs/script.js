let address = "0x1DF2727Ff34d2BD09ACd3aF576a6dC20De1xxxxx";
let etherscanProvider = new ethers.providers.EtherscanProvider();

etherscanProvider.getHistory(address).then((history) => {
    history.forEach((tx) => {
        console.log(tx);
    })
});
