**macOS Installation**

**Dependencies**

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

-Installs caddy

-Configures caddy for use with datahub
