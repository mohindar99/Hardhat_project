const { expect } = require("chai");

describe("token contract", function () {
  let Token;
  let hardhatToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    Token = await ethers.getContractFactory("token");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    hardhatToken = await Token.deploy();
  });

  describe("Deployment", function () {
    it("should set the right owner", async function () {
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });
    it("should assign the total supply of tokens to owner", async function () {
      const ownerBalance = await hardhatToken.balanceof(owner.address);
      expect(await hardhatToken.totalsupply()).to.equal(ownerBalance);
    });
  });

  describe("transaction", function () {
    it("should transfer tokens between accounts", async function () {
      await hardhatToken.transfer(addr1.address, 5);
      const addr1balance = await hardhatToken.balanceof(addr1.address);
      expect(addr1balance).to.equal(5);

      await hardhatToken.connect(addr1).transfer(addr2.address, 5);
      const addr2balance = await hardhatToken.balanceof(addr2.address);
      expect(addr2balance).to.equal(5);
    });
    it("should update balance after transfers", async function () {
      const initialownerbalance = await hardhatToken.balanceof(owner.address);
      await hardhatToken.transfer(addr1.address, 5);
      await hardhatToken.transfer(addr2.address, 10);

      const finalownerbalance = await hardhatToken.balanceof(owner.address);
      expect(finalownerbalance).to.equal(initialownerbalance - 15);

      const addr1balance = await hardhatToken.balanceof(addr1.address);
      expect(addr1balance).to.equal(5);

      const addr2balance = await hardhatToken.balanceof(addr2.address);
      expect(addr2balance).to.equal(10);
    });
  });
});
