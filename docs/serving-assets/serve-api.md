---
title: Manage Hosted Assets withe the Serve API
description: Manage, lookup and delete assets hosting on teh Shotstack asset hosting CDN via the Serve API
---

# Serve API

Use the Serve API to interact with hosted assets, to look up their status, file size, URL and also to delete assets.

When a render tasks completes, it typically takes a few extra seconds to copy the output file to the hosting service.
You may wish to check the status of the import step or look up other details such as file size or the assets URL.

### Look up an asset by render id

You can look up the details of an asset by it's render id. Unless you receive webhooks this is the only way you can
retrieve an asset as you will not yet know it's asset id.

Given a render id you can fetch an asset using the following cURL command:

```bash
curl -X GET \
     -H "Content-Type: application/json" \
     -H "x-api-key: ptmpOiyKgGYMnnONwvXH7FHzDGOazrIjaEDUS7Cf" \
     https://api.shotstack.io/serve/stage/assets/render/d2b46ed6-998a-4d6b-9d91-b8cf0193a655
```

In the above example the `stage` is the sandbox endpoint (you can also use `v1`), `d2b46ed6-998a-4d6b-9d91-b8cf0193a655`
is the render id and `ptmpOiyKgGYMnnONwvXH7FHzDGOazrIjaEDUS7Cf` is the API key found in the dashboard.

You should receive a response that looks something like:

```json
{
    "data": [
        {
            "type": "assets",
            "attributes": {
                "id": "e4433cbf-e501-76a2-ac8b-715d26997540",
                "owner": "jwolrq9ms0",
                "region": "au",
                "renderId": "d4697b5a-4d73-4f33-822e-2f8d92db0576",
                "filename": "d4697b5a-4d73-4f33-822e-2f8d92db0576.mp4",
                "url": "https://cdn.shotstack.io/au/v1/jwolrq9ms0/d4697b5a-4d73-4f33-822e-2f8d92db0576.mp4",
                "status": "ready",
                "created": "2021-07-12T11:04:44.574Z",
                "updated": "2021-07-12T11:04:44.854Z"
            }
        }
    ]
}
```

Note that `data` is an array of objects - each video, image, mp3, thumbnail and poster asset created by the editing API 
is a unique asset within the Serve API. It is possible for a render task to generate up to 3 unique assets each with 
their own asset id and details. In the example response above, `e4433cbf-e501-76a2-ac8b-715d26997540` is the unique 
asset id.

:::note Note

The example above uses cURL but you can use any programing language or framework that can send requests and
receive responses from a RESTful JSON API.

:::

### Look up an asset by asset id

Every asset has a unique asset id which is different from the render id, remember that a render task can create a number
of different files. To lookup a specific asset you use the asset id, this can be done with the following cURL command:

```bash
curl -X GET \
     -H "Content-Type: application/json" \
     -H "x-api-key: ptmpOiyKgGYMnnONwvXH7FHzDGOazrIjaEDUS7Cf" \
     https://api.shotstack.io/serve/stage/assets/e4433cbf-e501-76a2-ac8b-715d26997540
```

The response will be exactly the same as the request by render id:

```json
{
    "data": [
        {
            "type": "assets",
            "attributes": {
                "id": "e4433cbf-e501-76a2-ac8b-715d26997540",
                "owner": "jwolrq9ms0",
                "region": "au",
                "renderId": "d4697b5a-4d73-4f33-822e-2f8d92db0576",
                "filename": "d4697b5a-4d73-4f33-822e-2f8d92db0576.mp4",
                "url": "https://cdn.shotstack.io/au/v1/jwolrq9ms0/d4697b5a-4d73-4f33-822e-2f8d92db0576.mp4",
                "status": "ready",
                "created": "2021-07-12T11:04:44.574Z",
                "updated": "2021-07-12T11:04:44.854Z"
            }
        }
    ]
}
```

### Delete an asset by asset id

To delete an asset, you need to use the asset id, if you do not know the asset id, but know the render id, you will
first need to fetch the asset by render id.

If you know the asset id of the asset you wish to delete you can use the following cURL command:

```bash
curl -X DELETE \
     -H "Content-Type: application/json" \
     -H "x-api-key: ptmpOiyKgGYMnnONwvXH7FHzDGOazrIjaEDUS7Cf" \
     https://api.shotstack.io/serve/stage/assets/e4433cbf-e501-76a2-ac8b-715d26997540
```

You will receive a `204` response code, meaning the file has been deleted from storage and will expire from the CDN
cache in due course. While the file is deleted the record still remains in the API with the status of `deleted`. The 
deleted file will no longer use up your storage allowance.

:::note Note

The API uses the [JSON:API](https://jsonapi.org/) specification making it easy to consume using an existing 
[library](https://jsonapi.org/implementations/).

:::