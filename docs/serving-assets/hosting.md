---
title: Host and Serve Video and Images
description: How to host and manage your videos and images using the Shotstack CDN and Serve API.
---

# Hosting and Serving Assets

Shotstack provides a built in asset hosting service for your generated videos, images and audio files. Assets are
stored on a high availability storage system and served globally via a world wide content delivery network (CDN).

Hosting is enabled by default and all assets rendered via the editing API are immediately sent to the hosting service.
There is a webhook that posts a callback when the asset arrives at the hosting service and an API that allows you
to look up information about the asset and it's availability.

Assets are hosted with the following URL format:

https://cdn.shotstack.io/{{REGION}}/{{STAGE}}/{{OWNER_ID}}/{{FILENAME}}

Where the following parameters need to be replaced with:

| Parameter   | URL                         |
| :-----------| :-------------------------- |
| REGION      | The only region currently available is `au` |
| STAGE       | The staging environment: `stage` for the development sandbox, `v1` for live production usage. |
| OWNER_ID    | The owner or key ID. This is the `owner` parameter returned by render status requests or the key ID in dashboard |
| FILENAME    | The asset filename to serve to users |

An example URL looks like the following:

https://cdn.shotstack.io/au/v1/msgtwx8iw6/2826ceb8-f0d4-43da-a472-42d88161d1a3.mp4

:::info Tip

If you want to use your own storage or hosting provider you can [opt-out](self-host.md) and assets will not be moved to 
the the hosting service.

:::