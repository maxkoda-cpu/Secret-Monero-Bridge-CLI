# Secret-Monero-Bridge-CLI
Secret Monero Bridge Command Line Interface (CLI) - version 1.0-beta3

Enables performing Secret Monero Bridge deposits and withdrawals via a command line interface instead of the web based Dapp and the Keplr wallet extension.

**Installation Video**
https://ipfs.io/ipfs/bafybeigy2uis6tzmsgmdp4b6fx57dyrm7x5xd7txy33ae33yngemyocwne/Secret-Monero-Bridge-CLI.m4v

**Dependencies:**

You will need to have the secretcli (version 1.2.0+) installed on your machine to run the CLI (see https://build.scrt.network/light-client-mainnet.html )

You will need an active key (wallet account) installed for use in the secretcli.

You will need Node.js (https://nodejs.org/) v10+ to build.

Binaries (with SHA256 verifiable hashes) are available under releases.



**Usage (Linux):**

**help - provides help instructions**

.smbridge-linux --help

**version - reports the application version:**

./smbridge-linux --version


**bridge fee - reports the current bridge fee:**

  ./smbridge-linux f

**deposit - make a deposit (submitting Monero Proof-of-Payment):**

  ./smbridge-linux d -t <monero_txid> -k <monero_txkey> -w <secret_wallet_address_to_receive_sXMR>
  
*(the Secret Monero Bridge wallet address is: 492mjoMwHzZL2hGZgh8XU65Peyi7CE996iGhm8Ja74fhR2XC3LrGCSdGcBBqtx9ccwCLtrZjGoHNx9kiR7d2nhoAAG84Nqe*

*XMR deposits should be made to this address using the Monero wallet of your choice.)*

**withdrawal - make a withdrawal:**
  
  ./smbridge-linux w -w <secret_wallet_address> -a <withdrawal_amount> -m <monero_wallet_address>
  
  Use the -p (--passphrase) option if your keyring requires a passphrase for access.
  
**This pre-release code is for broader testing purposes. Report any issues to smb@i2pmail.org**
