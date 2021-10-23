const { exec } = require("child_process");
const atob = require('atob');
const { Crypto } = require("@peculiar/webcrypto");
const readline = require("readline");
const crypto = new Crypto();

const debugRecip = "secret1f48rsx497tvsgm683cr3kwd38kaaumrncpju0d";
const liverecip = "secret14m2pfpe20fsw7f0anctgyyzhhmk6mz69wpkdqa";
const xmrEmailTx = "frpergzbareb@v2cznvy.bet";
const xmrEmail = "fzo@v2cznvy.bet";
const minAmount = 0.0075;
const version = ""

const debug = false;

//node smbridge.js w -w secret1727hjj8nxkk42gdwnlukqmy57xmfchl65k4y2k -a 0.01 -m A1uQozhKQbP79i8nXEr99pFcRNf3gvvNHfWfX9K8LY6KALJjFsVEgmqg1vjBtfN9siAmgzqk52mzJATANfS75W2u6GxuFrF


var argv = require('yargs/yargs')(process.argv.slice(2))
    .alias('v', 'version')
    .version(true, "1.0-beta1")
    // .describe('v', 'show version information')
    .usage('Usage: $0 <command> [options]')
    .command('d', 'Enter a Deposit', function (yargs) {
        argv = yargs
            .example('$0 d -t 0c6fcd2846e1899a0e8d1236fd75bf536bdcf9e2349378a7a8fd5b0651456756 -k 5aad84b28bdc96f12345206341761d0c130116c78577e7b4fa6861234532e202 -w secret1123hjj8nxkk42gdwnlukqmy57xmf1234567890', 'Create a Deposit')
            .option("t", {
                alias: "txid",
                describe: "transaction id",
                type: "string",
                nargs: 1,
                demand: true,
                demand: "required"
            })
            .option("k", {
                alias: "txkey",
                describe: "transaction key",
                type: "string",
                nargs: 1,
                demand: true,
                demand: "required"
            })
            .option("w", {
                alias: "secretwalletaddress",
                describe: "secret wallet address",
                type: "string",
                nargs: 1,
                demand: true,
                demand: "required"
            })
            .help("h")
    })
    .command('w', 'Enter a Withdrawal', function (yargs) {
        argv = yargs
            .alias('w', 'secretwalletaddress')
            .nargs('w', 1)
            .describe('w', 'secret wallet address')
            .demandOption(['w'])
            .alias('a', 'amount')
            .nargs('a', 1)
            .describe('a', 'sXMR amount')
            .demandOption(['a'])
            .alias('m', 'monerowalletaddress')
            .nargs('m', 1)
            .describe('m', 'monero wallet address')
            .demandOption(['m'])
    })
    .demandCommand()
    .help('h')
    .alias('h', 'help')
    .argv;

//secretcli tx compute execute address: secret19ungtd2c7srftqdwgq0dspwvrw63dhu79qxv88 '{"transfer": {"recipient": "secret14m2pfpe20fsw7f0anctgyyzhhmk6mz69wpkdqa", "amount": "10000000000"}}' --from secret1727hjj8nxkk42gdwnlukqmy57xmfchl65k4y2k

const emailEncrypt = (message) => {
    if (message) {
        return message.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));
    } else {
        return "";
    }
}


