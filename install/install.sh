#! /bin/bash

#Download secretcli version 1.2.2...
wget https://github.com/scrtlabs/SecretNetwork/releases/download/v1.2.2/secretcli-Linux

mv secretcli-Linux secretcli
chmod +x secretcli
mv secretcli /usr/bin/
secretcli version


#Download smbridge-linux...
wget https://github.com/maxkoda-cpu/Secret-Monero-Bridge-CLI/releases/download/v1.0-beta3/smbridge-linux
chmod +x smbridge-linux
mv smbridge-linux /usr/bin/
smbridge-linux --version

#datahub caddy support removed (May 29, 2022)


#echo Enter datahub AUTH KEY:
#read auth
#echo $auth

#str='s/<AUTH_CODE>/'$auth'/'
#echo $str

#sed -i $str caddy-install.sh
#chmod +x caddy-install.sh
#./caddy-install.sh
