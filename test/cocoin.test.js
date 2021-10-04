const Cocoin = artifacts.require("Cocoin")

contract("Cocoin", (accounts) =>{

    before( async () => {
        cocoin = await Cocoin.deployed()
        console.log("Cocoin Address:", cocoin.address);
    })

    it("gives the owner of the accounts 1M Tokens", async () => { 
      let balance = await cocoin.balanceOf(accounts[0])
      balance = web3.utils.fromWei(balance, 'ether')
      assert.equal(balance, '1000000', "balance should be 1M tokens for contract creator")
    })

    it("can transfer tokens between accounts", async () =>{
    let amount = web3.utils.toWei('1000', 'ether')
    await cocoin.transfer(accounts[1], amount, {from: accounts[0] })
    
    let balance = await cocoin.balanceOf(accounts[1])
    balance = web3.utils.fromWei(balance, 'ether')
    assert.equal(balance, '1000', "balance should be 1k tokens for contract creator")
   })
    
    

})