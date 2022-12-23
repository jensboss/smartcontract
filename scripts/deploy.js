const { ethers } = require("hardhat");

async function main() {
    const Relationship = await ethers.getContractFactory('Relationship');
    const relationship = await Relationship.deploy("0x04a4c01d131dCA7e7362BE40F4258EF83D264bF8","send ganz fescht verliebt");
    console.log("Contract was depolyed to address: ", relationship.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })
