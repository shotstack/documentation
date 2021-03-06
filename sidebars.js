module.exports = {
  someSidebar: [
    {
      type: "doc",
      id: "what-is-shotstack",
    },
    {
      "Getting Started": [
        "getting-started/core-concepts",
        "getting-started/request-api-keys",
        "getting-started/hello-world-using-curl",
        "getting-started/hello-world-postman",
      ],
      "Architecting an Application": [
        "architecting-an-application/guidelines",
        "architecting-an-application/webhooks",
        "architecting-an-application/merging-data",
        "architecting-an-application/html-support",
        "architecting-an-application/disk-types",
        "architecting-an-application/caching",
        "architecting-an-application/inspect-assets",
        "architecting-an-application/limitations",
      ],
      "Serving Assets": [
        "serving-assets/hosting",
        "serving-assets/serve-api",
        "serving-assets/polling-vs-webhook",
        "serving-assets/self-host",
      ],
    },
    {
      type: "doc",
      id: "api-reference",
    },
    {
      type: "doc",
      id: "sdks",
    },
  ],
};
