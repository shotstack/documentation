---
title: Limitations
description: System considerations and limitations
---

### Render time

Rendering video is a CPU and memory intensive process and takes time to complete – expect 1 to 2 seconds rendering time
per second of video.

It will be slower at higher resolutions \(i.e. 1080p HD vs SD\) and with effects, filters and transitions applied. Keep
this in mind when doing status requests to check if a render has completed or not.

### Usage limits

The production API has the following usage limits:

| Plan | Request Rate | Request Quota (per day) | Request Quota (per month) |
| :-- | :---: | :---: | :---: |
| Free | 1 | 100 | 1000 |
| Essentials | 10 | 1000 | 10000 |
| Professional | 10 | 10000 | 100000 |
| Custom | 10 | custom | custom |

The sandbox API has the following usage limits:

| Plan | Request Rate | Request Quota (per day) | Request Quota (per month) |
| :-- | :---: | :---: | :---: |
| Sandbox | 1 | - | 2000 |

Note: request quotas includes polling and rendering.

To reduce the number of polling requests consider using [webhooks](webhooks.md).

### Environment limits

The render environment has the following limits:

- Max 15 minutes render time. If your video does not render within 15 minutes contact us.
- The amount of footage you can ingest and create for each render is 512MB when using the [local disk
  type](disk-types.md#speed-optimised-local-disk-type) – i.e. the original footage you send to be trimmed and edited
  plus the size of the final output video must be less than 512MB.
- When using the [mount disk type](disk-types.md#file-size-optimised-mount-disk-type) you can ingest up to 5GB of source
  footage and assets and output a rendered video with a file size of 512MB.
