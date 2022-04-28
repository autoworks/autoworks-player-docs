# Config

These go at the top level of the props of the React component, or the top level of the `options` object.

## Events

### `onNavigation`

- **Type:** function
- **Default:** `null`

Fires when user navigates to a different asset.

```js
onNavigation: ({ id, index, type }) => {
  console.log(`Navigated to “${id}” item at index ${index} (${type})`)
}
```

### `onShowcaseEnter`

- **Type:** function
- **Default:** `null`

Fires when user opens the showcase.

```js
onShowcaseEnter: () => { console.log('Entered showcase mode') }
```

### `onShowcaseExit`

- **Type:** function
- **Default:** `null`

Fires when user closes the showcase.

```js
onShowcaseExit: () => { console.log('Exited showcase mode') }
```

### `onVideoProgress`

- **Type:** function
- **Default:** `null`

Fires when the `<video>` element’s `timeupdate` event is fired. For more information see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event).

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
