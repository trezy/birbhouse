// Module imports
import { NextSeo as NextSEO } from 'next-seo'
import React from 'react'
import moment from 'moment'





// Component imports
import { version } from '../package.json'





// Component Constants
/* eslint-disable no-undef,prefer-destructuring */
const buildDate = process.env.buildDate
const nodeVersion = process.env.nodeVersion
/* eslint-enable */





const Version = () => (
  <NextSEO title="Version Information">
    <section className="hero">
      <table>
        <tbody>
          <tr>
            <th>App Version</th>

            <td>
              <a target="_blank" rel="noopener noreferrer" href={`https://github.com/trezy/trezy.com/releases/tag/v${version}`}>
                v{version}
              </a>
            </td>
          </tr>

          <tr>
            <th>Node Version</th>

            <td>
              <a target="_blank" rel="noopener noreferrer" href={`https://github.com/nodejs/node/releases/tag/${nodeVersion}`}>
                {nodeVersion}
              </a>
            </td>
          </tr>

          <tr>
            <th>Built On</th>

            <td>
              <time dateTime={buildDate}>{moment.utc(buildDate).format('MMMM Do YYYY, hh:mm z')}</time>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </NextSEO>
)





export default Version
