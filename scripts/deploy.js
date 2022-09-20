const { ethers } = require("hardhat");

async function main(){
    const[deployer] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("token");
    const Dtoken = await Token.deploy();
    console.log("Token adddress", Dtoken.address );
}
main().then(()=> process.exit(0)).catch((error)=>{
    console.error(error);
    process.exit(1);
});
