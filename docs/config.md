# Config

## Appearance

### `colors`

- **Type:** Object
- **Default:** `null`

An accent colour used for navigation highlights, hotspots, active states etc.
Optionally uses an additional colour for text when used over the accent colour.

```js
colors: {
  accent: '#984eab',
  accentText: '#fff'
}
```

### `containerClass`

- **Type:** String
- **Default:** `null`

Used to add custom styles to the container element.

```js
containerClass: 'custom-container-class'
```

### `hideBranding`

- **Type:** Boolean
- **Default:** `false`

Disables the Auto.Works header above the main viewing area.

```js
hideBranding: true
```

### `initialIndex`

- **Type:** Number
- **Default:** `0`

Loads the viewing area at a given index, based on the order of the items.

```js
initialIndex: 3
```

### `ratio`

- **Type:** Number
- **Default:** `0.5625` (16:9)

Sets the ratio for the main viewing area. Supplied images should match this ratio. The number is the result of the ratio height divided by its width.

```js
ratio: 2 / 3 // 0.666… (a 3:2 ratio)
```

### `splashDuration`

- **Type:** Number
- **Default:** `0`

Displays an Auto.Works splash screen at first load for the specified time.
Value should be supplied in milliseconds.

```js
splashDuration: 3000 // 3 seconds
```

### `thumbnailRatio`

- **Type:** Number
- **Default:** `0.5` (2:1)

Sets the ratio for each thumbnail below the main viwing area. Supplied thumbnail images
should match this ratio. The number is the result of the ratio height divided by its width.

```js
thumbnailRatio: 2 / 3 // 0.666… (a 3:2 ratio)
```

### `watermark`

- **Type:** React component
- **Default:** “Images by AutoLoadIT” logo

Display an image or custom component in the bottom right of the Viewer when in showcase mode. Pass `false` to disable.

```js
hideBranding: true
```


## Events

### `onNavigation`

- **Type:** function
- **Default:** `null`

Content which appears the main viewing area when in showcase mode.

```js
onNavigation: ({ id, index, type }) => {
  console.log(`Navigated to “${id}” item at index ${index} (${type})`)
}
```

### `onShowcaseEnter`

- **Type:** function
- **Default:** `null`

Content which appears the main viewing area when in showcase mode.

```js
onShowcaseEnter: () => { console.log('Entered showcase mode') }
```

### `onShowcaseExit`

- **Type:** function
- **Default:** `null`

Content which appears the main viewing area when in showcase mode.

```js
onShowcaseExit: () => { console.log('Exited showcase mode') }
```

### `onVideoProgress`

- **Type:** function
- **Default:** `null`

Content which appears the main viewing area when in showcase mode.

```js
onVideoProgress: ({ id, index, progress }) => {
  console.log(`Video “${id}”at index ${index} progressed to ${progress} seconds`)
}
```

## History Navigation

### `history`

- **Type:** object
- **Default:** `null`

Enables pushing to the browser history to give each item a unique URL.

The resulting URL for each item i made up from the `key` option (see below) and
either the item `id` (if specified) or item number.

```js
{
  // Required
  key: 'gallery' // Used to make up the first part of the item url, e.g. /gallery/dashboard

  // Optional
  replaceState: true // Replace current URL rather than adding to history
}
```

## Debug

### `hotspotDebug`

- **Type:** boolean
- **Default:** `false`

Switches the Internal and Photo item types into a debug mode, where clicking
anywhere within the image will output information about the click position to the
browser console. This can be used to more easily choose positions for hotspots.

```js
hotspotDebug: true
```
