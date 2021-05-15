export default {
  "title": "Shotstack Documentation",
  "tagline": "",
  "url": "https://shotstack.io",
  "baseUrl": "/docs/guide/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "https://shotstack.io/favicon.ico",
  "organizationName": "Shotstack",
  "projectName": "Shotstack Docs",
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "Shotstack",
        "src": "https://shotstack.io/assets/img/logo.svg",
        "href": "/"
      },
      "hideOnScroll": false,
      "items": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/jeff/Documents/projects/shotstack/repos/docs/sidebars.js",
          "routeBasePath": "/"
        },
        "blog": false,
        "theme": {
          "customCss": "/home/jeff/Documents/projects/shotstack/repos/docs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};