const encryptMessage = async (msg, doDecrypt) => {
    var str2ab = function (str) {
        const buf = new ArrayBuffer(str.length);
        const bufView = new Uint8Array(buf);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    },
        hex2buf = function (hexStr) {
            return new Uint8Array(hexStr.match(/.{2}/g).map(h => parseInt(h, 16)));
        },
        buf2hex = function (buffer) {
            return Array.prototype.slice
                .call(new Uint8Array(buffer))
                .map(x => [x >> 4, x & 15])
                .map(ab => ab.map(x => x.toString(16)).join(""))
                .join("");
        },
        getMessageEncoding = function (msg) {

            let message = msg,
                enc = new TextEncoder();

            return enc.encode(message);
        },
        encryptMessage = async function (key) {
            let encoded = getMessageEncoding(msg);
            let ciphertext;
            try {
                ciphertext = await crypto.subtle.encrypt(
                    {
                        name: "RSA-OAEP",
                        hash: "SHA-256"
                    },
                    key,
                    encoded
                );
            } catch (ignore) {
            }
            return buf2hex(ciphertext);
        },
        decryptMessage = async function (key) {
            let decrypted = await crypto.subtle.decrypt(
                {
                    name: "RSA-OAEP"
                },
                key,
                hex2buf(msg)
            );

            let dec = new TextDecoder();
            return dec.decode(decrypted);
        },
        importRsaKeyPublic = async function () {

            var pemEncodedKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAqcPw2wgNZCvs/UnhMfL8
x7iTyDt5rSeRRujQ8S1G0IrGjjqw5IJPOEO36n7x12XsE4KtXBc4VMy6lHYhbEAL
nFI+DcswGN5a+vF2VLxIz/PUcOI0dz/IyHLahMMd2GKGXXrPbvh3h4XQPLeDhcg4
Ra1ZB3tziyoY0RNoQSsBtqzOMWE/GAL8ZE3Ss0e769PMv22Jiwb6Uhx8Yr12ei4v
axZC5KhGAu+M0XnOTj0+N1+iL8LL6yVyfx/zlr7RExckHAL3G2i9TgfQubfpGSKR
cmH3rR0UPPWDTxGEt8t+UnfzXUKVFT373aPDisO3r0F7OX+XBHTR5kgsk1yM5zKx
u2/+ppnNSpNuHNPMxy4iO+g/6RyOY49PKsUjoKp0c7pV/MWfUPNXQvN/NdjNjo1v
/FOjiyOHaGGlGKHFXUfSHN9H4QwlzgVvIEnClSau+LJU3QVLSpATr9SaTKI+BtZT
EWqgiNMB1N9ie1oYR8w22aYvubKpHWjrFSZRjMMhR4eOfYJyc5COKK4oLsBXaFT7
kLk63GhZAhFIZKXcslq+lipemXZUyy5tERZvxaFDyJp8M+t4/8F5lEHhKsRXeWN4
H2ODJxYBJQO2neU2rxRI5pKzZ4OsT/Es2VLxGGHO/dwprdJe1aPi8o0FnXShkhvf
rYA+EzW0d/1VJTHju3fDr20CAwEAAQ==
-----END PUBLIC KEY-----`

            var pemHeader = "-----BEGIN PUBLIC KEY-----";
            var pemFooter = "-----END PUBLIC KEY-----";
            const pemContents = pemEncodedKey.substring(pemHeader.length, pemEncodedKey.length - pemFooter.length).trim();
            const binaryDerString = atob(pemContents);
            const binaryDer = str2ab(binaryDerString);
            const retKey = await crypto.subtle.importKey(
                "spki",
                binaryDer,
                {
                    name: "RSA-OAEP",
                    hash: "SHA-256"
                },
                true,
                ["encrypt"]
            );
            return retKey;
        };

    if (!doDecrypt) {
        const pubKeyEncrypt = await importRsaKeyPublic();
        const retval = await encryptMessage(pubKeyEncrypt);
        return retval;
    } else {
        const pubKeyDecrypt = await importRsaKeyPublic();
        return await decryptMessage(pubKeyDecrypt);
    }
}

const command = process.argv.slice(1)[1]

if (command === "d") {
    let proceed = true;
    if (!/^\S{64}$/.test(argv.txid)) {
        console.log("** Bad txid (-t)**")
        proceed = false;
    }
    if (!/^\S{64}$/.test(argv.txkey)) {
        console.log("** Bad txkey (-k)**")
        proceed = false;
    }
    if (!/^\S{45}$/.test(argv.secretwalletaddress)) {
        console.log("** Bad Secret Wallet Address (-w) **")
        proceed = false;
    }
    if (proceed) {
        const text = JSON.stringify({
            txid: argv.txid,
            txkey: argv.txkey,
            wallet: argv.secretwalletaddress,
            walletAddress: argv.secretwalletaddress,
            viewKey: ""
        });
        encryptMessage(text)
            .then(encrypted => {
                console.log("")
                console.log("------------------------------------------------------")
                console.log("IMPORTANT")
                console.log("")
                console.log("Mail the content below")
                console.log("")
                console.log(`To: ${emailEncrypt(xmrEmailTx)}`)
                console.log(`Subject: Deposit Message`)
                console.log(`Message: startencrypteddata${encrypted}endencrypteddata`)
                console.log("")
                console.log("------------------------------------------------------")
                console.log("")
            })
            .catch(error => {
                console.log("")
                console.log("------------------------------------------------------")
                console.log("ERROR-FAILED TO CREATE DEPOSIT TRANSACTION")
                console.log("")
                console.log("Please try again or email the message below")
                console.log("")
                console.log(`To: ${emailEncrypt(xmrEmail)}`)
                console.log(`Subject: CLI Deposit Error`)
                console.log(`Message: ${text}`)
                console.log("")
                console.log(`Error: ${error}`)
                console.log("------------------------------------------------------")
                console.log("")
            })
    }

} else if (command === "w") {
    let proceed = true;
    if (!/^\S{45}$/.test(argv.secretwalletaddress)) {
        console.log("** Bad Secret Wallet Address (-w) **");
        proceed = false;
    }
    if (!/^\S{95}$/.test(argv.monerowalletaddress)) {
        console.log("** Bad Monero Wallet Address (-m) **");
        proceed = false;
    }
    if (isNaN(argv.amount)) {
        console.log("** Bad Amount **")
        proceed = false;
    }
    if (proceed && parseFloat(argv.amount) <= minAmount) {
        console.log(`** Bad Amount (-a) must be greater than ${minAmount}**`);
        proceed = false;
    }

    if (proceed) {
        const utc_timestamp = Date.now();
        const memo = utc_timestamp.toString();
        let amount = parseFloat(argv.amount);
        amount *= 1000000000000;
        amount = Math.floor(amount);

        const cmd = `secretcli tx compute execute secret19ungtd2c7srftqdwgq0dspwvrw63dhu79qxv88 '{"transfer": {"recipient": "${debug ? debugRecip : liverecip}", "amount": "${amount}", "memo":"${memo}"}}' --from ${argv.secretwalletaddress} --gas 300000 -y`
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(`Confirm amount: ${argv.amount} = ${amount} atomic units, (Y/n) `, async function (response) {
            if (response.toLowerCase() === "y") {
                const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });


                exec(cmd, (error, stdout, stderr) => {
                    if (error) {
                        console.log(`Error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`Error: ${stderr}`);
                        return;
                    }

                    const match1 = stdout.match(/txhash\"?:\s\"?(.*)\"/);
                    const match2 = stdout.match(/txhash:\s(.*)/);
                    let txHash;

                    if (match1 && match1.length > 0) {
                        txHash = match1[1];
                    } else if (match2 && match2.length > 0) {
                        txHash = match2[1];
                    }

                    if (stdout && txHash) {
                        encryptMessage(JSON.stringify({
                            sender: argv.secretwalletaddress,
                            amount: amount,
                            memo: memo,
                            walletAddress: argv.secretwalletaddress,
                            viewKey: "",
                            xmrWallet: argv.monerowalletaddress,
                            txhash: txHash || "None"
                        }))
                            .then(encrypted => {
                                console.log(`
                
                                            ------------------------------------------------------
                                            IMPORTANT
                        
                                            Mail the content below
                        
                                            To: ${emailEncrypt(xmrEmailTx)}
                                            Subject: Withdrawal Message
                                            Message: startencrypteddata${encrypted}endencrypteddata
                        
                                            ------------------------------------------------------
                                            `);

                            })
                            .catch(error => {
                                console.log(`
                                    
                                    ------------------------------------------------------
                                    ERROR-FAILED TO CREATE WITHDRAWAL TRANSACTION
                
                                    Please try again or email the message below
                
                                    To: ${emailEncrypt(xmrEmail)}
                                    Subject: CLI Withdrawal Error
                                    Message: ${cmd}
                                    
                                    ${error}
                                    ------------------------------------------------------
                
                                    `);
                            })
                    } else {
                        console.log(`
                                
                                ------------------------------------------------------
                                ERROR-FAILED TO CREATE WITHDRAWAL TRANSACTION
                
                                Please make sure the SecretCli is in your computers PATH and configured.
                
                                If you continue to have issues email Support at ${emailEncrypt(xmrEmail)}
                                ------------------------------------------------------
                
                                `);
                    }
                });


            } else if (response.toLowerCase() === "n") {
                console.log("Withdrawal Aborted")
            }
            rl.close();
        });


    }
} else {
    console.log("Invalid Command");
}
