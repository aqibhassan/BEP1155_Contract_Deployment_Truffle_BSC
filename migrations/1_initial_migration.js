require('dotenv').config();
const FourArtNFT= artifacts.require("FourArtNFT");
module.exports = function (deployer) {

  deployer.deploy(FourArtNFT,process.env.URI);
  
};
