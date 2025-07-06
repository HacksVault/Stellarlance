import sys
from stellar_sdk import Server, Keypair, TransactionBuilder, Network, Account, Asset
import requests

HORIZON_URL = "https://horizon-testnet.stellar.org"
NETWORK_PASSPHRASE = Network.TESTNET_NETWORK_PASSPHRASE
BLOCK_EXPLORER_BASE_URL = "https://stellar.expert/explorer/testnet/tx/"

server = Server(HORIZON_URL)

if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: send_stellar_work_done.py <sender_address> <recipient_address> <amount_xlm> <sender_secret>")
        sys.exit(1)
    SENDER_ADDRESS = sys.argv[1]
    RECIPIENT_ADDRESS = sys.argv[2]
    AMOUNT_XLM = sys.argv[3]
    SENDER_SECRET = sys.argv[4]

    try:
        sender_kp = Keypair.from_secret(SENDER_SECRET)
        sender_account = server.load_account(sender_kp.public_key)
        # Check if recipient exists
        try:
            server.load_account(RECIPIENT_ADDRESS)
            recipient_exists = True
        except Exception:
            recipient_exists = False
        # If not, create account
        if not recipient_exists:
            base_fee = server.fetch_base_fee()
            tx = (
                TransactionBuilder(
                    source_account=sender_account,
                    network_passphrase=NETWORK_PASSPHRASE,
                    base_fee=base_fee,
                )
                .append_create_account_op(destination=RECIPIENT_ADDRESS, starting_balance=AMOUNT_XLM)
                .set_timeout(30)
                .build()
            )
            tx.sign(sender_kp)
            response = server.submit_transaction(tx)
            tx_hash = response["hash"]
            print(f"Account created! Hash: {tx_hash}")
            print(f"Block Explorer URL: {BLOCK_EXPLORER_BASE_URL}{tx_hash}")
        else:
            base_fee = server.fetch_base_fee()
            tx = (
                TransactionBuilder(
                    source_account=sender_account,
                    network_passphrase=NETWORK_PASSPHRASE,
                    base_fee=base_fee,
                )
                .append_payment_op(destination=RECIPIENT_ADDRESS, amount=AMOUNT_XLM, asset=Asset.native())
                .set_timeout(30)
                .build()
            )
            tx.sign(sender_kp)
            response = server.submit_transaction(tx)
            tx_hash = response["hash"]
            print(f"Payment sent! Hash: {tx_hash}")
            print(f"Block Explorer URL: {BLOCK_EXPLORER_BASE_URL}{tx_hash}")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1) 