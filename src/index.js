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

const Core = require('@adobe/aio-sdk-core')
const State = require('@adobe/aio-lib-state')
const Files = require('@adobe/aio-lib-files')
const Target = require('@adobe/aio-lib-target')
const Analytics = require('@adobe/aio-lib-analytics')
const CampaignStandard = require('@adobe/aio-lib-campaign-standard')

/** @module @adobe/aio-sdk */
module.exports = {
  /**
   * The Core SDK of the Adobe I/O SDK
   *
   * @see {@link https://github.com/adobe/aio-sdk-core/blob/master/README.md|@adobe/aio-sdk-core}
   */
  Core,
  /**
   * The State module of the Adobe I/O SDK
   *
   * @see {@link https://github.com/adobe/aio-lib-state/blob/master/README.md|@adobe/aio-lib-state}
   */
  State,
  /**
   * The Files module of the Adobe I/O SDK
   *
   * @see {@link https://github.com/adobe/aio-lib-files/blob/master/README.md|@adobe/aio-lib-files}
   */
  Files,
  /**
   * The Adobe Target module of the Adobe I/O SDK
   *
   * @see {@link https://github.com/adobe/aio-lib-target/blob/master/README.md|@adobe/aio-lib-target}
   */
  Target,
  /**
   * The Adobe Analytics module of the Adobe I/O SDK
   *
   * @see {@link https://github.com/adobe/aio-lib-analytics/blob/master/README.md|@adobe/aio-lib-analytics}
   */
  Analytics,
  /**
   * The Adobe Campaign Standard module of the Adobe I/O SDK
   *
   * @see {@link https://github.com/adobe/aio-lib-campaign-standard/blob/master/README.md|@adobe/aio-lib-campaign-standard}
   */
  CampaignStandard
}
