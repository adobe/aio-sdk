/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const Sdk = require('../src/index')

test('module existence', () => {
  expect(Sdk.Core).toBeDefined()

  expect(Sdk.Core.Config).toBeDefined()
  expect(Sdk.Core.Config.set).toBeInstanceOf(Function)
  expect(Sdk.Core.Config.get).toBeInstanceOf(Function)
  expect(Sdk.Core.Config.reload).toBeInstanceOf(Function)
  expect(Sdk.Core.Config.delete).toBeInstanceOf(Function)

  expect(Sdk.Core.Logger).toBeDefined()
  expect(Sdk.Core.Logger).toBeInstanceOf(Function)
  const logger = new Sdk.Core.Logger()
  expect(logger.close).toBeInstanceOf(Function)
  expect(logger.error).toBeInstanceOf(Function)

  expect(Sdk.Core.Errors).toBeDefined()
  expect(Sdk.Core.TVMClient).toBeDefined()

  expect(Sdk.State).toBeDefined()
  expect(Sdk.State.init).toBeDefined()
  expect(Sdk.State.init).toBeInstanceOf(Function)

  expect(Sdk.Files).toBeDefined()
  expect(Sdk.Files.init).toBeDefined()
  expect(Sdk.Files.init).toBeInstanceOf(Function)

  expect(Sdk.Target).toBeDefined()
  expect(Sdk.Target.init).toBeDefined()
  expect(Sdk.Target.init).toBeInstanceOf(Function)

  expect(Sdk.Analytics).toBeDefined()
  expect(Sdk.Analytics.init).toBeDefined()
  expect(Sdk.Analytics.init).toBeInstanceOf(Function)

  expect(Sdk.CampaignStandard).toBeDefined()
  expect(Sdk.CampaignStandard.init).toBeDefined()
  expect(Sdk.CampaignStandard.init).toBeInstanceOf(Function)

  expect(Sdk.CustomerProfile).toBeDefined()
  expect(Sdk.CustomerProfile.init).toBeDefined()
  expect(Sdk.CustomerProfile.init).toBeInstanceOf(Function)

  expect(Sdk.Events).toBeDefined()
  expect(Sdk.Events.init).toBeDefined()
  expect(Sdk.Events.init).toBeInstanceOf(Function)
})
