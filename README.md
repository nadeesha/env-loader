# env-loader

NODE_ENV aware .env loader. Loads the environment variables from a .env file like :fire:.

## Usage

From atop of your app code, (usually as far up as it can be in index.js):

```js
require('env-loader').load();
```

Will load `.env` file (see below) from the path that the `.js` file runs in.

But, supposing your process.env.NODE_ENV is `production` and `production.env` is stored in a `.config` dir, just do:

```js
require('env-loader').load({
    path: './.config',
});
```

## .env file

It's just a key-value file like:

```sh
FOO=BAR     # process.env.FOO === BAR
BAZ=BUZZ    # process.env.BAZ === BUZZ
```

