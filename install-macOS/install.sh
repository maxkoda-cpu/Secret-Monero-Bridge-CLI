#! /bin/bash
# Secret Monero Bridge CLI - macOS install script
#DEPENDENCIES:
# 1. Install Homebrew
# 2. Install wget
# See the README.md file

#Download secretcli version 1.2.2...
wget https://github.com/scrtlabs/SecretNetwork/releases/download/v1.2.2/secretcli-macOS

mv secretcli-macOS secretcli
chmod +x secretcli
mv secretcli /usr/local/bin/
secretcli version


#Download smbridge-macos...
wget https://github.com/maxkoda-cpu/Secret-Monero-Bridge-CLI/releases/download/v1.0-beta3/smbridge-macos
chmod +x smbridge-macos
mv smbridge-macos /usr/local/bin/
smbridge-macos --version

#datahub caddy usage discontinued - 29 May 2022
#brew install caddy

#echo Enter datahub AUTH KEY:
#read auth
echo $auth

#str='s/<AUTH_CODE>/'$auth'/'
#echo $str

#sed -i '' $str Caddyfile
