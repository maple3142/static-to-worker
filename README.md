# Publish your static webiste directly on CloudFlare workers for **Free**???

> PS: This project is just a POC, and it only support html,js,css,json,xml files. So binary files such as png,jpeg won't be published.

## Usage

Make sure you have [`wrangler`](https://github.com/cloudflare/wrangler) installed

1. `git clone https://github.com/maple3142/static-to-worker.git`
2. `cd static-to-worker`
3. `yarn` or `npm i`
4. `cp wrangler.example.toml wrangler.toml`
5. `vim wrangler.toml` and fill some fields
6. `node index.js PATH_TO_STATIC_SITE_DIRECTORY > worker.js && wrangler publish`

> If you don't have a static site to test, there are `test/small` and `test/big` for testing.
