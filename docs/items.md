# Items

## Overview

The Auto.Works player can display items of various types. Currently supported types are:
- Photo
- Video
- Interior 360˚ Panorama
- Exterior 360˚ Panorama

All types share some required information to populate the thumbnail navigation, and all image based types also support [hotspot](#hotspots) functionality to link between items.

All items to be displayed go under an array of `items`.

## Photo

Display a single photo, optionally using a responsive image to supply content to devices at an optimal size.

In showcase mode, the image gains zoom controls and when size permits, a minimap.

```js
{
  // Required
  type: 'photo',
  thumbnail: 'thumbnail-300x150.jpg',
  src: 'photo-1000x562.jpg',
  minimap: 'minimap-320x180.jpg',

  // Optional
  id: 'dashboard',
  caption: 'Example',
  srcSet: {
    560: 'photo-560x315.jpg',
    800: 'photo-800x450.jpg',
    1000: 'photo-1000x562.jpg',
    1600: 'photo-1600x900.jpg',
    2000: 'photo-2000x1125.jpg',
    3000: 'photo-3000x1687.jpg',
    4000: 'photo-4000x2250.jpg',
  },
  hotspots: []
}
```

## Video

Present an `.mp4` format video within an HTML video player, with a poster image displayed before loading.

```js
{
  // Required
  type: 'video',
  thumbnail: 'thumbnail-300x150.jpg',
  poster: 'photo-1280×720.jpg',
  src: 'video-1280×720.mp4'

  // Optional
  id: 'test-drive-footage',
  aspectRatio: 9 / 16,
  caption: 'Overwritten caption'
}
```

## Exterior 360˚ Panorama

Display an array of photos in sequence, which can mimic rotation on touch, drag or scroll.

Each image can utilise responsive image functionality to reduce data usage and load times.

```js
{
  // Required
  type: 'exterior',
  thumbnail: 'thumbnail-300x150.jpg',
  images: [
    {
      // Required
      src: 'photo1-1000x562.jpg',

      // Optional
      srcSet: {
        560: 'photo1-560x315.jpg',
        800: 'photo1-800x450.jpg',
        1000: 'photo1-1000x562.jpg',
        1600: 'photo1-1600x900.jpg',
      },
      hotspots: [] // See Hotspots documentation
    },
    // …additional images…
  ]

  // Optional
  id: 'exterior-with-doors-closed',
  caption: 'Overwritten caption',
  reverseDirection: true, // Reverses the spin direction to account for ordering of source images
  initialIndex: 40,
}
```

## Interior 360˚ Panorama

Display an interactive panoramic image, with visible zoom controls when in showcase mode.

```js
{
  // Required
  type: 'interior',
  thumbnail: 'thumbnail-300x150.jpg',
  src: 'equirectangular-projection.jpg',
  poster: 'poster-1000x562.jpg',

  // Optional
  id: 'interior-driver-view',
  caption: 'Overwritten caption',
  hotspots: [] // See Hotspots documentation
}
```

## Hotspots

Can be used to highlight particular area of an item and can link through to other items.

```js
[
  {
    id: 'air-con' // Links to an item which has a matching id
    tooltip: 'Air Conditioning', // Appears on hover

    // Photo and Exterior item types use values between 0-1 to position the hotspot
    x: 0.87,
    y: 0.3,

    // Interior item types use pitch, yaw and field-of-view values
    pitch: -11.666,
    yaw: 26.393,
    hfov: 90,

    // Interior items can also auto-focus on a specific hotspot on load
    autoFocus: true,
  }
  // …additional hotspots…
]
```
