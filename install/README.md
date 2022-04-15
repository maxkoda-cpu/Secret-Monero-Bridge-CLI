Installation and configuration scripts.

The install.sh script performs the following:

1. Installs secretcli
2. Installs smbridge-linux (Secret Monero Bridge CLI application)
3. Installs and configures the caddy (reverse proxy)

You must have your datahub authorization key prior to running install.sh. It will prompt you for your datahub authorization key
to configure the caddy reverse proxy. 

The config.sh script is a real simple script to configure your secretcli with the correct chain-id and output format.

Download all the files in this directory to your machine, then run:

chmod +x install.sh
chmod +x config.sh
./install.sh
./config.sh
