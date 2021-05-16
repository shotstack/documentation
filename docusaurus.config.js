module.exports = {
  title: "Shotstack Documentation",
  tagline: "",
  url: "https://shotstack.io",
  baseUrl: "/docs/guide/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://shotstack.io/favicon.ico",
  organizationName: "Shotstack",
  projectName: "Shotstack Docs",
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/okaidia'),
    },
    navbar: {
      logo: {
        alt: "Shotstack",
        src: "https://shotstack.io/assets/img/logo.svg",
        href: "/",
        target: "_self"
      },
      items: [
        {
          to: "/",
          label: "Docs & Guides",
        },
        {
          label: "API Reference",
          href: "https://shotstack.io/docs/api",
          target: "_self"
        },
        {
          label: "Main Website",
          href: "https://shotstack.io",
          target: "_self"
        },
        {
          label: "Login",
          href: "https://dashboard.shotstack.io/",
          target: "_self",
          position: "right",
          className: "btn btn-light",
        },
        {
          label: "Sign Up",
          href: "https://dashboard.shotstack.io/register",
          target: "_self",
          position: "right",
          className: "btn btn-primary",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
