# preact-cli-workbox-plugin
When you decide to replace the current `sw-precache-webpack-plugin` of `preact-cli`, you might need to disable the current plugin, bring in new plugin in the huge config object and also write your own service-worker installation code.

`preact-cli-workbox-plugin` does this automatically for you out of the box. #zeroconfig

## installing
```
npm i -D preact-cli-workbox-plugin
```

## Usage
`preact-cli-workbox-plugin` exposes two simple interfaces from the surface.

### GenerateSw
Generates a service worker based. Extensible via custom config.

```
// in preact.config.js
const { generateSw } = require('preact-cli-workbox-plugin');
export default function(config, env, helpers) {
  return generateSw(config, helpers, {});
}
```


### InjectManifest
Injects the precache manifest inside an existing service worker

```
// in preact.config.js
const { injectManifest } = require('preact-cli-workbox-plugin');
const path = require('path');
export default function(config, env, helpers) {
  const swPath = path.join('src', 'sw.js');
  return injectManifest(config, helpers, {
    swSrc: swPath
  });
}
```


### **P.S.** : In case you want to change your service worker name please make sure to add your own service worker registeration code. Also, please build using `--no-service-worker` flag