import random


class CustodyChain():
    def __init__(self, address: str, fixed_return_from_trade: int):
        self.address = address
        self.fixed_return_from_trade = fixed_return_from_trade
        """
        Value of the portfolio can be changed at any time due to deposits and withdraws, SOLIDITY PART
        
        """
        self.portfolio_value: int = 0 
        self.balances: dict[str, int] = {}
        self.balance_of_lp_tokens: int = 0 # is sum of balances[msg.sender]

    def solidity_deposit(self, msg_sender, amount):
        # mint LP token in Solidity
        if self.portfolio_value == 0:
            self.balances[msg_sender] = 100
        elif msg_sender in self.balances:
            self.balances[msg_sender] += amount / self.portfolio_value
        else:
            self.balances[msg_sender] = amount / self.portfolio_value
        self.portfolio_value += amount
        
    def solidity_withdraw(self, msg_receiver, amount):
        # check if we investor can withdraw funds
        if not msg_receiver in self.balances:
            print("No such account")
        else:
            if amount <= self.investor_share_of_capital(msg_receiver):
                # burn
                amount_to_burn = amount / self.portfolio_value * self.balance_of_lp_tokens
                self.balances[msg_receiver] -= amount_to_burn
                self.balance_of_lp_tokens -= amount_to_burn
                # send money to the investor
                ### SOLIDITY SENT TO ADDRESS ###
                # decrease portfolio value
                self.portfolio_value -= amount

    """ Solidity send_to_adress() """

    def investor_share_of_capital(self, investor_address: str):
        return self.balances[investor_address] / self.balance_of_lp_tokens
    
    def see_investors_capital(self, investor_address: str):
        investors_share = self.investor_share_of_capital(investor_address)
        return self.portfolio_value * investors_share

    async def trade(self, value_to_trade: int) -> int:
        """
        Ensure we have the value to send in portfolio
        We send some value to the smart-contract (Exchange), the smart-contract returns fixed number

        Example:
        Fixed value: 100 ETH
        We send 80 ETH and receive 100 ETH, PnL + 20ETH
        We send 110 ETH and receive 100 ETH, PnL -10 ETH

        The result of the operation os Profit ' n ' Loss (pnl)
        """
        pnl = 0

        if self.portfolio_value - value_to_trade > 0:
            # we can trade the requested amount
            """"
            SOLIDITY
            """
            ### SOLIDITY SENT TO ADDRESS ### await send_to_adress(value_to_trade)
            pnl = self.fixed_return_from_trade - value_to_trade
            """"
            SOLIDITY
            """
        else:
            print("The amount cannot be traded")
        
        return pnl
    
    async def change_portfolio_value(self):
        """
        Change portfolio value due to trade
        """
        value_to_trade = int(random.uniform(0, 1) * self.portfolio_value)
        self.portfolio_value += await self.trade(value_to_trade)



custody_chain = CustodyChain(
    address = "XXXX____XXXX",
    fixed_return_from_trade = 100,
    )

#while True:
#    await custody_chain.change_portfolio_value()

    