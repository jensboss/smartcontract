
npm init --yes     
npm install --save-dev hardhat 
npx hardhat    
npm install dotenv --save   
npm install --save-dev @nomiclabs/hardhat-ethers
npx hardhat compile

npx hardhat run scripts/deploy.js --network goerli

npm install --save-dev @nomiclabs/hardhat-etherscan

npx hardhat verify --network goerli 0x3EbF98b5CbEb4aBEa0c4d1E0c6B786BeaE42a435 '0x5d3eC27Cc375b8228fd8Ac0288B85aF2ad009f95' 'in love'


npx hardhat verify --network mainnet 0x3F43504b43751aa5A2313D6653D8cB5660aDc217 '0x04a4c01d131dCA7e7362BE40F4258EF83D264bF8' 'send ganz fescht verliebt'
