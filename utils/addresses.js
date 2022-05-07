const addresses = {};
addresses.polygon = {};
addresses.bsc = {};
addresses.mumbai = {};

addresses.polygon.USDC = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
addresses.polygon.USDT = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
addresses.polygon.DAI = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
addresses.polygon.BUSD = "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7";
addresses.polygon.WETH = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";

const funders = {}
funders.polygon = {}
funders.bsc = {}

funders.polygon.DAI ='0x06959153B974D0D5fDfd87D561db6d8d4FA0bb0B'
funders.polygon.USDT = '0x0d0707963952f2fba59dd06f2b425ace40b492fe'
funders.polygon.USDC = '0xf977814e90da44bfa03b6295a0616a897441acec'
funders.polygon.BUSD = '0x52a258ed593c793251a89bfd36cae158ee9fc4f8'
funders.polygon.ETH = '0xd70250731A72C33BFB93016E3D1F0CA160dF7e42' // gas token i.e. MATIC
funders.polygon.WETH = '0x72A53cDBBcc1b9efa39c834A540550e23463AAcB' // real ETH only for non mainnet chains


module.exports = {
  addresses,
  funders
};

