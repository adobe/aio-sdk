<!-- 
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
-->
@adobe/aio-sdk
====================

[![Version](https://img.shields.io/npm/v/@adobe/aio-sdk.svg)](https://npmjs.org/package/@adobe/aio-sdk)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-sdk.svg)](https://npmjs.org/package/@adobe/aio-sdk)
[![Node.js CI](https://github.com/adobe/aio-sdk/workflows/Node.js%20CI/badge.svg)](https://github.com/adobe/aio-sdk/actions?query=workflow%3A"Node.js+CI")
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 
[![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-sdk/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-sdk/)

This is the Adobe I/O SDK. This contains:
- [Core SDK](https://github.com/adobe/aio-sdk-core)
- [State Library](https://github.com/adobe/aio-lib-state)
- [Files Library](https://github.com/adobe/aio-lib-files)
- [Adobe Target Library](https://github.com/adobe/aio-lib-target)
- [Adobe Analytics Library](https://github.com/adobe/aio-lib-analytics)
- [Adobe Campaign Standard Library](https://github.com/adobe/aio-lib-campaign-standard)
- [Adobe Customer Profile Library](https://github.com/adobe/aio-lib-customer-profile)
- [Adobe I/O Events](https://github.com/adobe/aio-lib-events)

[SDK Health](./health.md)

The module can be added to your project with:

```javascript
npm install @adobe/aio-sdk --save
```

Here is a snippet:

```javascript
const adobeIOSdk = require('@adobe/aio-sdk')
// OR ...
const { Core, State, Files, Target, Analytics, CampaignStandard, CustomerProfile, Events } = require('@adobe/aio-sdk')

// Core example
// set a config value using the Core SDK Config module
Core.Config.set('my.token', 1234)

// State example
// init when env vars __OW_API_KEY and __OW_NAMESPACE are set (e.g. when running in an OpenWhisk action)
const state = await State.init()
// get a value from the state store
const { value, expiration } = await state.get('key')
 
// Files example
// init when env vars __OW_API_KEY and __OW_NAMESPACE are set (e.g. when running in an OpenWhisk action)
const files = await Files.init()
// write private file
await files.write('mydir/myfile.txt', 'some private content')

// Target example
const targetClient = await Target.init('<tenant>', 'x-api-key', '<valid auth token>')
const activities = await targetClient.getActivities({limit:5, offset:0})

// Analytics example
const analyticsClient = await Analytics.init('<companyID>', 'x-api-key', '<valid auth token>')
const collections = await analyticsClient.getCollections({limit:5, page:0})

// Campaign Standard example
const campaignStandardClient = await CampaignStandard.init('<tenant>', 'x-api-key', '<valid auth token>')
const profiles = await campaignStandardClient.getAllProfiles({ filters: [ 'byCRMId' ], hasCustomFilter: true })

// Customer Profile example
const customerProfileClient = await CustomerProfile.init('<tenant>', '<imsOrgId>', 'x-api-key', '<valid auth token>', '[sandbox]')
const profileParams = {
      entityId: '<entityId>',
      entityIdNS: '<entityIdNS>'
    }
const customerProfile = await customerProfileClient.getProfile(profileParams)

// Adobe I/O Events sample
const eventsSDKClient = await Events.init('<orgId>', '<api-key>', '<valid JWT token>', '<http options>')
const eventsProviders = await eventsSDKClient.getAllProviders('<consumerOrgId>')

```

## Explore

`goto` [API](./doc/api.md)

## Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

## Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
