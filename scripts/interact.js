const APY_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY_2 = process.env.PRIVATE_KEY_2;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/Relationship.sol/Relationship.json");

// provider - alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", APY_KEY);

// signer
const signerOne = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
const signerTwo = new ethers.Wallet(PRIVATE_KEY_2, alchemyProvider);

// constract instance
const relationshipContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signerOne);
const relationshipContractTwo = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signerTwo);

async function main() {
    const relationshipDescription = await relationshipContract.relationshipDescription();
    console.log("Relationship description: ", relationshipDescription);
    const agreed = await relationshipContract.agreedByPersonTwo();
    console.log("Agreement status: ", agreed);

    // const tx = await relationshipContractTwo.agree();
    // await tx.wait();

    const tx = await relationshipContract.update('moving together');
    await tx.wait();

    //const newAgreed = await relationshipContract.agreedByPersonTwo();
    //console.log("Agreement status: ", newAgreed);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })
