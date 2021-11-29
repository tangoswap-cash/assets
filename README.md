# MIST Assets Info

![Check](https://github.com/trustwallet/assets/workflows/Check/badge.svg)

# To Add Logo
- [ ] Fork the Github repository

- [ ] Create folder with name of token smartcontact address in **CHECKSUM** format `blockchains/smartbch/assets/<token_smartcontract_address>/`.

- [ ] Tell your designer that token image must be in PNG format, avoid transparent background, recommended size 256x256px, with max file size of 100kB.

- [ ] Upload your logo with file named `logo.png` to previously created folder with smartcontract address, and if you done all correctly your path should look like this. `blockchains/smartbch/assets/0x1234567461d3f8Db7496581774Bd869C83D51c93/logo.png`

- [ ] Run `yarn run check` and make sure tests pass (nvm use && npm i -g yarn && yarn && yarn run check)

- [ ] Create a pull request to the main repo

- [ ] Add link to mistswapdex/default-token-list Issue


## Scripts

There are several scripts available for maintainers:

- `yarn run check` -- Execute validation checks; also used in continuous integration.
- `yarn run check-sanity` -- Strict subset of checks
- `yarn run fix` -- Perform automatic fixes where possible
- `yarn run fix-sanity` -- Stricter subset
- `yarn run updateAuto` -- Run automatic updates from external sources, executed regularly (GitHub action)
- `yarn run update` -- Run manual updates from external sources, for manual use.
- `yarn test` -- Run script unit tests
- `yarn lint` -- Run Lint static code check
