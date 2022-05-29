**Linux Installation and configuration scripts.**

Video:
https://ipfs.io/ipfs/bafybeidmkswcucjyspgsuxut6a3dj5go5l7odqmaljnsz2twa6dt4rhh6y/install2-2022-04-15_14.50.41.m4v

The install.sh script performs the following:

1. Installs secretcli
2. Installs smbridge-linux (Secret Monero Bridge CLI application)


The config.sh script is a real simple script to configure your secretcli with the correct chain-id and output format.

Download all the files in this directory to your machine, then run:

chmod +x install.sh

chmod +x config.sh

sudo ./install.sh 

./config.sh

**Note**

To perform deposits/withdrawals, you will need to have installed your key for the account (wallet) you plan to use with the Secret Monero Bridge CLI.
You can view your list of secretcli installed keys by issuing the command:

*secretcli keys list*

If the provided list is empty, you will need to install a key (wallet) to use the Secret Monero Bridge CLI.

You can do this by issuing the following command:

*secretcli keys add --recover <key-alias>*

You will then be prompted to enter your bip39 mnemonic

Once you enter your mnemonic (your keplr mnemonic seed), you should be ready to go. You can reissue the command:
  
  *secretcli keys list*
  
To verify that your key was installed properly.
  

(You can obtain your accounts mnemonic seed by going to the account list in Keplr, and selecting the "View Mnemonic Seed" option from the hamburger menu. You will need to enter your password in Keplr to view the mnemonic seed).
  
  **Secretcli Client Usage:**
  https://docs.scrt.network/cli/secretcli.html
