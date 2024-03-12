const {ethers} = require("hardhat");
const {expect} = require("chai");

describe('custody', () => {
	it("should return the balance of account", async () => {
		const Custody = await ethers.getContractFactory('CustodyToken');
		const custody = await Custody.deploy();

        await custody.SeeInput('Hola, mundo!');
	});
});