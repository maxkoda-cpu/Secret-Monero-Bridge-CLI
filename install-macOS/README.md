**macOS Installation**

**Dependencies:**

You will need to install Homebrew:

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Once Homebrew is installed, install wget:

brew install wget

Then run the install script:

./install.sh

Then configure:

./config.sh

The install.sh script performs the following:

-Installs secretcli

-Installs smbridge-macos (Secret Monero Bridge CLI application)

The config.sh file simply specifies the chain-id and output settings for secretcli.

**Note**

You will need to specify an RPC node (secretcli config node ) so that the Secret Monero Bridge CLI can connect to the Secret Network.

As of 29 May 2022, we are aware of the following public nodes:

Trivium's: https://api.trivium.network/ (this is a website, you will find endpoints there, mainnet and testnet)

Ronin Ventures': RPC: https://rpc.roninventures.io/ https://testnet-rpc.roninventures.io/

gRPC-Web: https://web-rpc.roninventures.io/ https://testnet-web-rpc.roninventures.io/

Community API: LCD/REST: https://api.scrt.network/ RPC coming soon

To perform deposits/withdrawals, you will need to have installed your key for the account (wallet) you plan to use with the Secret Monero Bridge CLI. You can view your list of secretcli installed keys by issuing the command:

secretcli keys list

If the provided list is empty, you will need to install a key (wallet) to use the Secret Monero Bridge CLI.

You can do this by issuing the following command:

secretcli keys add --recover

You will then be prompted to enter your bip39 mnemonic

Once you enter your mnemonic (your keplr mnemonic seed), you should be ready to go. You can reissue the command:

secretcli keys list

To verify that your key was installed properly.

(You can obtain your accounts mnemonic seed by going to the account list in Keplr, and selecting the "View Mnemonic Seed" option from the hamburger menu. You will need to enter your password in Keplr to view the mnemonic seed).

Secretcli Client Usage: https://docs.scrt.network/cli/secretcli.html
