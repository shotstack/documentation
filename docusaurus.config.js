module.exports = {
  title: "Shotstack Documentation",
  tagline: "",
  url: "https://shotstack.io",
  baseUrl: "/docs/guide/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://shotstack.io/favicon.ico",
  organizationName: "Shotstack", // Usually your GitHub org/user name.
  projectName: "Shotstack Docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "Shotstack",
        src: "https://shotstack.io/assets/img/logo.svg",
        href: "/"
      }
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
