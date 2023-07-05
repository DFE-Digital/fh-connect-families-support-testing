# fh-connect-families-support-testing
# Referral Service + Dashboard

This repository is responsible for validating / testing various applications on family-hubs/Connect families to support - referral service 

### Applications:

- Referral service

### Environments:

- development - develop branch
- test - main branch

### Regression 
Regression suites for each of these environments are configured using github actions

![alt text](https://github.com/DFE-Digital/fh-connect-families-support-testing/actions/workflows/test-referralUi-regression.yml/badge.svg)


### Prerequisites

- node
- yarn

Install dependencies with yarn

```shell
yarn install
```

### Running tests

Run interactive cypress UI

```shell
yarn run open:open:referral-dev
yarn run open:open:referral-test
```
