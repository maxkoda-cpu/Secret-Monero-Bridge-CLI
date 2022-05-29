#!/bin/bash

# The datahub team discontinued support for the Secret Network:

#Hi there,
#We have some news to share about DataHub. After much consideration, we have made the difficult decision to deprecate the Secret Network. DataHub were early supporters of the Secret ecosystem, however to ensure we continue to offer the highest level of service and support to our customers, we have decided to focus on our highest priority protocols.
#The deprecation is expected to occur at the end of the day on May 31st, 2022, after which all Secret services will be removed and no longer accessible using DataHub.
#Feel free to contact us if you have any questions. Thank you for using DataHub.
#The DataHub Team.

#We are therefore deprecating this script.

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
