'use strict';

const Resardis = artifacts.require('Resardis');

contract('TestResardis-EthFunding', async accounts => {
  let addressZero;
  let depAccount;
  let drawAccount;
  let depAmount;
  let normalDraftAmount; // make this sth smaller than depAmount
  let overDraftAmount; // make this sth bigger than depAmount
  let instance;

  beforeEach('Assign EthFunding variables', async () => {
    addressZero = '0x0000000000000000000000000000000000000000';
    depAccount = accounts[3];
    drawAccount = accounts[4];
    depAmount = web3.utils.toBN(web3.utils.toWei('8.44', 'ether'));
    normalDraftAmount = web3.utils.toBN(web3.utils.toWei('2.66', 'ether')); // make this sth smaller than depAmount
    overDraftAmount = web3.utils.toBN(web3.utils.toWei('10.55', 'ether')); // make this sth bigger than depAmount
    instance = await Resardis.deployed();
  });

  it('Try to deposit Ether and succeed', async () => {
    const initBalance = await instance.balanceOf(addressZero, depAccount, { from: depAccount });
    await instance.deposit({ from: depAccount, value: depAmount });
    const finalBalance = await instance.balanceOf(addressZero, depAccount, { from: depAccount });
    const supposedBalance = initBalance.add(depAmount);

    assert.notEqual(initBalance.toString(), finalBalance.toString());
    assert.equal(supposedBalance.toString(), finalBalance.toString());
  });

  it('Try to withdraw Ether (overdraft) and fail', async () => {
    // deposit some amount first
    await instance.deposit({ from: drawAccount, value: depAmount });
    // try to withdraw
    const initBalance = await instance.balanceOf(addressZero, drawAccount, { from: drawAccount });
    const drawAmount = overDraftAmount.add(initBalance);
    try {
      await instance.withdraw(drawAmount, { from: drawAccount });
    } catch (err) {
      console.log('Could not withdraw ether higher than the balance as expected.');
    }
    const finalBalance = await instance.balanceOf(addressZero, drawAccount, { from: drawAccount });
    assert.equal(initBalance.toString(), finalBalance.toString());
  });

  it('Try to withdraw Ether and succeed', async () => {
    // deposit some amount first
    await instance.deposit({ from: drawAccount, value: depAmount });
    // try to withdraw
    const initBalance = await instance.balanceOf(addressZero, drawAccount, { from: drawAccount });
    const diffAmount = initBalance.sub(normalDraftAmount);
    await instance.withdraw(normalDraftAmount, { from: drawAccount });
    const finalBalance = await instance.balanceOf(addressZero, drawAccount, { from: drawAccount });

    assert.notEqual(diffAmount.toString(), initBalance.toString());
    assert.notEqual(initBalance.toString(), finalBalance.toString());
    assert.equal(diffAmount.toString(), finalBalance.toString());
  });
});
