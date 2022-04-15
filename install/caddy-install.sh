#!/bin/bash

# Install a local proxy server
echo "deb [trusted=yes] https://apt.fury.io/caddy/ /" |                                              
        sudo tee -a /etc/apt/sources.list.d/caddy-fury.list &&
        sudo apt-get update &&
        sudo apt-get install -y caddy

# Set its config
echo 'http://localhost:1234
 
reverse_proxy {
        to https://secret-4--rpc--full.datahub.figment.io
        header_up Authorization <AUTH_CODE>
        header_up Host secret-4--rpc--full.datahub.figment.io
}' | sudo tee /etc/caddy/Caddyfile

# Apply the new config
sudo systemctl restart caddy

# Point secretcli to your local proxy
secretcli config node http://localhost:1234
