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
    "colorMode": {
      "disableSwitch": true,
      "defaultMode": "light",
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#f8f8f2",
          "backgroundColor": "#272822"
        },
        "styles": [
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(162, 191, 252)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "#f92672",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "inserted"
            ],
            "style": {
              "color": "rgb(173, 219, 103)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "#8292a2",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "url"
            ],
            "style": {
              "color": "#a6e22e"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "#f8f8f2"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "#ae81ff"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function",
              "class-name"
            ],
            "style": {
              "color": "#e6db74"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "style": {
              "color": "#f8f8f2"
            }
          },
          {
            "types": [
              "selector",
              "doctype"
            ],
            "style": {
              "color": "#a6e22e",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "tag",
              "operator",
              "keyword"
            ],
            "style": {
              "color": "#66d9ef"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "#ae81ff"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)",
              "opacity": 0.7
            }
          },
          {
            "types": [
              "tag",
              "property"
            ],
            "style": {
              "color": "#f92672"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "#a6e22e !important"
            }
          },
          {
            "types": [
              "doctype"
            ],
            "style": {
              "color": "#8292a2"
            }
          },
          {
            "types": [
              "rule"
            ],
            "style": {
              "color": "#e6db74"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "navbar": {
      "logo": {
        "alt": "Shotstack",
        "src": "https://shotstack.io/assets/img/logo.svg",
        "href": "/",
        "target": "_self"
      },
      "items": [
        {
          "to": "/",
          "label": "Docs & Guides",
          "position": "left"
        },
        {
          "label": "API Reference",
          "href": "https://shotstack.io/docs/api",
          "target": "_self",
          "position": "left"
        },
        {
          "label": "Main Website",
          "href": "https://shotstack.io",
          "target": "_self",
          "position": "left"
        },
        {
          "label": "Login",
          "href": "https://dashboard.shotstack.io/",
          "target": "_self",
          "position": "right",
          "className": "btn btn-light"
        },
        {
          "label": "Sign Up",
          "href": "https://dashboard.shotstack.io/register",
          "target": "_self",
          "position": "right",
          "className": "btn btn-primary"
        }
      ],
      "hideOnScroll": false
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
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