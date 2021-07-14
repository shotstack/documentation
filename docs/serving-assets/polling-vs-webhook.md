---
title: Shotstack Hosting Asset Webhook
description: Receive a webhook when an asset is copied to the Shotstack CDN
---

# Polling vs Webhook

When a video or image is generated using the Shotstack editing API the file is copied to the hosting and storage
location asynchronously. This process normally takes a few seconds and there are two ways to know when the file is ready.

### Polling the API

You can check the [Serve API](serve-api.md) by polling asset 
[endpoint by render id](serve-api.md#look-up-an-asset-by-render-id). When the `status` has a value of `ready` then the 
file has been copied and is ready to view. Not that this request may return up to 3 assets, each of which will need to
be checked.

### Receiving a webhook

Instead of polling you can request a webhook callback is sent to your server with details of the transfer when it either
completes or fails. To receive a webhook you add the following to the root level of the JSON render request:

```json
"callback": "https://my-server.com/webhook.php"
```

Where `https://my-server.com/webhook.php` is your own URL and webhook receiving script, or subscriber.

The webhook body POSTed tou your server will look like:

```json
{
    "type": "serve",
    "action": "copy",
    "id": "e4433cbf-e501-76a2-ac8b-715d26997540",
    "render": "d2b46ed6-998a-4d6b-9d91-b8cf0193a655",
    "owner": "jwolrq9ms0",
    "status": "ready",
    "url": "https://cdn.shotstack.io/au/v1/jwolrq9ms0/d4697b5a-4d73-4f33-822e-2f8d92db0576.mp4",
    "error": null,
    "completed": "2021-07-12T11:04:44.574Z"
}
```

Note that the `id` is the asset id and `render` is the render id.

:::note Note

You may receive up to 3 callback POSTs, one for each asset, if you create a video with a thumbnail and poster image.

:::

To learn more about setting up and using web hooks check the [webhook guide](/architecting-an-application/webhooks.md) 
in the Architecting an Application section.

### Using the CDN URL without checking the status

If you know your owner id and the name of the file (you can get this from the render endpoint status request), you can
also construct the URL in the [correct format](hosting.md) and use this straight away in your application. There may be
a few seconds where the file is not available but if you do not need the asset to be available immediately this approach
can also work.
