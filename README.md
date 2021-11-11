# Secret-Monero-Bridge-CLI
Secret Monero Bridge Command Line Interface (CLI) - version 1.0-beta2
(Supernova upgrade) 

Enables performing Secret Monero Bridge deposits and withdrawals via a command line interface instead of the web based Dapp and the Keplr wallet extension.

**Dependencies:**

You will need to have the secretcli (version 1.2.0) installed on your machine to run the CLI (see https://docs.scrt.network/node-guides/secretcli.html#secret-network-light-client )

You will need Node.js (https://nodejs.org/) v10+ to build.

Binaries (with SHA256 verifiable hashes) are available under releases.


**Usage (Linux):**

version - reports the application version:

./smbridge-linux --version


bridge fee - reports the current bridge fee:

  ./smbridge-linux f

deposit - make a deposit:

  ./smbridge-linux d -t <txid> -k <txkey> -w <secret_wallet_address>
  
withdrawal - make a withdrawal:
  
  ./smbridge-linux w -w <secret_wallet_address> -a <withdrawal_amount> -m <monero_wallet_address>
  

**This pre-release code is for broader testing purposes. Report any issues to smb@i2pmail.org**
