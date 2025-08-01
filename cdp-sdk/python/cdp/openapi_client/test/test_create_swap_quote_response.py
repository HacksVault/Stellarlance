# coding: utf-8

"""
    Coinbase Developer Platform APIs

    The Coinbase Developer Platform APIs - leading the world's transition onchain.

    The version of the OpenAPI document: 2.0.0
    Contact: cdp@coinbase.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from cdp.openapi_client.models.create_swap_quote_response import CreateSwapQuoteResponse

class TestCreateSwapQuoteResponse(unittest.TestCase):
    """CreateSwapQuoteResponse unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CreateSwapQuoteResponse:
        """Test CreateSwapQuoteResponse
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CreateSwapQuoteResponse`
        """
        model = CreateSwapQuoteResponse()
        if include_optional:
            return CreateSwapQuoteResponse(
                block_number = '17038723',
                to_amount = '1000000000000000000',
                to_token = '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
                fees = {"gasFee":{"amount":"1000000000000000000","token":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"},"protocolFee":{"amount":"1000000000000000000","token":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"}},
                issues = {"allowance":{"currentAllowance":"1000000000","spender":"0x000000000022D473030F116dDEE9F6B43aC78BA3"},"balance":{"token":"0x6B175474E89094C44Da98b954EedeAC495271d0F","currentBalance":"900000000000000000","requiredBalance":"1000000000000000000"},"simulationIncomplete":false},
                liquidity_available = True,
                min_to_amount = '900000000000000000',
                from_amount = '1000000000000000000',
                from_token = '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                permit2 = cdp.openapi_client.models.create_swap_quote_response_all_of_permit2.CreateSwapQuoteResponse_allOf_permit2(
                    hash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef', 
                    eip712 = {"domain":{"name":"Permit2","chainId":1,"verifyingContract":"0x000000000022D473030F116dDEE9F6B43aC78BA3"},"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"}],"PermitTransferFrom":[{"name":"permitted","type":"TokenPermissions"},{"name":"spender","type":"address"},{"name":"nonce","type":"uint256"},{"name":"deadline","type":"uint256"}],"TokenPermissions":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}]},"primaryType":"PermitTransferFrom","message":{"permitted":{"token":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"1000000"},"spender":"0xFfFfFfFFfFFfFFfFFfFFFFFffFFFffffFfFFFfFf","nonce":"123456","deadline":"1717123200"}}, ),
                transaction = cdp.openapi_client.models.create_swap_quote_response_all_of_transaction.CreateSwapQuoteResponse_allOf_transaction(
                    to = '0x000000000022D473030F116dDEE9F6B43aC78BA3', 
                    data = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef', 
                    gas = '100000', 
                    gas_price = '1000000000', 
                    value = '1000000000000000000', )
            )
        else:
            return CreateSwapQuoteResponse(
                block_number = '17038723',
                to_amount = '1000000000000000000',
                to_token = '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
                fees = {"gasFee":{"amount":"1000000000000000000","token":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"},"protocolFee":{"amount":"1000000000000000000","token":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"}},
                issues = {"allowance":{"currentAllowance":"1000000000","spender":"0x000000000022D473030F116dDEE9F6B43aC78BA3"},"balance":{"token":"0x6B175474E89094C44Da98b954EedeAC495271d0F","currentBalance":"900000000000000000","requiredBalance":"1000000000000000000"},"simulationIncomplete":false},
                liquidity_available = True,
                min_to_amount = '900000000000000000',
                from_amount = '1000000000000000000',
                from_token = '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                permit2 = cdp.openapi_client.models.create_swap_quote_response_all_of_permit2.CreateSwapQuoteResponse_allOf_permit2(
                    hash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef', 
                    eip712 = {"domain":{"name":"Permit2","chainId":1,"verifyingContract":"0x000000000022D473030F116dDEE9F6B43aC78BA3"},"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"}],"PermitTransferFrom":[{"name":"permitted","type":"TokenPermissions"},{"name":"spender","type":"address"},{"name":"nonce","type":"uint256"},{"name":"deadline","type":"uint256"}],"TokenPermissions":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}]},"primaryType":"PermitTransferFrom","message":{"permitted":{"token":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"1000000"},"spender":"0xFfFfFfFFfFFfFFfFFfFFFFFffFFFffffFfFFFfFf","nonce":"123456","deadline":"1717123200"}}, ),
                transaction = cdp.openapi_client.models.create_swap_quote_response_all_of_transaction.CreateSwapQuoteResponse_allOf_transaction(
                    to = '0x000000000022D473030F116dDEE9F6B43aC78BA3', 
                    data = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef', 
                    gas = '100000', 
                    gas_price = '1000000000', 
                    value = '1000000000000000000', ),
        )
        """

    def testCreateSwapQuoteResponse(self):
        """Test CreateSwapQuoteResponse"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
