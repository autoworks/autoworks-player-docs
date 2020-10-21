# Auto.Works Player

## Overview

## Using directly in a React Project

Include the library in your project using npm / yarn

```bash
npm install --save autoworks-player
```

Then just include it into the page like you would any normal component.

There is a required CSS file, packaged under the dist/AutoWorksPlayer.css file -- this can be included whereveer global CSS Is usually included, however it only affects the Auto.Works Player

```js
import React from "react";
import AutoWorksPlayer from "autoworks-player";

import 'autoworks-player/dist/AutoWorksPlayer.css'

import config from "./fixtures/config";
import items from "./fixtures/items";

const options = {
  items,
  ...config,
};

export default function Player() {
  return <AutoWorksPlayer {...options} />;
}
```

[React Example](_assets/example-react/index.html ':include :type=iframe width=100% height=800px')

If your React project isn't bundled, for instance you include React directly within your page via a CDN, you can use `AutoWorksPlayer.browser.js` instead. This loads the component as a global `AutoWorksPlayerComponent`.

## Usage without React

For websites that may not yet include React, there's two ways of embedding the module.

The first is via the `AutoWorksPlayer.standalone.js` script. This is a fully integrated JS file that includes React and React DOM, with a simple API to render onto the page:

```js
const player = createAutoWorksPlayer(
  document.getElementById("component"), // div to render the component in
  options // options object 
);

// if you need to change the options
player.updateConfig(newOptions)
```

Alternatively, the player can be embedded via an iframe:

```html
<iframe id="demo" width={400} height={600} src="https://player.auto.works/iframe" title="demo" />
```

The IFrame uses `postMessage` in order to pass the options to the player. The IFrame will post a `ready` event with the IFrame height once the JS in the frame executes -- at this point the options can be passed.

```js
function onLoad(e) {
  if (!e.data.type) return

  const iframe = document.getElementById('demo')
  iframe.contentWindow.postMessage(options, '*')
}

window.addEventListener('message', onLoad, false)
```