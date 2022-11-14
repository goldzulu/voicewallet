# Voice Wallet A Google Assistant (Hey Google) AI Defi Wallet

Voice Wallet is a proof of concept cross chain voice wallet . The Voice Wallet can be operated by voice anytime and anywhere via any device that has a Google Assistant, including the millions of mobile phones out there.

By having a voice wallet, we can probably solve the following problems:
* **LACK OF INTERFACES** - Massive amount of new users can get onboarded to the crypto space via more than 100 millions of existing IoT devices, mobile phones and smart speakers out there

* **HARD TO START** - Voice removes the barrier to entry by not needing any special installation of software etc, i.e. everyone have a mobile phone at least! And they do not need to be technical as they can just converse in natural language. No special installation is needed as Google Assistant comes standard on most mobile phones and smart speakers.

* **SOCIAL GOOD** - people with disabilities that has prevented them from using crypto e.g. visually impaired, amputees etc can now do so simply by conversing in natural language

* **LANGUAGE BARRIER** - Google assistant can be use in over 40 languages in more than 80 countries around the world. This means that people from all over the world can now use crypto without having to learn English or any other language. This is especially important for the developing world where English is not the first language. 

* **INCLUSITIVITY** By including people who have disabilities, we can make crypto more inclusive and accessible to everyone. This is especially important for the developing world where people with disabilities are often neglected and left out of the mainstream economy. By allowing more languages too, we can make crypto more inclusive and accessible to everyone.

* **OVERCOMING COMPLEXITY** - Voice Wallet can be used to simplify the complex crypto space by providing a simple interface to interact with the blockchain. This can be used to onboard new users to the crypto space and also to help existing users to interact with the blockchain in a more natural way. No more need to learn how to use a wallet, how to use a DEX, how to use a DeFi app etc. Just use your voice to interact with the blockchain. New features can be "summoned" by simply asking for it in a gradual incremental manner

* **MOBILITY** - You can use this on the move while walking, comuting or in the car with a Google enabled headphones (for additional privacy).

It is working albeit very rough and can currently check the balance accross a wallet address (currently defaulted to one of my own) in Mainnet for the native currency on the following chains:
* Ethereum (ETH)
* Binance Smart Chain (BNB)
* Polygon (MATIC)
* Fantom (FTM)
* Cronos (CRONOS)
* Avalanche (AVAX)

The vision is to onboard as many Google Assistant voice users out there to the web3 world effortlessly.

Voice Wallet brings the ease and convenience of accessing information the web3 and defi world via voice commands rather than navigating endless screens and clicking on multiple buttons. It act as a shortcut to information. 

You can say things below to Voice Wallet:

- "Hey Google, ask Voice Wallet to check my wallet balance"

The following was considered and worked on but given more time, hoping to finish implementing after the hackathon. As most of the necessary legwork has been done defining the AI Model and Google Actions Console and metadata, it would not take too long to implement the following commands:

- "Notify me when a new transaction occurs on my wallet" using Moralis Streams API
- "What is the total value of my tokens in US dollars?" using Moralis
- "Read me my last transaction" using Moralis Streams API Cached Data
and many more.

## Future Work

Additional work currently in progress and can be accellerated, given support from crypto world:
- Using Axelar to move USDC and common assets using Satellite across chains

    - "Hey Google, Ask Voice Wallet to move my USDC from Ethereum to Binance"
- Using GPT-3 Codex to provide complex voice queries to the blockchain using Covalent SQL API

    - "Hey Google, Ask Voice Wallet to show me all the transactions that has more than 1 ETH in it"
- Easier onboarding of new users to the crypto space by having "preset" wallets containing common assets like BNB, USDC, ETH, MATIC, BNB, FTM, CRONOS, AVAX for them to start with having the major chain sponsoring a few dollars worth of native currency to get them started

    - "Hey Google, Ask Voice Wallet to create a new wallet for me sponsored by Binance"

## Running the code

Unfortunately, the process of submission and approval on Google side takes time and can be weeks even for defi/finance voice skills so you can't invoke Voice Wallet on a public device.

THe running voice applicaton can be seen via the preview video that can be found here https://www.youtube.com/watch?v=jbNqZC2qqgg.

I am hoping to also uploading soon a 4 hours+ video on the process of creating the the voice wallet including the actual builds etc.

A user can however use the source code provided to run a "private" version of the skill that will be available on all their devices that is attached to their Google Actions developer account. It is not for the faint hearted and involved quite a few steps, but for those who knows:
- Prepare firebase, google developer account, Google cloud
    - Create a google actions developer account
    - Create a new project and take note of the project ID
    - Enable the Google Cloud API for Cloud Functions and Building
    - Setup the billing account for Google cloud and attach to the project and organisation
- index.js
    - Replace the DEFAULT_ADDRESS with your own wallet address (in future this will be either created or you can enter the wallet address via a companion site/app)
    - Replace the moralisApiKey with your own moralis API key
    - run gactions deploy preview --project-id xxxx from project root

In the future, I might also generate a generator that can then freshly generate a voice wallet specifically for the user (with personalisation and customisation) and create an automatic build and deploy so that the wallet is trully "yours".

Alternatively if you want to try, you can give me your google account email I might be able to add you as a beta tester. In any case reach out to me if you have any questions.

## Moralis Google Hackathon 2022

This is a fresh new entry for the Moralis Google Defining Defi Hackathon 2022. In previous hackathon wins, Alexa was the platform used which is completely different environment and system. In the future, we hope to combine, converge the two platforms together and include other voice assistants such as Samsung Bixby and possibly Siri

## Youtube Recording

There is actually a video recording of more than 4 hours of me building this voice app from scratch. If you want to painstakingly watch it, I will add it as soon as possible under VIDEO.md file. Unfortunately i can't provide it now as I am short of time.

## Metagineers

Metagineers is a new startup that operates on the convergance of Voice AI, Augment Reality and Defi. It is enabling voice for the web3 world. If you are interested, please reach out and follow me at https://twitter.com/voicetechguy1

