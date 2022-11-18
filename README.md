# fh-info-sharing-testing

This repository is responsible for validating / testing various applications on family-hubs/info-sharing project

Applications:

- Admin service
- Referral service
- Identity and Access service

Environments:

- development - develop branch
- test - main branch

Regression suites for each of these environments are configured using github actions

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
yarn run open:open:admin-dev
yarn run open:open:admin-test
yarn run open:open:referral-dev
yarn run open:open:referral-test
```