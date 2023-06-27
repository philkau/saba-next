# saba-future
This will be the awesome prediction market that will be the future for us

# Vision
    - Any resolvable prediction (event) can allow market exchanges

# Tech Overview
    - Utilize Polygon Chain (L2 sidechain of Ethereum) for web3 deployment
    - hardhat folder & nextjs folder

# Prerequisite
    - npm (16.16.0)
        - highly recommend nvm
    - yarn (1.22.15)
        - there are some module relationships that is using yarn
    - Alchemy Account
    - Hardhat
        - `npm install --save-dev hardhat`
    - Metamask

## Terminology
    - 3 Roles
            - Owner (PredictionWorld contract creator)
            - Admin (Will be owner by default) - create/resolve markets
            - Player - make bets * owner and admin can do so too
    - Create Prediction (Owner/Admin)
        - check /hardhat/contracts/PredictionWorld3.sol
    - Place Bet
        - check /hardhat/contracts/PredictionWorld3.sol
    - Event Resolve(settle market)
        - check /hardhat/contracts/PredictionWorld3.sol

## MVP Stories
    - Functioning (With Metamask Installed)
        - US1: Admin can create market V
        - US2: New Player start with zero tokens V
        - US3: Admin can transfer tokens to New(Any) Player V
        - US4: Player with SURE can place bet on market V
            - note, this one assumes Gas tank is still with gas
        - US5: Admin can settle markets(distributeWinning) V
        - US6: First time players(without metamask) can just use a social login to enter V
        - US11: First time players(without metamask) can place bet without SURE(if early bird) and no matic V
        - US15: Show outcome as Yes/No V

    - Not yet functioning
        - US7: First time players will see 1000 SURE tokens in balance
        - US8: Show correct SURE token - web and wallet show the same numbers
        - US12: Single Market>刪除按鈕滑上去之後沒有任何改變，建議至少給予cursor pointer
        - US13: Loading for main page
        - US14: I want early bird players to directly have 1000 SURE without placing bet 
        
        - US16: 

    - Obsolete
        - US10*: Players that have matic but no SURE can place bets from Early Bird V
        - US9*: Players don't have to have matic to place bet

### Backlog
    - Seamless Signup
    - Show actual winnings for players
    
    - Map wallet account with a name
    - Filter & searches
    - Rake for resolvement
    - Oracle
        - Automatic prediction resolvement
    - Real Matic
    - Player specific resolve list
    - Tags for prediction categories
    - Refactor

#### Backbacklog XD
        - Partial taking of market
        - Cancel market(only the part not yet taken)
        - Prediction Creation by Player
        - Total Pool Betting
    
    