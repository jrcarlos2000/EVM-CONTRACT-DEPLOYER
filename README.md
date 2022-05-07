This is a boilerplate for deploying a contract to any network, if some networks are missing please feel free to add them.
if read carefully this is very easy to use and extremely useful can save tons of time.

## FEEL FREE TO BRANCH AND ADD SOME GOOD EXAMPLES 
## CONTRIBUTIONS TO IMPROVE THIS REPO ARE HIGHLY APPRECIATED

### `SETTING UP`

- clone this repo
```
npm install --save-dev
```
-   rename `.env.example` to `.env` 
-   fill all the fields in `.env`
-   add your networks to `hardhat.config.js` as follows
```javascript
mainnet : {
      url : `${process.env.MAINNET_PROVIDER_URL}`,
      accounts: [
        process.env.DEPLOYER_PRIVATE_KEY || privateKeys[1],
        process.env.GOVERNOR_PRIVATE_KEY || privateKeys[1],
      ],
      chainId: 1,
},
```
-   Add your Scan API KEY for the verification
-   the naming is important so you may check how to name your etherscan networks here https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html
```javascript
etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
    },
  },
```

### `PLAYING AROUND`

-   `deploy.js` and `tx.js` include deployer functions
-   To deploy use the following function :
```javascript
await deployWithConfirmation('UserRegistry');
//OR if you wanna reuse the address after deploying
const dUserRegistry = deployWithConfirmation('UserRegistry');
// you might call then dUserRegistry.address
```
-   All your contracts will go inside `/contracts` , you may open subfolders such as `/contracts/core` , you dont need to add the complete PATH to the deployment function, a name is sufficient
-   You can call your previously defined name accounts as follows
```javascript
const {deployerAddr, governorAddr} = await getNamedAccounts();
```
-   To read the latest deployed contract which is stored in `/deployments` use :
```javascript 
//by using this function you are giving the contract an ABI and address which are already stored
const cUserRegistry = await ethers.getContract('UserRegistry');
```
-   Another way to read a contract :
```javascript 
//will look for ABI of UserRegistry in /artifacts and use the address to read on-chain
const cUserRegistry = await ethers.getContractAt('UserRegistry','0x30f38906eFa003244bE583e49E362f57130FA056');
```
-   To perform transaction that is needed to be `DONE` to continue with the deployment script
```javascript
await withConfirmation(
    cUserRegistry.modifyUser('hola', 'emerson',1)
)
```

### `CLI`
## deploy
```
yarn deploy --network {network name as in config.js}
```
## verify
```
yarn verify --network {network name as in config.js} {contract address}
```
