# Display Options

These go at the top level of the props of the React component, or the top level of the `options` object.

## Info Panel

### `infoHeading`

- **Type:** : string
- **Default**: `null`

```js
infoHeading: 'Volkswagen Tiguan'
```

### `infoText`

- **Type:** : string
- **Default**: `null`

```js
infoText: 'SWB SEL 2.0 TDI 4Motion'
```

### `infoTags`

- **Type:** : arrayOf([string])
- **Default**: `[]`

```js
infoTags: ['Tag one', 'Another', 'One more', 'Fourth tag']
```

### `infoHeadingSecondary`

- **Type:** : string
- **Default**: `null`

```js
infoHeadingSecondary: '£26,990'
```

### `infoTextSecondary`

- **Type:** : string
- **Default**: `null`

```js
infoTextSecondary: '£447/Month (PCP)'
```

### `infoChildren`

- **Type:** React Element or string
- **Default:** `null`

Pass a custom React component or HTML string to use as the info panel content.

```js
// React Element
infoChildren: (<p>Custom content</p>)

// HTML
infoChildren: '<p>Custom content</p>'
```

### `infoHidden`

- **Type:** Boolean
- **Default:** `false`

Hide the info panel, even if it has content.

```js
infoHidden: true
```

### `infoOnLeft`

- **Type:** Boolean
- **Default:** `false`

Visually reverses the order of the info panel and viewing area on larger screens.

```js
infoOnLeft: true
```

### `useSwipeToSpin`

- **Type:** Boolean
- **Default:** `false`

Enables the swipe to spin overlay on 360 exterior.

## Showcase Mode

### `showcaseHeading`

- **Type:** : string
- **Default**: `null`

```js
showcaseHeading: 'Volkswagen Tiguan'
```

### `forceShowcase`

- **Type:** Boolean
- **Default:** `false`

Forces the Player to always be in Showcase mode

```js
forceShowcase: true
```

### `showcaseText`

- **Type:** : string
- **Default**: `null`

```js
showcaseText: 'SWB SEL 2.0 TDI 4Motion'
```

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

### `hideThumbnails`

- **Type:** Boolean
- **Default:** `false`

Hides the row of thumbnails in the bottom of the Player

```js
hideThumbnails: true
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

## Top Navigation

### `topNav.exteriorCaption`

- **Type:** : string
- **Default**: `null`

```js
topNav: {
  exteriorCaption: 'Exterior'
}
```

### `topNav.interiorCaption`

- **Type:** : string
- **Default**: `null`

```js
topNav: {
  interiorCaption: 'Interior'
}

```
### `topNav.photoCaption`

- **Type:** : string
- **Default**: `null`

```js
topNav: {
  photoCaption: 'Photos'
}

```
### `topNav.videoCaption`

- **Type:** : string
- **Default**: `null`

```js
topNav: {
  videoCaption: 'Video'
}
```

