---
title: Merging Data
description: How to build templates with merge fields.
---

# Merging Data

Shotstack makes it easy to build reusable templates with **merge fields**. Similar to what you would expect with a mail
merge application or template language.

Shotstack edits are described using JSON to create a template. Within the JSON you can use placeholders with double
braces, like this: `{{ FIRST_NAME }}`.

The `merge` parameter provides an array of key/value pairs that can be used to find and replace the placeholder value.


### Setting up the template

First of all, prepare the template with a placeholder. The JSON edit below will generate a 5 second video with a text
title. A placeholder will be replaced when the video is rendered:

```json
{
    "timeline": {
        "tracks": [
            {
                "clips": [
                    {
                        "asset": {
                            "type": "title",
                            "text": "Hello {{ NAME }}",
                            "style": "future"
                        },
                        "start": 0,
                        "length": 5
                    }
                ]
            }
        ]
    },
    "output": {
        "format": "mp4",
        "resolution": "hd"
    }
}
```

In the JSON above we have added a placeholder `{{ NAME }}` to the title `text` parameter. Our JSON is now ready to be
used as a template.

:::info Tip

Whitespace between the braces and text is ignored. The placeholder text is case sensitive and we recommend all upper
case, snake case variable names, using underscores (`_`) instead of spaces. At this time the `{{` delimiter can not be
changed.

:::


### Setting up the merge field

To merge data, use the `merge` parameter with an array of key/value pairs, like this:

```json
"merge": [
    {
        "find": "NAME",
        "replace": "World"
    }
]
```

:::info Tip

Note that the `find` parameter value does not include the braces delimiter.

:::

Before posting the JSON to the API, add the merge array so that the final JSON body looks like:

```json
{
    "merge": [
        {
            "find": "NAME",
            "replace": "World"
        }
    ],
    "timeline": {
        "tracks": [
            {
                "clips": [
                    {
                        "asset": {
                            "type": "title",
                            "text": "Hello {{ NAME }}",
                            "style": "future"
                        },
                        "start": 0,
                        "length": 5
                    }
                ]
            }
        ]
    },
    "output": {
        "format": "mp4",
        "resolution": "hd"
    }
}
```

### Checking the merge status

If the render fails or you want to check that the merge was successful, you can pass the query string parameter
`?data=true&merge=true` in the status request.

The status request would be similar to:

```bash
GET https://api.shotstack.io/{{ENV}}/render/{{RENDER_ID}}?data=true&merged=true
```

The `data` parameter returns the edit JSON in the response, and `merged` merges the data with the edit JSON.

### Using multiple placeholders and merge fields

You can use multiple placeholders and merge fields for the following scenarios:

- Multiple placeholders with the same variable, which will be replaced by a single merge field.
- Multiple placeholders with different variables, which will be replaced by multiple merge fields.

### Working with types

The Shotstack API aims to use the correct data type for a value. Text uses strings, numbers use floats or integers and
booleans use true or false (not enclosed in quotes).

Type safe example:

```json
"start": 5.2 // Good
```

```json
"start": "5.2" // Bad, validation error
```

Any value in the JSON can be set as a placeholder. Because the placeholder must be a string, the value in the merge
field must use the correct type.

If you set a clips `start` parameter as a place holder you would use:

```json
"start": "{{ START }}"
```

In the merge field you would use the correct type, a `float`:

```json
"merge": [
    {
        "find": "START",
        "replace": 5.2
    }
]
```
