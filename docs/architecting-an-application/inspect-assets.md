---
title: Inspecting Assets
description: Inspect and view metadata for a media file using the probe endpoint
---

# Inspecting Assets

When working with user generated content or media form third party services, you may not have details about the 
asset, like width, height, duration, or framerate.

The Shotstack API comes with a **probe** endpoint that can be called to retrieve metadata for any asset hosted online.

### Calling the probe endpoint

To call the **probe** endpoint you send a get request to the following URL, with the URL of the asset to be inspected.

```bash
GET https://api.shotstack.io/{{ENV}}/probe/{{ASSET_URL}}
```

The `ASSET_URL` is the file to inspect and must be URL encoded.

An example URL is:

https://api.shotstack.io/v1/probe/https%3A%2F%2Fgithub.com%2Fshotstack%2Ftest-media%2Fraw%2Fmain%2Fcaptioning%2Fscott-ko.mp4

### Reading the probe response

The URL above returns the following payload:

```json
{
    "success": true,
    "message": "ok",
    "response": {
        "metadata": {
            "streams": [
                {
                    "index": 0,
                    "codec_name": "h264",
                    "codec_long_name": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
                    "profile": "Main",
                    "codec_type": "video",
                    "codec_time_base": "1001/48000",
                    "codec_tag_string": "avc1",
                    "codec_tag": "0x31637661",
                    "width": 1920,
                    "height": 1080,
                    "coded_width": 1920,
                    "coded_height": 1088,
                    "closed_captions": 0,
                    "has_b_frames": 1,
                    "pix_fmt": "yuv420p",
                    "level": 41,
                    "color_range": "tv",
                    "color_space": "bt709",
                    "color_transfer": "bt709",
                    "color_primaries": "bt709",
                    "chroma_location": "left",
                    "refs": 1,
                    "is_avc": "true",
                    "nal_length_size": "4",
                    "r_frame_rate": "24000/1001",
                    "avg_frame_rate": "24000/1001",
                    "time_base": "1/48000",
                    "start_pts": 0,
                    "start_time": "0.000000",
                    "duration_ts": 1241240,
                    "duration": "25.859167",
                    "bit_rate": "10044458",
                    "bits_per_raw_sample": "8",
                    "nb_frames": "620",
                    "disposition": {
                        "default": 1,
                        "dub": 0,
                        "original": 0,
                        "comment": 0,
                        "lyrics": 0,
                        "karaoke": 0,
                        "forced": 0,
                        "hearing_impaired": 0,
                        "visual_impaired": 0,
                        "clean_effects": 0,
                        "attached_pic": 0,
                        "timed_thumbnails": 0
                    },
                    "tags": {
                        "language": "eng",
                        "handler_name": "VideoHandler"
                    }
                },
                {
                    "index": 1,
                    "codec_name": "aac",
                    "codec_long_name": "AAC (Advanced Audio Coding)",
                    "profile": "LC",
                    "codec_type": "audio",
                    "codec_time_base": "1/48000",
                    "codec_tag_string": "mp4a",
                    "codec_tag": "0x6134706d",
                    "sample_fmt": "fltp",
                    "sample_rate": "48000",
                    "channels": 2,
                    "channel_layout": "stereo",
                    "bits_per_sample": 0,
                    "r_frame_rate": "0/0",
                    "avg_frame_rate": "0/0",
                    "time_base": "1/48000",
                    "start_pts": 0,
                    "start_time": "0.000000",
                    "duration_ts": 1242096,
                    "duration": "25.877000",
                    "bit_rate": "317375",
                    "max_bit_rate": "317375",
                    "nb_frames": "1215",
                    "disposition": {
                        "default": 1,
                        "dub": 0,
                        "original": 0,
                        "comment": 0,
                        "lyrics": 0,
                        "karaoke": 0,
                        "forced": 0,
                        "hearing_impaired": 0,
                        "visual_impaired": 0,
                        "clean_effects": 0,
                        "attached_pic": 0,
                        "timed_thumbnails": 0
                    },
                    "tags": {
                        "language": "eng",
                        "handler_name": "SoundHandler"
                    }
                }
            ],
            "chapters": [],
            "format": {
                "filename": "https://github.com/shotstack/test-media/raw/main/captioning/scott-ko.mp4",
                "nb_streams": 2,
                "nb_programs": 0,
                "format_name": "mov,mp4,m4a,3gp,3g2,mj2",
                "format_long_name": "QuickTime / MOV",
                "start_time": "0.000000",
                "duration": "25.920000",
                "size": "33513207",
                "bit_rate": "10343582",
                "probe_score": 100,
                "tags": {
                    "major_brand": "isom",
                    "minor_version": "512",
                    "compatible_brands": "isomiso2avc1mp41",
                    "encoder": "Hybrik 1.215.18"
                }
            }
        }
    }
}
```

The response includes a `response.metadata` object that includes `streams` and `format` metadata. The `streams` array
contains information about the media files audio and video streams.

Note that the video stream is usually index 0 but not always. Your application will need to parse the response and
check the `codec_type` to be sure.

The `format` object includes information about the file itself such as file size, filetype, duration and bitrate.

:::info Info

Under the hood the probe endpoint uses [FFprobe](https://ffmpeg.org/ffprobe.html) to read the metadata of a media file.
The `metadata` value is the exact same output that FFprobe returns, converted to JSON.

:::
