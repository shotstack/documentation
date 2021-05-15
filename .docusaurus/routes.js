
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/docs/guide/',
  component: ComponentCreator('/docs/guide/','8d6'),
  
  routes: [
{
  path: '/docs/guide/',
  component: ComponentCreator('/docs/guide/','175'),
  exact: true,
},
{
  path: '/docs/guide/api-reference',
  component: ComponentCreator('/docs/guide/api-reference','474'),
  exact: true,
},
{
  path: '/docs/guide/architecting-an-application/caching',
  component: ComponentCreator('/docs/guide/architecting-an-application/caching','254'),
  exact: true,
},
{
  path: '/docs/guide/architecting-an-application/disk-types',
  component: ComponentCreator('/docs/guide/architecting-an-application/disk-types','82f'),
  exact: true,
},
{
  path: '/docs/guide/architecting-an-application/guidelines',
  component: ComponentCreator('/docs/guide/architecting-an-application/guidelines','f8a'),
  exact: true,
},
{
  path: '/docs/guide/architecting-an-application/html-support',
  component: ComponentCreator('/docs/guide/architecting-an-application/html-support','586'),
  exact: true,
},
{
  path: '/docs/guide/architecting-an-application/limitations',
  component: ComponentCreator('/docs/guide/architecting-an-application/limitations','0b5'),
  exact: true,
},
{
  path: '/docs/guide/architecting-an-application/webhooks',
  component: ComponentCreator('/docs/guide/architecting-an-application/webhooks','ee5'),
  exact: true,
},
{
  path: '/docs/guide/getting-started/core-concepts',
  component: ComponentCreator('/docs/guide/getting-started/core-concepts','571'),
  exact: true,
},
{
  path: '/docs/guide/getting-started/hello-world-postman',
  component: ComponentCreator('/docs/guide/getting-started/hello-world-postman','87e'),
  exact: true,
},
{
  path: '/docs/guide/getting-started/hello-world-using-curl',
  component: ComponentCreator('/docs/guide/getting-started/hello-world-using-curl','e7b'),
  exact: true,
},
{
  path: '/docs/guide/getting-started/request-api-keys',
  component: ComponentCreator('/docs/guide/getting-started/request-api-keys','8de'),
  exact: true,
},
{
  path: '/docs/guide/sdks',
  component: ComponentCreator('/docs/guide/sdks','2da'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
