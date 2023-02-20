import type { T_INITIAL_DATA } from "./initialData.types";

export const INITIAL_DATA: T_INITIAL_DATA = [
  {
    id: "MDQ6VXNlcjU4MzIzMQ==",
    email: "octocat@github.com",
    name: "The Octocat",
    login: "octocat",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnk5MjIzNTkzNQ==",
          name: "p-every",
          issues: {
            nodes: [
              {
                bodyText:
                  "The current implementation awaits every promise via p-map but that's not super useful, it's basically:\nconst results = await Promise.all(promises);\nconst isEvery = results.every(myTestFunction)\nWhat I'd like is an early-return like the [].every loop, the promise should throw/resolve as soon as the function returns false.",
                id: "MDU6SXNzdWU5NDYxNzI2Nzk=",
                state: "OPEN",
                title: "Return early",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5MjIzODg0Mg==",
          name: "p-one",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5MjM0NjYyNQ==",
          name: "node-libs-browser",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5MjU5NTIwOA==",
          name: "chromium-bin",
          issues: {
            nodes: [
              {
                bodyText:
                  "This is due to bin-wrapper having an outdated version of decompress.",
                id: "MDU6SXNzdWUyMzk1NTM2ODM=",
                state: "OPEN",
                title: "Doesn't extract all files upon downloading",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "When I tried to install the package, the install script has failed\n> chromium-bin@1.0.3 postinstall /Users/serdiuk/coding/test/node_modules/chromium-bin\n> node lib/install.js\n\n  ⚠ connect ECONNREFUSED 213.186.33.19:443\n\nAs I see from the source code, it tries to access the address https://chromium.woolyss.com/api/?out=revision, which is not available.\nCan I expect this to be fixed?",
                id: "MDU6SXNzdWUyNjEzMjA1NDU=",
                state: "OPEN",
                title: "Unable to install the package",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 2,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5MjczNzE2OQ==",
          name: "kap-imgur",
          issues: {
            nodes: [
              {
                bodyText:
                  "I notice the URL that gets copied to clipboard is not HTTPS, unlike other tools like mac2imgur. I've had to manually change the link to HTTPS for pasting in GitHub Enterprise behind corporate firewalls for example.\nHow do you feel about these links always being HTTPS?",
                id: "MDU6SXNzdWUyNDM0NTI3NTM=",
                state: "CLOSED",
                title: "Use HTTPS for copied links",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "Yup, I agree. Should be fixed in 0.1.1.",
                      author: {
                        login: "kevva",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDMxNTgxOTI4Mg==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "I notice GIFs uploaded aren't attached to any Imgur account (or not mine at least).\nHave you considered this as a feature - allowing me to login to my Imgur account so they are in My Images?",
                id: "MDU6SXNzdWUyNDg0NDM4ODA=",
                state: "OPEN",
                title: "Upload to own account?",
                comments: {
                  totalCount: 3,
                  nodes: [
                    {
                      bodyText:
                        "You can define your own Client ID in the settings.\nOpen ~/Library/Application Support/Kap/plugins/kap-imgur.json\nThere will be a more clear way to open this config when Kap v2 is out.\nI'll keep this issue open for discovery.",
                      author: {
                        login: "sindresorhus",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDMyMDY5ODQ1NA==",
                    },
                    {
                      bodyText:
                        "Thanks for that. I've changed the clientId to one I had generated for another app on Imgur, but unfortunately I don't see new Kap uploads in my \"Uploaded Images\" area on Imgur.",
                      author: {
                        login: "AlecRust",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDMyODUyMTgxMA==",
                    },
                    {
                      bodyText:
                        "Yes, currently only anonymous uploads are supported. To be able to upload media to your own account we'll need to implement OAuth.",
                      author: {
                        login: "kevva",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDMyODU1ODI4NQ==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "I haven't read through the Imgur API docs, but I know the browser and app upload flows support mp4. Perhaps this plugin can, too.",
                id: "MDU6SXNzdWU1NjUxMTcwMDM=",
                state: "OPEN",
                title: "Accept filetype mp4",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText:
                        "Happy to add support for that if the API allows it.",
                      author: {
                        login: "sindresorhus",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDU4NjEzOTEwNg==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.1\nHTTPError\n\nHTTPError: Response code 400 (Bad Request)\n    at EventEmitter.<anonymous> (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/got/source/as-promise.js:74:19)\n    at runMicrotasks (<anonymous>)",
                id: "I_kwDOBYcOkc5ERDzT",
                state: "OPEN",
                title: "HTTPError",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.3\nHTTPError\n\nHTTPError: Response code 400 (Bad Request)\n    at EventEmitter.<anonymous> (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/got/source/as-promise.js:74:19)\n    at runMicrotasks (<anonymous>)",
                id: "I_kwDOBYcOkc5EiWLX",
                state: "OPEN",
                title: "HTTPError",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.4\nHTTPError\n\nHTTPError: Response code 400 (Bad Request)\n    at EventEmitter.<anonymous> (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/got/source/as-promise.js:74:19)\n    at runMicrotasks (<anonymous>)",
                id: "I_kwDOBYcOkc5MQ-R7",
                state: "OPEN",
                title: "HTTPError",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.4\nRequestError\n\nRequestError: Hostname/IP does not match certificate's altnames: Host: api.imgur.com. is not in the cert's altnames: DNS:internetbaik.telkomsel.com, DNS:internettepat.telkomsel.com\n    at ClientRequest.<anonymous> (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/got/source/request-as-event-emitter.js:178:14)\n    at ClientRequest.origin.emit (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/@szmarczak/http-timer/source/index.js:37:11)",
                id: "I_kwDOBYcOkc5O_BDS",
                state: "OPEN",
                title: "RequestError",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.5\nHTTPError\n\nHTTPError: Response code 400 (Bad Request)\n    at EventEmitter.<anonymous> (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/got/source/as-promise.js:74:19)\n    at runMicrotasks (<anonymous>)",
                id: "I_kwDOBYcOkc5UH2Xc",
                state: "OPEN",
                title: "HTTPError",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 8,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5Mjc1NzUzOA==",
          name: "kap-streamable",
          issues: {
            nodes: [
              {
                bodyText:
                  "macOS version:    Big Sur (11)\nKap version:      3.5.3\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.install (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:52:28)",
                id: "I_kwDOBYdeIs5DMImV",
                state: "CLOSED",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.4\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:182:62\n    at Array.map (<anonymous>)\n    at Plugins.loadPlugins (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:182:50)",
                id: "I_kwDOBYdeIs5GWZkh",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.4\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.install (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:52:28)",
                id: "I_kwDOBYdeIs5GhfU2",
                state: "CLOSED",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.4\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:182:62\n    at Array.map (<anonymous>)\n    at Plugins.loadPlugins (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:182:50)",
                id: "I_kwDOBYdeIs5I2rvy",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Mojave (10.14)\nKap version:      3.5.4\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.install (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:52:28)",
                id: "I_kwDOBYdeIs5JQEh_",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.4\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.install (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:52:28)",
                id: "I_kwDOBYdeIs5LM4gJ",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.4\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.install (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:52:28)",
                id: "I_kwDOBYdeIs5Mnj1u",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Mojave (10.14)\nKap version:      3.5.4\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.uninstall (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:101:24)\n    at electron/js2c/browser_init.js:221:8665\n    at IpcMainImpl.<anonymous> (electron/js2c/browser_init.js:221:5052)",
                id: "I_kwDOBYdeIs5M2n4t",
                state: "OPEN",
                title:
                  "Error: Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.4\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.install (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:52:28)",
                id: "I_kwDOBYdeIs5N4IHd",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.4\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.install (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:52:28)",
                id: "I_kwDOBYdeIs5ON8wh",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.4\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:182:62\n    at Array.map (<anonymous>)\n    at Plugins.loadPlugins (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:182:50)",
                id: "I_kwDOBYdeIs5PZEHU",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.5.5\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.install (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:52:28)",
                id: "I_kwDOBYdeIs5QqYQf",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Ventura (13)\nKap version:      3.5.5\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.install (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:52:28)",
                id: "I_kwDOBYdeIs5SEX65",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Catalina (10.15)\nKap version:      3.5.5\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.install (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:52:28)",
                id: "I_kwDOBYdeIs5TnpEu",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "macOS version:    Monterey (12)\nKap version:      3.6.0\nSomething went wrong while loading “kap-streamable”\n\nError: schema is invalid: data.properties['password'].type should be equal to one of the allowed values, data.properties['password'].type should be array, data.properties['password'].type should match some schema in anyOf\n    at CustomAjv.validateSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:178:16)\n    at CustomAjv._addSchema (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:307:10)\n    at CustomAjv.compile (/Applications/Kap.app/Contents/Resources/app.asar/node_modules/ajv/lib/ajv.js:113:24)\n    at /Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:33:35\n    at Array.map (<anonymous>)\n    at new PluginConfig (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/config.js:13:14)\n    at new InstalledPlugin (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/plugin.js:108:27)\n    at Plugins.install (/Applications/Kap.app/Contents/Resources/app.asar/dist-js/plugins/index.js:52:28)",
                id: "I_kwDOBYdeIs5cwSUU",
                state: "OPEN",
                title:
                  "Something went wrong while loading “kap-streamable”",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 15,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5MjgyNzg1MA==",
          name: "kap-clipboard",
          issues: {
            nodes: [
              {
                bodyText:
                  "Don't really know why. This might help if someone wants to investigate https://stackoverflow.com/questions/33675297/copy-gif-to-uipasteboard/33690807#33690807.",
                id: "MDU6SXNzdWUyMzIyMzk3NTU=",
                state: "CLOSED",
                title: "Doesn't copy animation",
                comments: {
                  totalCount: 6,
                  nodes: [
                    {
                      bodyText:
                        'I experienced this today.\nPlatform: Mac OS X 10.13.3 (17D102)\nKap Version: Version 2.0.0 (2.0.0.681)\nSteps to reproduce\nI kapture an area of the screen. Then, under "Export GIF" I choose "Copy to clipboard".\nExpected behaviour\nWhat I expect to happen is that I end up with an animated GIF in my clipboard.\nCurrent behaviour\nWhat I get is a static PNG in my clipboard.\nWorkaround\nNone.',
                      author: {
                        login: "gingerbbm",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDM3NDMwMTAzNg==",
                    },
                    {
                      bodyText:
                        "There's an issue over at the electron repo for it electron/electron#5078.",
                      author: {
                        login: "kevva",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDM3NTA1MTI4NQ==",
                    },
                    {
                      bodyText:
                        "The correct way to put an animated GIF in the clipboard is to either:\n\nPut a file URL on the clipboard that points to the GIF.\nAdd the GIF as an attachment to a NSAttributedString and add it to the pasteboard as type NSRTFDPboardType.\n\nWe cannot do either, since Electron doesn't support putting a file URL on the clipboard or let us put a RTFD. It does support a RTF (without graphics) however.\nSomeone will need to open two Electron issues about this, and link back here.",
                      author: {
                        login: "sindresorhus",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzY1ODA2Ng==",
                    },
                    {
                      bodyText:
                        "Fixed by wulkano/Kap@ddba608. This functionality is now in Kap itself.",
                      author: {
                        login: "sindresorhus",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDUyNDQzNDM3OQ==",
                    },
                    {
                      bodyText:
                        '@sindresorhus By "This functionality is now in Kap itself" does that mean it\'s supposed to work now? For me, when I select "Copy to Clipboard" and then paste the gif anywhere, it still doesn\'t animate.',
                      author: {
                        login: "CharlesARoy",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDcyNjM5NzA4MQ==",
                    },
                    {
                      bodyText:
                        "@CharlesARoy Yes, but note that it doesn't work to paste it into Chrome and Chrome-based apps because of a long-running Chrome bug.",
                      author: {
                        login: "sindresorhus",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDcyNjQ0ODEwNA==",
                    },
                  ],
                },
              },
              {
                bodyText: "",
                id: "MDU6SXNzdWUyMzMyMDY5MDM=",
                state: "CLOSED",
                title: "Support APNG",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "I don't think we can use Electron for this as we'll need to create a clipboard promise, as the file should not be copied into the clipboard directly, but rather just a promise that an app can read from.\nI might create a native binary to support this.",
                id: "MDU6SXNzdWUyMzMyMDcyNDM=",
                state: "CLOSED",
                title: "Support MP4 and WebM",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText:
                        "Closing as there's not really a big need for this.",
                      author: {
                        login: "sindresorhus",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDUyNDQzNDIzOQ==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "I want to write tests for this plugin but am probably too inexperienced with Electron. The thing is that the plugin requires electron. So I installed electron as dev dependency but apparently that doesn't work. Is it possible to even do test this?\n// @sindresorhus @kevva",
                id: "MDU6SXNzdWUyMzMzNzk0MTg=",
                state: "CLOSED",
                title: "Write tests",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "There's https://github.com/electron/spectron, but it's more for testing apps. You could also mock the Electron method. What are you trying to do?",
                      author: {
                        login: "sindresorhus",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDMwNTk5NDIyNw==",
                    },
                    {
                      bodyText:
                        "I added tests in PR #5. I wanted to capture the call to clipboard.writeBuffer which is an Electron call. I mocked Electron with proxyquire which works well. If you think it should be done differently, let me know.",
                      author: {
                        login: "SamVerschueren",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDMwNjAyMzAyMw==",
                    },
                  ],
                },
              },
            ],
            totalCount: 4,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5Mjk2NzgyMg==",
          name: "port-regex",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5MzAwMTgxNg==",
          name: "parse-resolution",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5MzczNzEyNA==",
          name: "node-browserify",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5NTg5NDE4MQ==",
          name: "registry-swap",
          issues: {
            nodes: [
              {
                bodyText: "",
                id: "MDU6SXNzdWUyMzk3OTcyMjc=",
                state: "OPEN",
                title: "Add screenshot",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5Nzk1NDkxMw==",
          name: "astral-regex",
          issues: {
            nodes: [
              {
                bodyText:
                  "Hello,when I build my project with webpack using production mode.The 'UglifJs' plugin will print error message 'Unexpected token: operator (>)'.When I read 'astral-regex' code,I find that script using ES6 syntax.In the mean while my webpack.config.js set property 'exclude' to 'node_modules' like most people do.The error will happen.So I want to suggest 'astral-regex' main script compiles ES6 syntax before exports. :-)",
                id: "MDU6SXNzdWUzMzYxOTM1NjQ=",
                state: "CLOSED",
                title: "UglifyJs: Unexpected token: operator (>)",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "This module mainly targets Node.js, not the browser. It's up to you to transpile it with Babel if you want to use it in the browser. You can find a more detailed explanation here: sindresorhus/ama#446\nIf you use Webpack, check out babel-engine-plugin, which transpiles only the dependencies that needs to be transpiled.",
                      author: {
                        login: "sindresorhus",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQwMDY0ODQwNA==",
                    },
                    {
                      bodyText:
                        "Thank for answering my question. :-) Actually, following your steps or I remove the 'node_modules' in the array of property  'exclude' which be defined in my webpack.config.js can solving this problem. I think 'astral-regex'  is really good and useful, if this package is compatible with Node.js and Browser as defaulted will be more better.",
                      author: {
                        login: "waif1989",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQwMDcwNzA3Mg==",
                    },
                  ],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5Nzk3NzY4Nw==",
          name: "wrap-ansi",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5Nzk5NjY3OA==",
          name: "ansi-styles",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=",
          name: "boysenberry-repo-1",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjQxNzc1MQ==",
    email: "",
    name: "James M. Greene",
    login: "JamesMGreene",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnkxNzQ4ODE3MDk=",
          name: "nedb",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxODY0NjM5NzI=",
          name: "faux-services-actions-test",
          issues: {
            nodes: [
              {
                bodyText: "WAT",
                id: "MDU6SXNzdWU0NDM3MTgwMzM=",
                state: "CLOSED",
                title: "OOO @JMG 2019-05-32",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "Off the rails!",
                id: "MDU6SXNzdWU0NDM3MTk1ODc=",
                state: "CLOSED",
                title: "OOO @JMG 2019-05-33",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "JUNE!",
                id: "MDU6SXNzdWU0NDM3MjM3Njk=",
                state: "CLOSED",
                title: "OOO @JMG 2019-06-01",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "🌞",
                id: "MDU6SXNzdWU0NDQxMjQxNTQ=",
                state: "CLOSED",
                title: "OOO @JamesMGreene 2019-06-02",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "🥇",
                id: "MDU6SXNzdWU0NDQxMjY3MjI=",
                state: "CLOSED",
                title: "OOO @JamesMGreene 2019-06-03",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "🤔",
                id: "MDU6SXNzdWU0NDQxMzExMzM=",
                state: "CLOSED",
                title: "OOO @JamesMGreene 2019-06-04",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "OOO?",
                id: "MDU6SXNzdWU0NDQxMzI0MTU=",
                state: "CLOSED",
                title: "OOO @JamesMGreene 2019-06-06",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "👿",
                id: "MDU6SXNzdWU0NDQxMzQ5OTg=",
                state: "CLOSED",
                title: "OOO @JamesMGreene 2019-06-05",
                comments: {
                  totalCount: 15,
                  nodes: [
                    {
                      bodyText: "/ooo from 1/1/2019 to 1/7/2019",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzY3MjM5Ng==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated based on your ooo command!\n\n  See the updates...\n  \n    \n      \n      @JamesMGreene[41]\n    \n    \n      \n      Old Value\n      New Value\n    \n    \n      2019-01-01[D]\n      {part of a merged range}\n      {part of a merged range}\n    \n    \n      2019-01-02[E]\n      {empty}\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\n    \n    \n      2019-01-03[F]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\n    \n    \n      2019-01-04[G]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\n    \n    \n      2019-01-07[J]\n      {empty}\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzY3MjQ0Mw==",
                    },
                    {
                      bodyText: "/ooo from 1/1/2019 to 1/7/2019",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcwNTU1Mw==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated based on your ooo command!\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene[41]\n    \n    \n      2019-01-01[D]\n      {belongs to a merged range... could not be updated}\n    \n    \n      2019-01-02[E]\n      {empty}\n    \n    \n      2019-01-03[F]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\n    \n    \n      2019-01-04[G]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\n    \n    \n      2019-01-07[J]\n      {empty}',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcwNTU4Ng==",
                    },
                    {
                      bodyText: "/ooo from 1/1/2019 to 1/7/2019",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNDE4MA==",
                    },
                    {
                      bodyText: "/ooo from 1/1/2019 to 1/7/2019",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNDIzMQ==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated based on your ooo command!\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-01-01[D41]\n      {belongs to a merged range... could not be updated}\n    \n    \n      2019-01-02[E41]\n      {empty}\n    \n    \n      2019-01-03[F41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/21", "OOO")\n    \n    \n      2019-01-04[G41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/22", "OOO")\n    \n    \n      2019-01-07[J41]\n      {empty}',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNDI2NA==",
                    },
                    {
                      bodyText: "/ooo from 1/1/2019 to 1/7/2019",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNDM2OA==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated based on your ooo command!\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-01-01[D41]\n      {belongs to a merged range... could not be updated}\n    \n    \n      2019-01-02[E41]\n      {empty}\n    \n    \n      2019-01-03[F41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\n    \n    \n      2019-01-04[G41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\n    \n    \n      2019-01-07[J41]\n      {empty}',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNDM4Mg==",
                    },
                    {
                      bodyText: "/ooo from 1/1/2019 to 1/7/2019",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNjk4Ng==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated based on your ooo command!\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-01-01[D41]\n      {belongs to a merged range... could not be updated}\n    \n    \n      2019-01-02[E41]\n      {empty}\n    \n    \n      2019-01-03[F41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/12", "OOO")\n    \n    \n      2019-01-04[G41]\n      OOO\n    \n    \n      2019-01-07[J41]\n      {empty}',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNzAyMA==",
                    },
                    {
                      bodyText: "/ooo from 1/1/2019 to 1/7/2019",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNzIwNA==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated based on your ooo command!\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-01-01[D41]\n      {belongs to a merged range... could not be updated}\n    \n    \n      2019-01-02[E41]\n      {empty}\n    \n    \n      2019-01-03[F41]\n      OOO\n    \n    \n      2019-01-04[G41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/12", "OOO")\n    \n    \n      2019-01-07[J41]\n      {empty}',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNzIyNw==",
                    },
                    {
                      bodyText: "/ooo from 5/17 to 5/20",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNzQ0OA==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated based on your ooo command!\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-05-17[EJ41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")\n    \n    \n      2019-05-20[EM41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/23", "OOO")',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNzQ3NQ==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "📆 Dates\nI'd like to request OOO from 2019-09-09 to 2019_09-13 to attend the AssertJS Conference in Toronto on 2019-09-11 and 2019-09-12.\n✔️ Approval\n\n manager's 👍\n\n📋 How are your responsibilities being covered?\nCustomers:\n\nHow you will be backed up while you are out?\n\nKevin will hold down the fort? 🙏\nShipping:\n\nAre any ships occurring for your team during this OOO? [yes/no] no\nIf yes, what are you doing to ensure your responsibilities will be covered?\n\n👣 Next steps\n\n 📆 Add to Google Calendar\n ⛑️ Open a Workday OOO request (only non-🇺🇸 Hubbers)\n 💬 Add a comment to this issue with /ooo from M/D to M/D, e.g. /ooo from 5/16 to 5/20. This will:\n\n📣 Add your OOO time to ooo[bot] to notify Hubbers that you're on OOO when they mention you in an issue while you're out\n📈 Trigger an Actions Workflow to update the Services schedule on your behalf\n\n\n\n🔔 Awareness\n\nteam for awareness",
                id: "MDU6SXNzdWU0NDU3ODM4OTQ=",
                state: "CLOSED",
                title: '["OOO"] JamesMGreene - AssertJS 2019 Conference',
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText: "/ooo from 9/9 to 9/13",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyOTUxOQ==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated based on your ooo command!\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/24", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-09-09[IU41]\n      {empty}\n    \n    \n      2019-09-10[IV41]\n      {empty}\n    \n    \n      2019-09-11[IW41]\n      {empty}\n    \n    \n      2019-09-12[IX41]\n      {empty}\n    \n    \n      2019-09-13[IY41]\n      {empty}',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyOTU0Mg==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "📆 Dates\nI'd like to retroactively request OOO from 2019-01-01 to 2019-01-07 to take an anniversary trip with my wife! 👰\n✔️ Approval\n\n manager's 👍\n\n📋 How are your responsibilities being covered?\nCustomers:\n\nHow you will be backed up while you are out?\n\nJason and Kevin will hold down the fort? 🙏\nShipping:\n\nAre any ships occurring for your team during this OOO? [yes/no] no\nIf yes, what are you doing to ensure your responsibilities will be covered?\n\n👣 Next steps\n\n 📆 Add to Google Calendar\n ⛑️ Open a Workday OOO request (only non-🇺🇸 Hubbers)\n 💬 Add a comment to this issue with /ooo from M/D to M/D, e.g. /ooo from 5/16 to 5/20. This will:\n\n📣 Add your OOO time to ooo[bot] to notify Hubbers that you're on OOO when they mention you in an issue while you're out\n📈 Trigger an Actions Workflow to update the Services schedule on your behalf\n\n\n\n🔔 Awareness\n\nteam for awareness",
                id: "MDU6SXNzdWU0NDU3ODUxNDc=",
                state: "CLOSED",
                title: '["OOO"] My anniversary trip',
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText: "/ooo from 1/1/2019 to 1/7/2019",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzczMDc2MQ==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated based on your ooo command!\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/25", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-01-01[D41]\n      {belongs to a merged range... could not be updated}\n    \n    \n      2019-01-02[E41]\n      {empty}\n    \n    \n      2019-01-03[F41]\n      OOO\n    \n    \n      2019-01-04[G41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/12", "OOO")\n    \n    \n      2019-01-07[J41]\n      {empty}',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzczMDgzNQ==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "📆 Dates\nI'd like to request OOO from DATE1 to DATE2\n✔️ Approval\n\n manager's 👍\n\n📋 How are your responsibilities being covered?\nCustomers:\n\nHow you will be backed up while you are out?\n\nShipping:\n\nAre any ships occurring for your team during this OOO? [yes/no]\nIf yes, what are you doing to ensure your responsibilities will be covered?\n\n👣 Next steps\n\n 📆 Add to Google Calendar\n ⛑️ Open a Workday OOO request (only non-🇺🇸 Hubbers)\n 💬 Add a comment to this issue with /ooo from M/D to M/D, e.g. /ooo from 5/16 to 5/20. This will:\n\n📣 Add your OOO time to ooo[bot] to notify Hubbers that you're on OOO when they mention you in an issue while you're out\n📈 Trigger an Actions Workflow to update the Services schedule on your behalf\n\n\n\n🔔 Awareness\n\nteam for awareness",
                id: "MDU6SXNzdWU0NDY4MjY1MTk=",
                state: "CLOSED",
                title: "OOO something something",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText: "/ooo on 5/31",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NDU1OTcwMw==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated to mark @JamesMGreene as OOO on Friday, May 31st 2019. 📆\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/26", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-05-31[EX41]\n      {empty}',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NDU2MDAyNw==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "📆 Dates\nI'd like to request OOO from DATE1 to DATE2\n✔️ Approval\n\n manager's 👍\n\n📋 How are your responsibilities being covered?\nCustomers:\n\nHow you will be backed up while you are out?\n\nShipping:\n\nAre any ships occurring for your team during this OOO? [yes/no]\nIf yes, what are you doing to ensure your responsibilities will be covered?\n\n👣 Next steps\n\n 📆 Add to Google Calendar\n ⛑️ Open a Workday OOO request (only non-🇺🇸 Hubbers)\n 💬 Add a comment to this issue with /ooo from M/D to M/D, e.g. /ooo from 5/16 to 5/20. This will:\n\n📣 Add your OOO time to ooo[bot] to notify Hubbers that you're on OOO when they mention you in an issue while you're out\n📈 Trigger an Actions Workflow to update the Services schedule on your behalf\n\n\n\n🔔 Awareness\n\nteam for awareness",
                id: "MDU6SXNzdWU0NDY4MjY3NzU=",
                state: "CLOSED",
                title: '["OOO"] Again....',
                comments: {
                  totalCount: 6,
                  nodes: [
                    {
                      bodyText: "/ooo from 6/10 to 6/14",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NDU1OTgzOQ==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated to mark @JamesMGreene as OOO from Monday, June 10th 2019 to Monday, June 10th 2019. 📆\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/27", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-06-10[FH41]\n      {empty}\n    \n    \n      2019-06-11[FI41]\n      {empty}\n    \n    \n      2019-06-12[FJ41]\n      {empty}\n    \n    \n      2019-06-13[FK41]\n      {empty}\n    \n    \n      2019-06-14[FL41]\n      {empty}',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NDU2MDE4Mg==",
                    },
                    {
                      bodyText: "/ooo from 6/10 to 6/14",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NDU2MDgyMw==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated to mark @JamesMGreene as OOO from Monday, June 10th 2019 to Friday, June 14th 2019. 📆\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/27", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-06-10[FH41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/27", "OOO")\n    \n    \n      2019-06-11[FI41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/27", "OOO")\n    \n    \n      2019-06-12[FJ41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/27", "OOO")\n    \n    \n      2019-06-13[FK41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/27", "OOO")\n    \n    \n      2019-06-14[FL41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/27", "OOO")',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NDU2MTAzNQ==",
                    },
                    {
                      bodyText: "/ooo from 6/10 to 6/14",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NDU2MTI0OQ==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated to mark @JamesMGreene as OOO from Monday, June 10th 2019 to Friday, June 14th 2019. 📆\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/27", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-06-10[FH41]\n      {empty}\n    \n    \n      2019-06-11[FI41]\n      {empty}\n    \n    \n      2019-06-12[FJ41]\n      {empty}\n    \n    \n      2019-06-13[FK41]\n      {empty}\n    \n    \n      2019-06-14[FL41]\n      {empty}',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NDU2MTQyMA==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "📆 Dates\nI'd like to request OOO on July 5\n✔️ Approval\n\n manager's 👍\n\n📋 How are your responsibilities being covered?\nCustomers:\n\nHow you will be backed up while you are out?\n\nShipping:\n\nAre any ships occurring for your team during this OOO? [yes/no]\nIf yes, what are you doing to ensure your responsibilities will be covered?\n\n👣 Next steps\n\n 📆 Add to Google Calendar\n 💬 Add a comment to this issue with /ooo from M/D to M/D, e.g. /ooo from 5/16 to 5/20. This will:\n\n📣 Add your OOO time to ooo[bot] to notify Hubbers that you're on OOO when they mention you in an issue while you're out\n📈 Trigger an Actions Workflow to update the Services schedule on your behalf\n\n\n\n🔔 Awareness\n\nteam for awareness",
                id: "MDU6SXNzdWU0NDcwODMyODc=",
                state: "CLOSED",
                title: "Test",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText: "/ooo from 7/5 to 7/5",
                      author: {
                        login: "hectorsector",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NDc2NDM4MQ==",
                    },
                    {
                      bodyText:
                        '@hectorsector With the current setup, you need to have "OOO" or "Out of Office" in the issue title.',
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NDgwODc3Nw==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "📆 Dates\nI'd like to request OOO from DATE1 to DATE2\n✔️ Approval\n\n manager's 👍\n\n📋 How are your responsibilities being covered?\nCustomers:\n\nHow you will be backed up while you are out?\n\nShipping:\n\nAre any ships occurring for your team during this OOO? [yes/no]\nIf yes, what are you doing to ensure your responsibilities will be covered?\n\n👣 Next steps\n\n 📆 Add to Google Calendar\n ⛑️ Open a Workday OOO request (only non-🇺🇸 Hubbers)\n 💬 Add a comment to this issue with /ooo from M/D to M/D, e.g. /ooo from 5/16 to 5/20. This will:\n\n📣 Add your OOO time to ooo[bot] to notify Hubbers that you're on OOO when they mention you in an issue while you're out\n📈 Trigger an Actions Workflow to update the Services schedule on your behalf\n\n\n\n🔔 Awareness\n\nteam for awareness",
                id: "MDU6SXNzdWU0NDc3NjIwMTA=",
                state: "CLOSED",
                title: "OOO for raw response dumps",
                comments: {
                  totalCount: 9,
                  nodes: [
                    {
                      bodyText: "/ooo from 6/20 to 6/28",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NTI5MTkwNw==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated to mark @JamesMGreene as OOO from Thursday, June 20th 2019 to Friday, June 28th 2019. 📆\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-06-20[FR41]\n      {empty}\n    \n    \n      2019-06-21[FS41]\n      {empty}\n    \n    \n      2019-06-24[FV41]\n      {empty}\n    \n    \n      2019-06-25[FW41]\n      {empty}\n    \n    \n      2019-06-26[FX41]\n      {empty}\n    \n    \n      2019-06-27[FY41]\n      {empty}\n    \n    \n      2019-06-28[FZ41]\n      =HYPERLINK("https://github.com/github/services/issues/5599","OOO")',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NTI5MjExMg==",
                    },
                    {
                      bodyText: "/ooo from 6/20 to 6/28",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NTI5ODQxOQ==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated to mark @JamesMGreene as OOO from Thursday, June 20th 2019 to Friday, June 28th 2019. 📆\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-06-20[FR41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\n    \n    \n      2019-06-21[FS41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\n    \n    \n      2019-06-24[FV41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\n    \n    \n      2019-06-25[FW41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\n    \n    \n      2019-06-26[FX41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\n    \n    \n      2019-06-27[FY41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\n    \n    \n      2019-06-28[FZ41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NTI5ODgxOA==",
                    },
                    {
                      bodyText: "/ooo from 6/19 to 6/23",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NTMzNzg4NQ==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated to mark @JamesMGreene as OOO from Wednesday, June 19th 2019 to Sunday, June 23rd 2019. 📆\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-06-19[FQ41]\n      {empty}\n    \n    \n      2019-06-20[FR41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\n    \n    \n      2019-06-21[FS41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NTMzODEwMg==",
                    },
                    {
                      bodyText: "/ooo from 6/19 to 6/23",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NTMzOTI3Mg==",
                    },
                    {
                      bodyText:
                        'The Services schedule has been updated to mark @JamesMGreene as OOO from Wednesday, June 19th 2019 to Sunday, June 23rd 2019. 📆\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-06-19[FQ41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\n    \n    \n      2019-06-20[FR41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")\n    \n    \n      2019-06-21[FS41]\n      =HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/29", "OOO")',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NTMzOTUxMQ==",
                    },
                    {
                      bodyText: "/ooo from 6/19 to 6/24",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NTM0Mzc4MA==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "📆 Dates\nI'd like to request OOO from DATE1 to DATE2\n✔️ Approval\n\n manager's 👍\n\n📋 How are your responsibilities being covered?\nCustomers:\n\nHow you will be backed up while you are out?\n\nShipping:\n\nAre any ships occurring for your team during this OOO? [yes/no]\nIf yes, what are you doing to ensure your responsibilities will be covered?\n\n👣 Next steps\n\n 📆 Add to Google Calendar\n ⛑️ Open a Workday OOO request (only non-🇺🇸 Hubbers)\n 💬 Add a comment to this issue with /ooo from M/D to M/D, e.g. /ooo from 5/16 to 5/20. This will:\n\n📣 Add your OOO time to ooo[bot] to notify Hubbers that you're on OOO when they mention you in an issue while you're out\n📈 Trigger an Actions Workflow to update the Services schedule on your behalf\n\n\n\n🔔 Awareness\n\nteam for awareness",
                id: "MDU6SXNzdWU0NDc5MDgxMjY=",
                state: "CLOSED",
                title: '["OOO"] @JamesMGreene visits Interns',
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText: "/ooo from 6/20 to 6/25",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NTQxMzgxMQ==",
                    },
                    {
                      bodyText:
                        'Updated the Services schedule to mark @JamesMGreene as OOO from Thursday, June 20th 2019 to Tuesday, June 25th 2019. 📆\n\n  See the updates...\n  \nNew Value:\n=HYPERLINK("https://github.com/JamesMGreene/faux-services-actions-test/issues/30", "OOO")\nOld Values:\n  \n    \n      \n      @JamesMGreene\n    \n    \n      2019-06-20[FR41]\n      {empty}\n    \n    \n      2019-06-21[FS41]\n      {empty}\n    \n    \n      2019-06-24[FV41]\n      {empty}\n    \n    \n      2019-06-25[FW41]\n      {empty}',
                      author: {
                        login: "github-actions",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5NTQxNDA0Mg==",
                    },
                  ],
                },
              },
            ],
            totalCount: 15,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxODY0Njc5Mzc=",
          name: "add-ooo-to-services-schedule-spreadsheet",
          issues: {
            nodes: [
              {
                bodyText: "👻",
                id: "MDU6SXNzdWU0NDU3ODAyNjg=",
                state: "CLOSED",
                title: "Issue to create image for README",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "Updated",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ5MzcyNzI3Mw==",
                    },
                  ],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxOTkxOTgxMDg=",
          name: "simple-java-maven-app",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMDIyNzYwMzI=",
          name: "node-draft-releaser",
          issues: {
            nodes: [
              {
                bodyText:
                  "If release draft name was a version, but not the version number to be released, the name stays as the old version name.\nThe behavior is somewhat intended as Release Drafter didn't used to set a name, IIRC, so a name was only set for the draft release by a maintainer. However, as that is not the case now (at least), we should check if the existing name is a valid SemVer version and, if so, replace it with the new version number.",
                id: "MDU6SXNzdWU1ODQ1OTQxMTM=",
                state: "CLOSED",
                title:
                  "Update release name if the existing name was a SemVer version",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "I'm using this action in my workflow and it behaves sort of unexpectedly to me.\n      - name: Publish matching GitHub release draft\n        id: github_release\n        uses: JamesMGreene/node-draft-releaser@v1.1.2\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n        with:\n          allow_release_name_update: 'false'\nWhile the Release Drafter action drafts new releases correctly with the v prefix, eg. v0.36.0, the prefix is suddenly removed when node-draft-releaser publishes the release draft, both in the release name and in the Git tag.\nI'm not sure if I'm missing something or a get the options wrong but I'd expect the release name and tag to remain intact.\nI tried to turn off the allow_release_name_update option but with no effect.\nCould anyone please point me to a solution?",
                id: "MDU6SXNzdWU3NjI3MzcxNzc=",
                state: "OPEN",
                title:
                  "Version prefix is removed from Git tag and release name on release",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 2,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMDc2OTk5NDE=",
          name: "tdd-faster-workshop",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyNjc5NjMwNTY=",
          name: "minipass-split",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzMzQ4MjE3ODQ=",
          name: "amplify-back-end",
          issues: {
            nodes: [
              {
                bodyText:
                  "The Letter_Versions API call is giving me 500 error.",
                id: "I_kwDOE_T5mM497N9X",
                state: "CLOSED",
                title: "API call not working",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "Hey @nawazkhan, does this have to do with the updates last night?",
                      author: {
                        login: "manishapriya94",
                      },
                      id: "IC_kwDOE_T5mM444AaB",
                    },
                    {
                      bodyText: "#123",
                      author: {
                        login: "manishapriya94",
                      },
                      id: "IC_kwDOE_T5mM45HDLQ",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "Goal:\nTranslates and sends user inputs via Lob API to create an addressbook entry to provide the 'from' variable in Send Letter\nImplementation: create a function that\n\n routes to lob post on line 20 in lob.js\n translates frontend json into address book variables \n return the address id as a string  after calling lob create_address \n\nUser Story:\n\nuser inputs address, name, and email\nThis information goes to lob and is added to its address book\nWhen the user finishes checkout, this information will be used to send a letter ProgramEquity/amplify#31\n\n\nContext:\n\nimplementation file: In lob.js lines 135\nData\n\nFrontend gives json of user input @mahrsbar what does this look like?\nTranslate frontend json to this:\n\n\n\n\n\nCalling Lob Endpoints: (const lobApiKey = getLobApiKey())\nLob Address Create API Documentation: create address which combines address verification and returns an address_id string",
                id: "I_kwDOE_T5mM4-xEFk",
                state: "CLOSED",
                title: "Create `POST` function: user_addressbook ",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "#130",
                      author: {
                        login: "manishapriya94",
                      },
                      id: "IC_kwDOE_T5mM47mTs6",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "User data will be received as JSON from front end (@mahrsbar) and will need to be adjusted/formatted to fit Google Civic Information API's desired format. Part of larger issue ProgramEquity/amplify#31\nGoogle Civic Information API can be viewed here\n\nGoogle Civic Information API Format:\n\nUser Data Format Example:",
                id: "I_kwDOE_T5mM4-xGjB",
                state: "CLOSED",
                title:
                  "Translate user_addressbook data into format for Google Civic Information API",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "Goal: Combining front end and back end into one repo that deploys to a staging build (for hackathon) and production build (for Climate can't Wait starting Jan 8th)\nWhy are we doing this?\n\nAllows us to use CodeSpace more efficiently\nAlleviates security concerns from using Cors\n\nNotes from front-end:\n\nWe're using Vue 3.6.2 for the framework. These components will be need to be migrated over.\nFront-end is using back-end apis but unsure if this will be affected by migration\nNeed to incorporate LESS and other libraries?\nNeed to hook express into Vue\n\nFeedback wanted on the following @JamesMGreene @mscoutermarsh @wallace @BeeXiong  @teakopp :\n\nDiscussion on 11/30 we theorized all frontend calls will remain the same\nHow will other app routing need to be changed?\nAre all frontend files going under a public or src file within backend\nAre there major changes to how backend and frontend components are stored?\nIs it correct that node will now have a production build vs a staging one",
                id: "I_kwDOE_T5mM4_piq0",
                state: "CLOSED",
                title:
                  "OSS Architecture: Combining front-end and back-end into one repo",
                comments: {
                  totalCount: 4,
                  nodes: [
                    {
                      bodyText:
                        "Conversation with mike: https://github.zoom.us/rec/share/lPFDoaBMpjbESPjCvkzVmZpohDH_q_phs0PiegKIrsoMklg6dj6GEaWKcJ1lukTb.G4nJTWuOh5kmpeMx Passcode: NjXWp7U#\nSeems it might be best for us to go back to a single app structure, for reference",
                      author: {
                        login: "manishapriya94",
                      },
                      id: "IC_kwDOE_T5mM46stUw",
                    },
                    {
                      bodyText:
                        "Sorry for taking so long to post here.\nBack when I was researching for this, I found that it is easy enough to have an Express app host a built production Vue app but I struggled to find good resources on how to do it in a way that still supported hot-reloading of Vue from a development perspective.\nThe most interesting resource I found on the topic was this one, which seemed very promising in its unique approach of mounting the Express app into the Vue app (vue-cli-service app, that is) since it already has an internal Express server. 🔄\nOne other decent read with lots of examples, though not taking the same approach: https://www.bezkoder.com/serve-vue-app-express/",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "IC_kwDOE_T5mM49au6J",
                    },
                    {
                      bodyText:
                        "I opened a new repo where both are combined\nhttps://github.com/ProgramEquity/amplify\nThis has a lot of niceties such as the ability to run only the FE or only the BE in dev, to run both FE and BE in dev at the same time (without having to compile anything) and then a prod style command that builds and compiles all of the Vue code which is then hosted by express",
                      author: {
                        login: "waldnzwrld",
                      },
                      id: "IC_kwDOE_T5mM49uG9u",
                    },
                    {
                      bodyText:
                        "This is DONESBILLE daddy-o!!! Closing it out.",
                      author: {
                        login: "waldnzwrld",
                      },
                      id: "IC_kwDOE_T5mM49vE5S",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "I keep receiving the following error, even though I'm pretty certain I'm not sending too many requests at a time. This error is new and I wasn't receiving it before, I don't think I have changed anything significant for this to occur.\n\nI'm unsure how to navigate this, any help would be appreciated.",
                id: "I_kwDOE_T5mM5Biw3J",
                state: "CLOSED",
                title: "Error 429 Too Many Requests",
                comments: {
                  totalCount: 3,
                  nodes: [
                    {
                      bodyText:
                        "@teakopp does this have to do with us going public or is it the throttling of Lob?",
                      author: {
                        login: "manishapriya94",
                      },
                      id: "IC_kwDOE_T5mM48TZL9",
                    },
                    {
                      bodyText: "PR #166 should fix this 🤞🏻",
                      author: {
                        login: "teakopp",
                      },
                      id: "IC_kwDOE_T5mM48Xbez",
                    },
                    {
                      bodyText: "Closed, moved to front-end",
                      author: {
                        login: "mahrsbar",
                      },
                      id: "IC_kwDOE_T5mM48ji3L",
                    },
                  ],
                },
              },
              {
                bodyText: "",
                id: "I_kwDOE_T5mM5DKHDa",
                state: "CLOSED",
                title: "Actions for deployment pipelines for frontend",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "Hello, I was wondering if it would be better to combine the addressVerification and createAddress into one so the front-end only needs to make one API call.\nCurrently, front-end has to send a POST request with the address to addressVerification, receive a successful response, then send another POST request with the verified address to createAddress, then receive an address_id which then can be used to make a POST request to createLetter.\nI can write this logic in the front-end but I think best practices would be having the addressVerification and createAddress as one call in which it would return the address_id to front-end which can then be used to createLetter.\nIf there is a reason we're two doing two calls, please let me know because I might have missed something. I hope my ask makes sense.\nI'm referencing the following code in this file:\nCreateAddress\nrouter.post('/createAddress', async (req, res) => {\n  // Get description, to, and template_id from request body\n  const address = req.body || {}\n  const lobApiKey = getLobApiKey()\n  const lob = new Lob({ apiKey: lobApiKey })\n\n  try {\n    // Create Lob address using variables passed into route via post body\n    const addressResponse = await lob.addresses.create({\n      description: address.description,\n      name: address.name,\n      address_line1: address.line1,\n      address_line2: address.line2,\n      address_city: address.city,\n      address_state: address.state,\n      address_zip: address.zip,\n      address_country: 'US'\n    })\n\n    res.status(200).send({ address_id: addressResponse.id })\n  } catch (error) {\n    res.status(500).send({ error: 'Something failed!' })\n  }\n})\n\naddressVerification\nrouter.post('/addressVerification', async (req, res) => {\n  ...\n  try {\n    const lob = new Lob({ apiKey: getLobApiKey() })\n    const response = await lob.usVerifications.verify({\n      primary_line: line1,\n      secondary_line: line2,\n      city,\n      state,\n      zip_code: zipCode\n    })\n\n    const {\n      deliverability,\n      primary_line: revisedLine1,\n      secondary_line: revisedLine2,\n      components: {\n        city: revisedCity,\n        state: revisedState,\n        zip_code: revisedZip,\n        zip_code_plus_4: revisedZipPlus4,\n        address_type: addressType,\n        record_type: recordType\n      }\n    } = response\n\n    const isUndeliverable =\n      !deliverability || deliverability === 'undeliverable'\n    const isResidential = addressType === 'residential'\n    const isPostOfficeBox = recordType === 'po_box'\n    const isPuertoRico = revisedState === 'PR'\n\n    const deliverable =\n      !isUndeliverable && isResidential && !isPostOfficeBox && !isPuertoRico\n    const warning = DELIVERABILITY_WARNINGS[deliverability] || null\n\n    if (!deliverable) {\n      let errorMessage = 'Address is undeliverable'\n      if (!isUndeliverable) {\n        if (!isResidential) {\n          errorMessage = 'Non-residential addresses are not currently supported'\n        } else if (isPostOfficeBox) {\n          errorMessage = 'Post office boxes are not currently supported'\n        } else if (isPuertoRico) {\n          errorMessage = 'Puerto Rico addresses are not currently supported'\n        }\n      }\n\n      return res.status(400).send({ error: errorMessage })\n    }\n\n    return res.status(200).send({\n      deliverable,\n      warning,\n      revisedAddress: {\n        line1: revisedLine1,\n        line2: revisedLine2 || null,\n        city: revisedCity,\n        state: revisedState,\n        zip: revisedZip + (revisedZipPlus4 ? '-' + revisedZipPlus4 : '')\n      }\n    })\n  } catch (error) {\n    // This endpoint should not return anything other than `200` status\n    // codes, even for undeliverable addresses\n    return handleLobError(error, res)\n  }\n})",
                id: "I_kwDOE_T5mM5DKJh_",
                state: "CLOSED",
                title:
                  "Combining addressVerification and CreateAddress api in lob.js",
                comments: {
                  totalCount: 4,
                  nodes: [
                    {
                      bodyText:
                        "@teakopp and I discussed this earlier this week and saw no reason why we shouldn't do this. 👍🏻",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "IC_kwDOE_T5mM49qWEu",
                    },
                    {
                      bodyText: "I'd like to work on this one!",
                      author: {
                        login: "anishasthana",
                      },
                      id: "IC_kwDOE_T5mM49s1Wr",
                    },
                    {
                      bodyText:
                        "@mahrsbar There needs to be a corresponding PR that needs to be made to the front end repo for this -- do we have an issue there for it?",
                      author: {
                        login: "anishasthana",
                      },
                      id: "IC_kwDOE_T5mM49s-oD",
                    },
                    {
                      bodyText:
                        "This is complete, #210. Sorry should be closed.",
                      author: {
                        login: "mahrsbar",
                      },
                      id: "IC_kwDOE_T5mM49s_S8",
                    },
                  ],
                },
              },
              {
                bodyText: "",
                id: "I_kwDOE_T5mM5DMiBB",
                state: "CLOSED",
                title: "Write unit tests for Checkout Stripe",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "",
                id: "I_kwDOE_T5mM5DMngQ",
                state: "CLOSED",
                title: "Secure 'Check formatting' action",
                comments: {
                  totalCount: 4,
                  nodes: [
                    {
                      bodyText:
                        "I'm going to take a look at this (if anyone wants to join)",
                      author: {
                        login: "Lehcar",
                      },
                      id: "IC_kwDOE_T5mM49s7-q",
                    },
                    {
                      bodyText:
                        "@Lehcar want to pair? its supposed to be an audit like this one: https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions",
                      author: {
                        login: "manishapriya94",
                      },
                      id: "IC_kwDOE_T5mM49s_TN",
                    },
                    {
                      bodyText:
                        "@Lehcar want to pair? its supposed to be an audit like this one: https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions\n\nyes please! I messaged you on slack",
                      author: {
                        login: "Lehcar",
                      },
                      id: "IC_kwDOE_T5mM49tBDW",
                    },
                    {
                      bodyText:
                        "I checked this workflow and it looks good 🎉 !\nWe're not currently using any secrets for the Check formatting workflow and we aren't doing any sort of script execution/injection in any of the running scripts.",
                      author: {
                        login: "Lehcar",
                      },
                      id: "IC_kwDOE_T5mM49tIul",
                    },
                  ],
                },
              },
              {
                bodyText: "",
                id: "I_kwDOE_T5mM5DMnib",
                state: "CLOSED",
                title: "Secure 'Lint code' action",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "Interested in working on this one, but no clue how to get started, other than reading the referenced link...",
                      author: {
                        login: "jarodwilson",
                      },
                      id: "IC_kwDOE_T5mM49s4OF",
                    },
                    {
                      bodyText:
                        "Lint code Workflow does not use secrets, scripts, third-party actions, resources from cloud providers or run on self-hosted runners. I confirm it is secure!",
                      author: {
                        login: "zengwuxin",
                      },
                      id: "IC_kwDOE_T5mM49ttYU",
                    },
                  ],
                },
              },
              {
                bodyText: "",
                id: "I_kwDOE_T5mM5DMnjK",
                state: "CLOSED",
                title: "Secure 'Lint workflows' action",
                comments: {
                  totalCount: 4,
                  nodes: [
                    {
                      bodyText:
                        "@afcollins would you like to work on this together? I'm new to actions, but interested in learning more and hopefully contribute too",
                      author: {
                        login: "zengwuxin",
                      },
                      id: "IC_kwDOE_T5mM49tJL2",
                    },
                    {
                      bodyText: "Assigned to you @zengwuxin :)",
                      author: {
                        login: "afcollins",
                      },
                      id: "IC_kwDOE_T5mM49tNFj",
                    },
                    {
                      bodyText:
                        "No secrets, scripts are used in the Lint workflows.👍\nCODEOWNERS file has the dev team listed as a required PR approver for all code changes. 👍\nWorkflows is not accessing cloud resources, so OpenID connect does not apply. 👍\nWorkflows is not using a third-party action.👍\nDo we want this action to scope the frontend repo too? If so, we might want to consider securing cross-repo access with github token.",
                      author: {
                        login: "zengwuxin",
                      },
                      id: "IC_kwDOE_T5mM49tmIk",
                    },
                    {
                      bodyText:
                        "As far as the Amplify App goes, we will combine the frontend and backend repos. Also, github token almost always only works within a single repo.",
                      author: {
                        login: "zengwuxin",
                      },
                      id: "IC_kwDOE_T5mM49tsIy",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "Lob API helps us coordinate letter templates and addressbook to send letter mail\nUnit Tests\n\n  createAddress",
                id: "I_kwDOE_T5mM5DOy5t",
                state: "CLOSED",
                title: "Epic: Lob API tests",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "Our Dependabot PRs are currently failed on the required Check for the integration tests. That is because Dependabot is no longer allowed to receive Actions Secrets when running in a workflow triggered by the pull_request event.\nTo remedy this, we can create a second alternative workflow that is specifically for Dependabot using the pull_request_target event instead and filtering the job based on the actor being Dependabot.\nMore details here: dependabot/dependabot-core#3253 (comment)\nP.S. We would also want to adjust the existing integration tests workflow is not run if the actor is Dependabot. 🙅🏻\nP.P.S. I believe that this alternative workflow job will still be able to satisfy the required Check so long as the job has the same name as the job in the existing workflow. 👥",
                id: "I_kwDOE_T5mM5DYUmW",
                state: "CLOSED",
                title:
                  "Task: Create alternative workflow for integration tests in Dependabot PRs",
                comments: {
                  totalCount: 3,
                  nodes: [
                    {
                      bodyText:
                        "It sounds like we can actually configure these values as [duplicated] Dependabot Secrets (vs. Actions Secrets) in order to have them supplied to Actions workflow runs that are triggered by pull_requests from Dependabot. This would be a much simpler fix, though arguably still a bit less secure than having the separate workflow. 🤔\nGiven the current Secrets we maintain that are all causing trouble are test API keys, just setting the Dependabot Secrets feels pretty safe to me.",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "IC_kwDOE_T5mM49tdC-",
                    },
                    {
                      bodyText:
                        "I have added the TEST_CIVIC_API_KEY and TEST_LOB_API_KEY values to Dependabot Secrets.",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "IC_kwDOE_T5mM49uGpV",
                    },
                    {
                      bodyText:
                        "That did the trick. 👍🏻\n\nLet's proceed with this for the time being but we may need to reassess in the future if we start adding any tests for secrets that are more critical to not expose. 👌🏻",
                      author: {
                        login: "JamesMGreene",
                      },
                      id: "IC_kwDOE_T5mM49uLrD",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "Problem: Currently, the Lob API will throw an error if user submits blank input to /createAddress route in lob.js. However, it would be more efficient to throw error before verifying address using API.\nTask: If a client submits a blank field to /createAddress in lob.js, an error should be thrown before calling lob.usVerifications.verify (so that it mimics /addressVerification route functionality completely).",
                id: "I_kwDOE_T5mM5DY0zB",
                state: "CLOSED",
                title:
                  "Task: Throw error for /createAddress route if any input is blank (without making api call)",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "Submitting a request with an invalid zipcode like /api/representatives/cat results in a 500 Internal Server Error, but should be a 400 Bad Request instead.\nExpected Behavior\nThe requests below should result in the following status codes\n\n/api/representatives/cat has a response of 400 Bad Request\n/api/representatives/84014 has a response of 200 OK\n/api/representatives/84014-1404 has a response of 200 OK\n\nCurrent Behavior\nSubmitting a request with an invalid zipcode like /api/representatives/cat results in a 500 Internal Server Error, but should be a 400 Bad Request instead.\nPossible Solution\nPerform some zipcode validation in the /api/representatives/zipcode API and write some unit tests around the validation.\nSteps to Reproduce\n\nStart a codespace and run the server.\nAccess your API at /api/representatives/cat to see the 500 error.\n\nContext (Environment)\nI was wondering what zipcode formats are supported. I thought it would be good to build some validation around the zipcode format.\nLabels\n\nFunctional Bug: something that is causing a crash of the app",
                id: "I_kwDOE_T5mM5DZNgJ",
                state: "CLOSED",
                title: "Zip Code Validation in Representatives API",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "Closed by #218",
                      author: {
                        login: "computate",
                      },
                      id: "IC_kwDOE_T5mM49tw38",
                    },
                  ],
                },
              },
            ],
            totalCount: 15,
          },
        },
        {
          id: "R_kgDOHbsWWw",
          name: "checkout-files",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOH_iclw",
          name: "statusboard",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOH_igvw",
          name: "documentation",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIIYYuw",
          name: "nvm",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIe_Ijw",
          name: "upload-artifact",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIielOg",
          name: "advent-of-code-2022",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOI9YRUg",
          name: "proposal-array-compact",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjE1NjYzODkw",
    email: "",
    name: null,
    login: "strafe",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnkxNjUyMjk0Mzc=",
          name: "zSkyworld",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxODIzNjQxNzA=",
          name: "playlist-dl",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxODU0MTcxMTM=",
          name: "grumi",
          issues: {
            nodes: [
              {
                bodyText: "",
                id: "MDU6SXNzdWU1MDc4Nzg4MjA=",
                state: "CLOSED",
                title: "Make ffprobe optional",
                comments: {
                  totalCount: 3,
                  nodes: [
                    {
                      bodyText:
                        "ffprobe is only required when uploading videos (which is barely supported by the Imgur API in the first place). Since it's bundled with ffmpeg and readily available I'm not going to drop it at this time.",
                      author: {
                        login: "strafe",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDc3MzA1MzY2Nw==",
                    },
                    {
                      bodyText:
                        "Turns out I ended up making a lot more changes than I though. ffprobe is currently removed, and the API is generating errors for videos that are too long at the moment.\nUnfortunately this means you need to wait for the whole video to upload before it fails. Ideally an optional ffprobe check (if installed) would be ideal to reduce headaches.",
                      author: {
                        login: "strafe",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDc3NzEwNjU2Ng==",
                    },
                    {
                      bodyText:
                        "Local sanity checks were added back in 77a3e8c. This time video length is only checked locally if ffprobe is installed, otherwise Imgur's API will throw the error during the upload.\n\nLocal:\ngrumi: 61s.mp4: Failed to process (error: Video too long 60s max).\n\nImgur API fallback:\ngrumi: 61s.mp4: Failed to upload (error: File exceeds max duration).",
                      author: {
                        login: "strafe",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNTY0MDU5NA==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "The process will hang for roughly a minute, before printing a failed to upload message with no reason.\n$ grumi video.webm\nError uploading video.webm ()\nNo images uploaded.",
                id: "MDU6SXNzdWU4MDEwNTczODM=",
                state: "CLOSED",
                title: "Video uploads do not work",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "For some reason Imgur decided to provide an upload example using the /image path, which is completely undocumented and only works for image (I assume it's some kind of legacy API feature). The correct path is /upload.",
                      author: {
                        login: "strafe",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDc3NjY1NzY3NA==",
                    },
                    {
                      bodyText: "Fixed in 56c2ec9.",
                      author: {
                        login: "strafe",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDc3NjkxNDU4NQ==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "Imgur now seems to support two additional video formats (video/mp4 & video/quicktime).\n\nPreviously, video/mp4 was supported but only when uploaded using the https://imgur.com website.\n\n\n\n Images are no longer limited to 1MB, instead there is now a 20MB maximum.\n\nGIFs no longer follow the image size restriction, and instead use the video size restriction.\nPNGs over 5MB are converted to JPEG (why?).\n\n\n\n Videos are no longer limited to 30 seconds, instead there is now a 60 second limit.\n\n\n\nNote that the current API docs still state:\n\nimage - A binary file, base64 data, or a URL for an image. (up to 10MB)\nvideo - A binary file (up to 200MB)",
                id: "MDU6SXNzdWU4MDEwODM2NTA=",
                state: "CLOSED",
                title: "Investigate API changes",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "Newest revelation is that APNG is only supported when using the undocumented /image path. /upload will work, but will result in a static image/regular PNG.",
                      author: {
                        login: "strafe",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDc3NzA0NzY1Nw==",
                    },
                    {
                      bodyText:
                        "Newest revelation is that APNG is only supported when using the undocumented /image path. /upload will work, but will result in a static image/regular PNG.\n\nThis was resolved in 7d75d3d.\n\n\nImgur does now support MP4 and MOV/QuickTime uploads through their API 🎉.\nThe image size limit has increased, but only to 10MB for API uploads, 20MB is limited to imgur.com still.\nVideos now have a 60 second limit 🎥.",
                      author: {
                        login: "strafe",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDc3NzEwNTU1Ng==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "According to the API docs, images can be uploaded via a URL rather than a local file (this doesn't apply to videos).",
                id: "MDU6SXNzdWU4MDU4NzU2NTQ=",
                state: "CLOSED",
                title: "Add support for URL uploads",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "Added in a251830.",
                      author: {
                        login: "strafe",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDc3NzI3OTQ4NQ==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "There are a number of errors the API can return that could be avoided by local sanity checks before attempting to upload:\n\n File size. Images (including animated ones) are limited to 10MB. Videos are limited to 200MB.\n MIME type.\n\nImage: image/jpeg, image/gif, image/apng, image/tiff & image/png.\nVideo: video/mp4, video/webm, video/x-matroska, video/quicktime, video/x-flv, video/x-msvideo, video/x-ms-wmv & video/mpeg.\n\n\n Video length. Videos are limited to 60 seconds in length, regardless of their file size. Use ffprobe if available.",
                id: "MDU6SXNzdWU4MDU5NjUwMjg=",
                state: "CLOSED",
                title:
                  "Introduce local sanity checks to reduce waiting time",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText:
                        "Local sanity checks were implemented in 77a3e8c.",
                      author: {
                        login: "strafe",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNTYzODQ3OQ==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "It shouldn't be too difficult to parse error messages through RegEx, and since this is all that jq is used for it may be worth trying to drop it. Shell script dependencies aren't fun on a lot of operating systems.",
                id: "MDU6SXNzdWU4Mzk1MzY5NTE=",
                state: "OPEN",
                title: "Drop jq as a dependancy",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 6,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzMzgwMTQyMDY=",
          name: "bunnyfetch",
          issues: {
            nodes: [
              {
                bodyText:
                  "I'm using iTerm2 with Caskaydia Nerd Font.\nTried JetBrains and Meslo Nerd Fonts too.\nAny idea how to fix this?\nWhat font did you use for the screenshot?",
                id: "I_kwDOFCWv_s5CEKQh",
                state: "CLOSED",
                title: "Icons Appear Broken",
                comments: {
                  totalCount: 18,
                  nodes: [
                    {
                      bodyText:
                        "That command produced a lot of output...\nI couldn't comment it here, so I made a gist of it:\nhttps://gist.github.com/cybardev/font_log.txt",
                      author: {
                        login: "cybardev",
                      },
                      id: "IC_kwDOFCWv_s48wwxe",
                    },
                    {
                      bodyText:
                        "A screenshot would be ideal, it should print out a bunch of the nerd font icons e.g.",
                      author: {
                        login: "strafe",
                      },
                      id: "IC_kwDOFCWv_s48xX85",
                    },
                    {
                      bodyText:
                        "It's a lot of output. Here are the first 3 screens:",
                      author: {
                        login: "cybardev",
                      },
                      id: "IC_kwDOFCWv_s48xc8V",
                    },
                    {
                      bodyText:
                        "Okay, I think I see the issue here. Kitty renders the icons properly:\n\nThe issue may be with iTerm2 not being able to recognize and/or render Typicons.",
                      author: {
                        login: "cybardev",
                      },
                      id: "IC_kwDOFCWv_s48xdd-",
                    },
                    {
                      bodyText:
                        "I haven't used any typicons in this, all of the symbols are nerd fonts icons. Personally I'm using iTerm2 and have no issues. Where did you install the font?",
                      author: {
                        login: "strafe",
                      },
                      id: "IC_kwDOFCWv_s48xd1S",
                    },
                    {
                      bodyText:
                        "This is very odd... I toggled ligatures off and then on again, and now all the icons render fine. Didn't need to change the font or anything. Maybe it just didn't \"update\" till now or something.\nThank you for your kind help. Much appreciated. 😊",
                      author: {
                        login: "cybardev",
                      },
                      id: "IC_kwDOFCWv_s48xecG",
                    },
                    {
                      bodyText:
                        "No worries! You may also want to disable mark indicators (the little blue arrows), I see them in your first screenshot. They annoyed me for a while.",
                      author: {
                        login: "strafe",
                      },
                      id: "IC_kwDOFCWv_s48xfN3",
                    },
                    {
                      bodyText:
                        'Oh yeah, that\'s very annoying. Looks much cleaner now. Thanks a lot.\n\nunrelated, but could you suggest how I can put the parts to print system information in their own function?\nSo this...\nprintf \'\\n             %s%s%b  %s%s\\n   (\\ /)     %s%b  %s%s\\n   ( %s. .%s)    %s%b  %s%s\\n   c(%s"%s)(%s"%s)   %s%b  %s%s\\n             %s%b  %s%s\\n\\n\' \\\n    "$d" "$c1" \'\\xEF\\x82\\x8A\' "$t" "$window_manager" \\\n    "$c3" \'\\xEF\\x82\\xAD\' "$t" "$kernel_version" \\\n    "$d" "$t" "$c2" \'\\xEF\\x84\\xA0\' "$t" "$current_shell" \\\n    "$c1" "$t" "$c1" "$t" "$c5" \'\\xEF\\x80\\xBE\' "$t" "$resolution" \\\n    "$c4" \'\\xEF\\x87\\xAB\' "$t" "$wifi_ssid"\nWould be like:\nsysinfo() {\n    "$d" "$c1" \'\\xEF\\x82\\x8A\' "$t" "$window_manager" \\\n    "$c3" \'\\xEF\\x82\\xAD\' "$t" "$kernel_version" \\\n    "$d" "$t" "$c2" \'\\xEF\\x84\\xA0\' "$t" "$current_shell" \\\n    "$c1" "$t" "$c1" "$t" "$c5" \'\\xEF\\x80\\xBE\' "$t" "$resolution" \\\n    "$c4" \'\\xEF\\x87\\xAB\' "$t" "$wifi_ssid"\n}\n\nprintf \'\\n             %s%s%b  %s%s\\n   (\\ /)     %s%b  %s%s\\n   ( %s. .%s)    %s%b  %s%s\\n   c(%s"%s)(%s"%s)   %s%b  %s%s\\n             %s%b  %s%s\\n\\n\' \\\n    $(sysinfo)\nOr such...\nIt\'s actually an XY problem. My real intention is to avoid code duplication in my fork of this script:\nkittyfetch() {\n    printf \'\\n             %s%s%b  %s%s\\n   /\\_/\\     %s%b  %s%s\\n  ( %s%s%s )    %s%b  %s%s\\n   %s>%s %s^%s %s<%s     %s%b  %s%s\\n             %s%b  %s%s\\n\\n\' \\\n        "$d" "$c1" "$w" "$t" "$wm" \\\n        "$c3" "$k" "$t" "$kern" \\\n        "$d" "$(eyes $1)" "$t" "$c2" "$s" "$t" "$shell" \\\n        "$c1" "$t" "$c3" "$t" "$c1" "$t" "$c5" "$r" "$t" "$res" \\\n        "$c4" "$n" "$t" "$net"\n}\n\nbunnyfetch() {\n    printf \'\\n             %s%s%b  %s%s\\n   (\\ /)     %s%b  %s%s\\n   ( %s%s%s)    %s%b  %s%s\\n   c(%s"%s)(%s"%s)   %s%b  %s%s\\n             %s%b  %s%s\\n\\n\' \\\n        "$d" "$c1" "$w" "$t" "$wm" \\\n        "$c3" "$k" "$t" "$kern" \\\n        "$d" "$(eyes $1)" "$t" "$c2" "$s" "$t" "$shell" \\\n        "$c1" "$t" "$c1" "$t" "$c5" "$r" "$t" "$res" \\\n        "$c4" "$n" "$t" "$net"\n}',
                      author: {
                        login: "cybardev",
                      },
                      id: "IC_kwDOFCWv_s48xffW",
                    },
                    {
                      bodyText:
                        'Sorry for the trouble; figured it out:\nsysinfo() {\n    for ch in "$d" "$c1" "$w" "$t" "$wm" \\\n        "$c3" "$k" "$t" "$kern" \\\n        "$d" "$(eyes $1)" "$t" "$c2" "$s" "$t" "$shell" \\\n        "$c1" "$t" "$c3" "$t" "$c1" "$t" "$c5" "$r" "$t" "$res" \\\n        "$c4" "$n" "$t" "$net"; do\n        printf "$ch\\n"\n    done\n}\n\nEdit: that messed up the bunny for some reason, but I\'ll figure it out eventually. Thanks for your time.\nEdit2: it\'s because the cat and the bunny have different arguments, so code was actually not duplicated (at least not completely). Sorry for the trouble.',
                      author: {
                        login: "cybardev",
                      },
                      id: "IC_kwDOFCWv_s48xmX3",
                    },
                    {
                      bodyText:
                        "@strafe Sorry to bother you again, but could you please tell me how you found out which icon is which?\nOn the Nerd Font Cheat Sheet website (https://www.nerdfonts.com/cheat-sheet), I found the following:\n\nBut your shell icon seems to be \\xEF\\x84\\xA0\nI'd like to change it to the filled terminal (1st glyph in the above picture).\nHow would I go about converting e795 to the format expected?",
                      author: {
                        login: "cybardev",
                      },
                      id: "IC_kwDOFCWv_s481jNA",
                    },
                    {
                      bodyText:
                        'If you enter the code points (e795 in this case) into this website (https://www.cogsci.ed.ac.uk/~richard/utf-8.html), you\'ll see the bytes you need to use under "Hex UTF-8 bytes". Then just make sure you prefix them in the same way with \\x.',
                      author: {
                        login: "strafe",
                      },
                      id: "IC_kwDOFCWv_s484wzn",
                    },
                    {
                      bodyText:
                        "Ah, wow. Thanks a lot. I'll do that.\nThanks for the help; have a nice day. 😊",
                      author: {
                        login: "cybardev",
                      },
                      id: "IC_kwDOFCWv_s489haW",
                    },
                    {
                      bodyText:
                        "@strafe Sorry to bother you again, but in your script, what do the variables in lines 34-36 do? I think $t is a termination symbol for colours, but I don't know what $d and $v are doing.",
                      author: {
                        login: "cybardev",
                      },
                      id: "IC_kwDOFCWv_s5AxDa5",
                    },
                    {
                      bodyText:
                        "@strafe Sorry to bother you again, but in your script, what do the variables in lines 34-36 do? I think $t is a termination symbol for colours, but I don't know what $d and $v are doing.\n\nNo problem. All of these variable including the c* ones above are being set to escape codes that control how text printed after them is displayed. Most of this comes from elenpan's original script and I haven't had a reason to modify it so things are a little funky.\n\nc* are used to set the colour of text that comes after them.\nd is used to make the text that comes after it bold.\nt resets the effects of any previously used escape codes.\nv doesn't appear to actually get used in the script, but if it was, it would swap the text and background colours so that light text on a dark background would appear as dark text with a light background.",
                      author: {
                        login: "strafe",
                      },
                      id: "IC_kwDOFCWv_s5AxZCq",
                    },
                    {
                      bodyText:
                        'I see. Thanks a lot. I was asking so I can include this information in the comments of my "fork" because I just copy-pasted that part without understanding any of it.\nNow I understand what they do. Thanks a lot 😊',
                      author: {
                        login: "cybardev",
                      },
                      id: "IC_kwDOFCWv_s5AxiqB",
                    },
                  ],
                },
              },
              {
                bodyText:
                  'I have two displays: an FHD monitor, and the MacBook display. The resolution appears "squashed" together like in the following image.\n\nI\'ve tweaked the code slightly to only print the resolution of the Retina display by changing:\nresolution="$(system_profiler SPDisplaysDataType | awk \'/Resolution:/ {printf $2"x"$4""}\')"\nto:\nresolution="$(system_profiler SPDisplaysDataType | grep Retina | awk \'/Resolution:/ {printf $2"x"$4""}\')"\nWhich displays the following:\n\nBut ideally, I would want to display both resolutions with a comma to separate them.\nThe update would also ideally support more displays, so I\'d prefer not to hardcode it.\nHere\'s the output from system_profiler SPDisplaysDataType | grep Resolution:\nResolution: 1920 x 1080 (1080p FHD - Full High Definition)\nResolution: 2560 x 1600 Retina\n\nI\'m not very good with awk, sed, etc.\nCould you please guide me on how I can achieve this?',
                id: "I_kwDOFCWv_s5CMxkK",
                state: "CLOSED",
                title: "Weird Resolution on Multiple Displays",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "Let me know if this is resolved, seems to be.",
                      author: {
                        login: "strafe",
                      },
                      id: "IC_kwDOFCWv_s48wrt1",
                    },
                    {
                      bodyText:
                        "Let me know if this is resolved, seems to be.\n\nYep, all's well now. Thanks a lot. 😊",
                      author: {
                        login: "cybardev",
                      },
                      id: "IC_kwDOFCWv_s48ww36",
                    },
                  ],
                },
              },
            ],
            totalCount: 2,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDM3NzM0MTU=",
          name: "hjkl",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDQwODIwNTc=",
          name: "gruvbox-contrib",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDQ0NTQxMDI=",
          name: "better-srcds-log-parser",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDUzMjQ5NTA=",
          name: "rirc",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDcxNTI2MzQ=",
          name: "dotfiles",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDc0MDg0Mzc=",
          name: "spacebar",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDc3MzUzMTI=",
          name: "yabar",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNTAxMDgwNTE=",
          name: "plugin-sourcemod",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNTcyNTA4NDY=",
          name: "discord-vscode",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNzQyMTQ3MjU=",
          name: "cli-microsoft365",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOGvI4gQ",
          name: "neofetch",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjIxMjA4Nw==",
    email: "",
    name: "Aric Walker",
    login: "aricwalker",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnk0MDI3MDQ4",
          name: "partytown-node",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk0NTg2MDY0",
          name: "st2-settings",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk0NjY2NTIx",
          name: "nagios-check-redis",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk0OTU4ODMz",
          name: "node-vips",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk1ODc5NzUx",
          name: "arduino-hack",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzMzUxNjMxNA==",
          name: "JDebug",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk0Njk4ODA2NQ==",
          name: "heroku-buildpack-ffmpeg",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxMTIwNDkxMDQ=",
          name: "project-icons",
          issues: {
            nodes: [
              {
                bodyText:
                  "Received this when opening a project that has not been opened before.\nCannot read property 'lowerCasePath' of undefined\nHide Stack Trace\nTypeError: Cannot read property 'lowerCasePath' of undefined\n    at Object.activate (/Users/aricwalker/repositories/project-icons/lib/project-icons.js:14:55)\n    at Package.module.exports.Package.activateNow (/Applications/Atom.app/Contents/Resources/app/src/package.js:253:25)\n    at /Applications/Atom.app/Contents/Resources/app/src/package.js:225:38\n    at Package.module.exports.Package.measure (/Applications/Atom.app/Contents/Resources/app/src/package.js:99:21)\n    at /Applications/Atom.app/Contents/Resources/app/src/package.js:218:32\n    at Package.module.exports.Package.activate (/Applications/Atom.app/Contents/Resources/app/src/package.js:215:40)\n    at PackageManager.activatePackage (/Applications/Atom.app/Contents/Resources/app/src/package-manager.js:690:42)\n    at config.transactAsync (/Applications/Atom.app/Contents/Resources/app/src/package-manager.js:665:36)\n    at Config.module.exports.Config.transactAsync (/Applications/Atom.app/Contents/Resources/app/src/config.js:367:24)\n    at PackageManager.activatePackages (/Applications/Atom.app/Contents/Resources/app/src/package-manager.js:663:23)\n    at PackageManager.activate (/Applications/Atom.app/Contents/Resources/app/src/package-manager.js:646:50)\n    at /Applications/Atom.app/Contents/Resources/app/src/atom-environment.js:854:36",
                id: "MDU6SXNzdWUyNzc5NDM1NDM=",
                state: "CLOSED",
                title: "Cannot read property 'lowerCasePath' of undefined",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText:
                        "Closing for now, this should be fixed with commit 030f6ec.",
                      author: {
                        login: "aricwalker",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDM0ODU4OTMwMg==",
                    },
                  ],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxMjYxMTkxNzQ=",
          name: "phaser",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxMjY3NTA3NDA=",
          name: "phaser",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNjQyNjI0Mzk=",
          name: "vault",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNzkxNDcyODI=",
          name: "parallel-tests",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxODA0MTYzMTA=",
          name: "rails",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxODI3NDgxMzU=",
          name: "twirp-ruby",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk0MDA1ODUzNjU=",
          name: "pager_duty-connection",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjExMDI3NQ==",
    email: "",
    name: "Harry Marr",
    login: "hmarr",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnkzMzg2NzI5NjE=",
          name: "vitals",
          issues: {
            nodes: [
              {
                bodyText:
                  "Add a checkbox to toggle this in the right-click menu.",
                id: "MDU6SXNzdWU4MzcxMTE4NzI=",
                state: "CLOSED",
                title: "Automatically start at login",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "Done in 56d7aaf",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNTQxNjY5MA==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "We've already got the data (from parsing the ps output). Visualising it in a useful way might be challenging. Using a simple line chart per-process doesn't work that well because processes rarely exhibit very significant memory usage spikes (unlike other resources like CPU and network IO). Also, it's not clear what the y-axis scale ought to be.",
                id: "MDU6SXNzdWU4MzcxMTI1Mzg=",
                state: "CLOSED",
                title: "Show process memory usage",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "Done in b78ec5f",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc40k2_E",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "It looks like nettop should return what we need. The command would look something like this:\nnettop -P -L 1 -k time,interface,state,rx_dupe,rx_ooo,re-tx,rtt_avg,rcvsize,tx_win,tc_class,tc_mgt,cc_algo,P,C,R,W,arch\n\nThe chart component would probably need a way of showing ingress and egress IO separately.",
                id: "MDU6SXNzdWU4MzcxMTI5NjI=",
                state: "CLOSED",
                title: "Show network IO",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "Done in c5ca73f",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc40k2_t",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "I quite often end up killing CPU hogs after I've tracked them down. It'd be nice to be able to do that right from Vitals.",
                id: "MDU6SXNzdWU4MzcxMTMxMDU=",
                state: "CLOSED",
                title: 'Add a "kill process" button',
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "I have no near-term plans to do this, so closing it out.",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc5AyOjS",
                    },
                    {
                      bodyText:
                        "I just wanted to add my +1 here, as this would be very useful. A simple implementation could kill the application on a left-click (after confirmation?), or force-kill on shift + left-click.",
                      author: {
                        login: "brechtm",
                      },
                      id: "IC_kwDOFC-9Qc5QHQ-N",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "Thanks for creating this neat little app! I've faced a similar problem to what you outlined in your blog post, and I'm excited that I found Vitals.\nI'm not sure what causes this behavior, but I can't seem to drag-n-drop the Vitals icon to reorder it among my other menu bar apps. I use a ton of them (iStat Menus, Dropbox, Alfred, BlueJeans, 1Password, to name a few) - all of them can be reordered if I hold down CMD and click to drag. Vitals seems to treat this as a regular click (and opens the main processes window.\nI may poke around to see if I can figure it out, but I have no experience with menu bar apps so I don't expect to find a solution quickly 😅",
                id: "MDU6SXNzdWU4MzgxMDM5MDU=",
                state: "CLOSED",
                title: "Menu bar icon can't be dragged/re-ordered",
                comments: {
                  totalCount: 7,
                  nodes: [
                    {
                      bodyText:
                        "Nice catch! I suspect (hope) it'll just be a case of checking whether cmd is being held down in the click event handler.\nAt some point I'd like to try embedding the UI in a regular NSMenuItem (by setting its view property) rather than using an NSPopover. I think that'd mean all the native behaviour works as expected out of the box, and it'd also mean I could put the \"Quit\" menu item there too – right now you need to right click the menu bar item to see it which isn't super intuitive.",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNDM5ODcxMg==",
                    },
                    {
                      bodyText:
                        "That makes sense and seems to align with what I've read from some cursory googling.\non another note - how do I build/run this locally? I pulled it up in Xcode and got an error that led me to download v12 beta, but that doesn't seem to run on my version of macOS (10.15.7). Am I SOL until I can run Catalina, or is there a workaround?",
                      author: {
                        login: "erawhctim",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNDQ1Njc5MQ==",
                    },
                    {
                      bodyText:
                        "Hmm, what's the error you're getting? I'm using Xcode 12.3 with Catalina 10.15.7.",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNDUxMTA2MA==",
                    },
                    {
                      bodyText:
                        "Oh! 🤦 I was using the 12.5 beta, that explains it.\nI downloaded 12.4 and can run it now 🙂",
                      author: {
                        login: "erawhctim",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNDkwODcxMA==",
                    },
                    {
                      bodyText:
                        "Fortunately the fix was pretty simple! Thanks again for pointing this out. I'll cut a new release soon.",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNTM3ODg0Ng==",
                    },
                    {
                      bodyText:
                        "Oh nice! Love to see that.\nOn March 23, 2021, BasheerMalaaNBCU ***@***.***> wrote:\n Fortunately the fix\n <845a31d>\n was pretty simple! Thanks again for pointing this out. I'll cut a new\n release soon.\n\n—\nYou are receiving this because you authored the thread.\nReply to this email directly, view it on GitHub\n<#5 (comment)>, or\nunsubscribe <https://github.com/notifications/unsubscribe-\nauth/ABSLRVYG7HD4PXVXA4WP2VTTFEXL3ANCNFSM4ZT36ZFQ>.",
                      author: {
                        login: "erawhctim",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNTM3OTgxOQ==",
                    },
                    {
                      bodyText:
                        "I just published v0.2, which includes this fix 🚀\nIf you're using homebrew:\nbrew tap hmarr/tap  # if you haven't already done this\nbrew update         # if you're updating from v0.1\nbrew install vitals\n\nOtherwise you can download v0.2 from the releases page.",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNTQxNzEzMg==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "It looks pretty easy to add a cask.\nGiven the homebrew rejection criteria, it might be worth waiting to see if adoption grows a bit before submitting to the core casks repo. In the meantime, publishing to my homebrew tap might be good enough.",
                id: "MDU6SXNzdWU4MzgxMzQ0OTE=",
                state: "CLOSED",
                title: "Make it `brew install`able",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText:
                        "I've added it to my homebrew tap, so the following should now work:\nbrew tap hmarr/tap\nbrew install vitals",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNDUxNjYwNQ==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "See attached screenshot.  I believe (according to the output of top -ocpu) that this top sparkline is for WindowServer.",
                id: "MDU6SXNzdWU4MzgyNTk1MzU=",
                state: "CLOSED",
                title: "List appears clipped at the top",
                comments: {
                  totalCount: 8,
                  nodes: [
                    {
                      bodyText:
                        "Thanks for reporting. Which version of macOS are you using? I've only been able to test it on Catalina so far.",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNDUyODM5NA==",
                    },
                    {
                      bodyText:
                        "Ah yeah, it's Big Sur 11.2.2 (20D80).  I looked at it in Xcode and it does look like the VStack is somehow larger than the ContentView that contains it.",
                      author: {
                        login: "ianh",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNDUzMTEwMA==",
                    },
                    {
                      bodyText:
                        "Wrapping everything in a scroll view fixes the issue and looks nice too.  I created a pull request at #8 if you're interested!",
                      author: {
                        login: "ianh",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNDU2ODc2NA==",
                    },
                    {
                      bodyText:
                        "Thanks for looking into this! Good to know that the scroll view fixes it. I think I'd rather avoid scrolling if possible, given that the 20 items should all easily fit in the space available.\nI wonder whether wrapping the VStack in anything else (List, View, etc) helps the situation. The two other things that come to mind are adjusting the padding on the VStack, and changing the popover's contentSize.\nIf you have a chance to try those out and they do the trick, please do submit a PR! But no pressure 😄\nAdditionally, I noticed the numbers on the right look a bit smaller than the process names on the left. I'm not sure why that's happening for you – the other Big Sur screenshot I've seen doesn't seem to exhibit that behaviour.",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNTM4NjE1NQ==",
                    },
                    {
                      bodyText:
                        "Sounds good, thanks for taking a look.  It seems like changing the contentSize of the popover so its height matches its contents would be a good solution, but I can't figure out how to get the height information out of SwiftUI.",
                      author: {
                        login: "ianh",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNTQxMDU3Mg==",
                    },
                    {
                      bodyText:
                        "I've gone ahead and implemented the fix @ianh suggested in PR #10, hard coded since the height can be statically decided. As I mentioned in the PR this introduces a bit of coupling, but I really can't think of any other fix.\nBefore settling on that I basically tested every combination of calling fixedSize(horizontal:vertical:) on the Views, but nothing seemed to work. Granted, I'm no SwiftUI expert so feel free to reject if you don't think it's appropriate.",
                      author: {
                        login: "jlledo",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNjI0ODAwMw==",
                    },
                    {
                      bodyText:
                        "Verified this is fixed for me in b37168e.  Thanks!",
                      author: {
                        login: "ianh",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNzg3NzcxNw==",
                    },
                    {
                      bodyText:
                        "Great! I just published v0.3 which includes this fix. It's also available in the Homebrew tap.",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNzg4OTE2Ng==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "See this example:\n\nGoogle Chrome Helper (Renderer) displays 36% but vitals shows a steady 7%. I watched it for some time and both numbers stayed roughly stable.\nRunning macOS 11.2.2",
                id: "MDU6SXNzdWU4NDAwMzg4MTI=",
                state: "CLOSED",
                title:
                  "CPU usage for certain processes doesn't match Activity Monitor",
                comments: {
                  totalCount: 8,
                  nodes: [
                    {
                      bodyText:
                        "I think it's possible that's a different Chrome helper process and you're running into #7.\n#7 is a pretty critical issue for Big Sur as it seems to be hiding literally the most important row in the table (the top one!) Unfortunately I'm locked to Catalina right now so have no ability to reproduce it.",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNjA3NDQ2OQ==",
                    },
                    {
                      bodyText:
                        "When you get a second can you try v0.3 and see if that fixes it?",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwNzg4OTM2MA==",
                    },
                    {
                      bodyText:
                        "I upgraded via homebrew and now vitals doesn't seem to start (or at least, it is missing from my menu bar). Are there any useful logs I could dig out?",
                      author: {
                        login: "nickrw",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwODE1OTEwOQ==",
                    },
                    {
                      bodyText:
                        "Yikes!\nThere might be some logs in the Console app?\nYou'll need to relaunch it after reinstalling it – could it be a Gatekeeper issue? You could double check that by right-clicking it in Finder then selecting \"Open\". If that is the problem I'll probably just give in and pay Apple for a proper developer account so I can get the app notarised and remove that warning.",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwODE3MzUyMw==",
                    },
                    {
                      bodyText:
                        "Hm, possibly I was just going mad, but it seems to be working (and I'm no longer seeing the symptoms reported in #7). I'll need to get on another google meet before I can confirm the chrome helper utilisation looks the same 😄",
                      author: {
                        login: "nickrw",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwODE3NzU1NQ==",
                    },
                    {
                      bodyText:
                        "Hah, let me know how you get on with google meet! Glad to hear #7 is fixed.",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwODI2MjAwNA==",
                    },
                    {
                      bodyText: "Looks like this was the fix 🎉",
                      author: {
                        login: "nickrw",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwODM5NjI5NQ==",
                    },
                    {
                      bodyText: "🥳",
                      author: {
                        login: "hmarr",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgwODUwNzEwMw==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "Problem\nI downloaded and ran the application (allowing it in the Security and Privacy) but nothing seems to happen\nDetails:\nInstallation Method: brew\nOS Version: MacOS Big Sur 11.2.3\nAdditional Context\nLove the idea, just need to get it to work, please let me know if you need more information",
                id: "MDU6SXNzdWU4NjM3NDUwOTc=",
                state: "CLOSED",
                title: "Does not seem to start",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "Seems to have started after a restart",
                      author: {
                        login: "Spazzy757",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgyNDU4MzE0Nw==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "First thanks for your effort to create such a compact and useful utility!\nI am using it with macOS Catalina. In version 0.5 there are two buttons supposed to change what metrics display and they work, but they both show question marks indicating the font used in this version of macOS doesn't have them.",
                id: "MDU6SXNzdWU5NDcxNDA5ODY=",
                state: "CLOSED",
                title:
                  "Buttons changing the metrics display with question marks",
                comments: {
                  totalCount: 3,
                  nodes: [
                    {
                      bodyText:
                        "Thanks for reporting this! I think I've fixed the issue by bundling the icons used in the app – I didn't realise they were coming from an icon font on my computer.\nI published a new release (v0.6) that includes the fix. Would you mind checking if the new release fixes the issue, as it's a little hard to reproduce on my computer?\nTo get the new release, you can download the app from the GitHub release or install from my homebrew tap (brew tap hmarr/tap && brew install hmarr/tap/vitals). Once I know it does the job I'll update the official hombrew release.",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc40mkqg",
                    },
                    {
                      bodyText:
                        "v0.6 is now available in the main homebrew repository, so installing from there should also work (brew update && brew upgrade vitals).",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc40nC9Z",
                    },
                    {
                      bodyText:
                        "Thanks for the quick response! I have installed v0.6 and the buttons look much better 👍🏼",
                      author: {
                        login: "gkarag",
                      },
                      id: "IC_kwDOFC-9Qc40n78b",
                    },
                  ],
                },
              },
              {
                bodyText:
                  '(really enjoy using the app when I have to btw. Thanks, for making and sharing it!)\nDescription\nSometimes when clicking to switch to a different resource page the app hangs and the infamous spinning wheel appears. Interestingly, all that is required to "unhang" is to move the cursor and the app will instantly become responsive again and switch resource pages (see video for more clear demo).\nSteps to reproduce\n\nClick thru resource pages without moving the cursor, just clicking\nTake note of the resource heading label (e.g. "CPU", "Memory" etc) and when you see that the page hasn\'t change but you have clicked then wait a few seconds and observe the spinning wheel and the page never changing\nMove cursor and observe spinning wheel disappearing and resource page changing appropriately\n\nEnvironment\n\nVitals version 0.7\nDevice: MacBook Air (Retina, 13-inch, 2018)\nOS version: macOS Monterey 12.0.1 (21A559)\n\nVideo demo\n(please excuse the annoying popup for the trial software I downloaded to show my mouse clicks)\n\n\n  \nInstruments trace\nI also recorded a trace using the instruments app while repro\'ing this issue and attached it below. If you open it in instruments you can see when the "spinning" event happened and what function calls were most present in the samples. Lots of things to do with mouse events and it doesn\'t look like the CPU usage is very high so it might be erroneously waiting on an event.\nvitals.trace.zip',
                id: "I_kwDOFC-9Qc4-2XvG",
                state: "CLOSED",
                title: "Sometimes hang when switching between pages",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText:
                        "Thanks for the detailed issue! This has been a problem for me too. I think this was happening because the stats collection was (unintentionally) happening on the main thread. v0.8 moves the stats collection to a background thread, which seems to fix this, at least in my testing.",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc5AyNKv",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "Since upgrade to 12.0.1 I notice vitals invokes nettop which then takes 130% cpu, Fan's start to spin Vitals no longer responding.",
                id: "I_kwDOFC-9Qc4_LL9K",
                state: "CLOSED",
                title: "Vitals not responding",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText:
                        "I haven't managed to reproduce this, but v0.8 lets you disable the network monitoring. Hopefully that sorts it out!",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc5AyNFn",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "Pretty much the title. Somewhat concerning since I always have vitals running so being a bit power hungry could have a nontrivial effect on battery life.\nI wonder if this is because vitals now tracks 3 or 4 different resources instead of just CPU. I'd be willing to look into creating a setting to toggle the resources a user wants to track which might allow users to mitigate this. Lmk if that sounds like a pull request you think you'd accept.\nEnvironment\n\nVitals version 0.7\nDevice: MacBook Air (Retina, 13-inch, 2018)\nOS version: macOS Monterey 12.0.1 (21A559)\n\nImages",
                id: "I_kwDOFC-9Qc5B4hyc",
                state: "CLOSED",
                title: "vitals uses significant power",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "I've also noticed this – it seems to have become worse with recent macOS upgrades, too.\nRight now the stats are fetched by running the following tools every second:\n\nps - this records the CPU and memory stats, and doesn't seem to cause significant overhead.\nnettop - this records the network IO stats, and does seem to cause more overhead. Additionally I've noticed it causing the security software my employer uses to consume a lot of CPU, I think because it seems to do a lot of work when the process starts up (loading dynamic libraries, etc).\n\nI see a few paths forward:\n\nAs you suggested, provide a way of toggling certain resources on or off.\nRather than running ps and nettop as a new process every interval, instead run longer-lived processes that emit output periodically (e.g. for nettop, use -L 60 rather than -L 1 to gather one minute's worth of samples per process). Forking fewer processes should somewhat reduce the load on the system, at the cost of complicating the code.\nFinally, removing the extra stats altogether is an option. I personally very rarely use panes other than the CPU pane, so wouldn't mind much if we ditched memory and network stats.\n\nWhat are your thoughts? I think option 2 would be ideal, but also probably the most work. If few people are using the non-CPU stats, option 3 is probably the best path forward, but I unfortunately don't have any data on that.",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc48iIhI",
                    },
                    {
                      bodyText:
                        "I ended up adding a toggle for network monitoring in v0.8. I also eliminated some unnecessary work (sorting the list of processes) when the pane is closed, which should reduce CPU usage a little.\nFrom running v0.8 myself with network stats disabled, it seems like the energy usage is significantly lower. It's gone from hovering around 1.7 to 0.4 on my computer. I hope this does the trick for you too!",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc5AyOgt",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "I keep returning to my machine after a few hours to find Vitals not running. Crash log attached\nVitals-2022-04-11-192349.txt\n.",
                id: "I_kwDOFC-9Qc5HomSg",
                state: "CLOSED",
                title: "Vitals 0.8 keeps crashing",
                comments: {
                  totalCount: 3,
                  nodes: [
                    {
                      bodyText:
                        "Thanks for reporting this. I was able to track it down and reproduce it, and it should be fixed in v0.9 (available in my tap, and there's an open PR for the main homebrew repo).\nWould you mind trying out v0.9 and verifying it fixes the issue? I'll close this out for now but feel free to reopen it if the problem reoccurs.",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc5Bg9jU",
                    },
                    {
                      bodyText:
                        "It's been running fine all morning. Ship it! [and thanks for the quick work!]",
                      author: {
                        login: "jmfbk",
                      },
                      id: "IC_kwDOFC-9Qc5Bh62q",
                    },
                    {
                      bodyText: "That sounds promising! 🚀",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc5Bh78W",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "This would make it quicker to navigate to different pages.\nP.S. Thanks for this wonderful utility!",
                id: "I_kwDOFC-9Qc5Iq6bd",
                state: "OPEN",
                title:
                  "Feature suggestion: mouse wheel/touchpad scrolling to switch between pages",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "I like it! I don't have a tonne of time right now, but I'd happily accept a PR. Otherwise I'll see if it's quick to add when I do have some more time.",
                      author: {
                        login: "hmarr",
                      },
                      id: "IC_kwDOFC-9Qc5CU68n",
                    },
                    {
                      bodyText:
                        "I'm neglecting my own open source projects at the moment, so I'm going to try not to get involved in this! 😄",
                      author: {
                        login: "brechtm",
                      },
                      id: "IC_kwDOFC-9Qc5Dh34K",
                    },
                  ],
                },
              },
            ],
            totalCount: 15,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDU4NjY5ODQ=",
          name: "gemfile-lock-tmlanguage",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDYxMzk4NTc=",
          name: "linguist",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDgxMzUwNDA=",
          name: "auto-approve-test",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNTE2NTIxMjQ=",
          name: "prism",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzODcyMTg5NjY=",
          name: "homebrew-cask",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzODg1NDc5MzI=",
          name: "thank-you-builder",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOGQ1ZxQ",
          name: "raycast-extensions",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHIjYIg",
          name: "dependawhat",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHRas1w",
          name: "brew",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHSAiRw",
          name: "homebrew-cask-fonts",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHU2oxg",
          name: "xlsx-to-csv",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIRqf0Q",
          name: "fulcio",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOITAR7w",
          name: "advisories-analysis",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIVsWiA",
          name: "codeowners-rs",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjQxMDE5NQ==",
    email: "pavan.ravipati@github.com",
    name: "Pavan Ravipati",
    login: "pravipati",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnkxNjcwNzI4MjQ=",
          name: "atom",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNjg1Nzc5MTI=",
          name: "markdown-it",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNzE5NTMzNTI=",
          name: "github-app-repl",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNzUxMDE0OTU=",
          name: "MySampleExpressAppOnAzure",
          issues: {
            nodes: [
              {
                bodyText:
                  "Describe the bug\nA clear and concise description of what the bug is.\nTo Reproduce\nSteps to reproduce the behavior:\n\nGo to '...'\nClick on '....'\nScroll down to '....'\nSee error\n\nExpected behavior\nA clear and concise description of what you expected to happen.\nScreenshots\nIf applicable, add screenshots to help explain your problem.\nDesktop (please complete the following information):\n\nOS: [e.g. iOS]\nBrowser [e.g. chrome, safari]\nVersion [e.g. 22]\n\nSmartphone (please complete the following information):\n\nDevice: [e.g. iPhone6]\nOS: [e.g. iOS8.1]\nBrowser [e.g. stock browser, safari]\nVersion [e.g. 22]\n\nAdditional context\nAdd any other context about the problem here.",
                id: "MDU6SXNzdWU2MTI3MDQ4MTY=",
                state: "CLOSED",
                title: "[BUG] Test",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "While Ukraine is under missile attacks GitHub could be used by Russians to develop apps and platforms aiming to destabilize Ukrainian web resources.\nPlease, prevent these actions and don't stay on the same side with invaders! All information about war can be found at: https://war.ukraine.ua/\nWe ask you to close GitHub for Russia and its developers! We value your support and we are in need for your actions!",
                id: "I_kwDOCm_WN85FegRP",
                state: "OPEN",
                title: "Please stop war in Ukraine",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 2,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNzUzOTI5NDg=",
          name: "game",
          issues: {
            nodes: [
              {
                bodyText: "",
                id: "MDU6SXNzdWU0NTgxNDAzNzE=",
                state: "OPEN",
                title: "test",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "",
                id: "MDU6SXNzdWU0NTgxNDA4OTI=",
                state: "OPEN",
                title: "test2",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "Hello World!",
                      author: {
                        login: "expedia-glitch-app",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDUwMzY2MTA0Ng==",
                    },
                  ],
                },
              },
              {
                bodyText: "",
                id: "MDU6SXNzdWU0NTgyNDkyMzU=",
                state: "OPEN",
                title: "This issue is to see if glitch is setup!",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "Hello World!",
                      author: {
                        login: "demo-app-10",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDUwMzc2NTkzNA==",
                    },
                  ],
                },
              },
            ],
            totalCount: 3,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxODM1MDQ3Njg=",
          name: "react-native",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxOTYyOTE1MDE=",
          name: "phabricator-to-github",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMDk0MTY1MzA=",
          name: "jquery",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMjcxNDA4NzI=",
          name: "game",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyNzQyMTg3Nzk=",
          name: "actions-ml-cicd",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzMjAzNTU4MDg=",
          name: "platform-samples",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzMjAzNTY0MzQ=",
          name: "inactive-outside-collaborators-action",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDk4ODI5MjM=",
          name: "emacsd",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNTA4NzMxNDg=",
          name: "http-client",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNjI4NjY2NjA=",
          name: "javascript-action",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjM2NTUwNDc=",
    email: "talleslasmar@gmail.com",
    name: "Talles L",
    login: "tallesl",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnk5OTkyMjM2OQ==",
          name: "demonizer",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5OTk0Mjc2OA==",
          name: "Universal-LPC-Spritesheet-Character-Generator",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5OTk1MTA0NA==",
          name: "Universal-LPC-spritesheet",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNDYxNDEyMDQ=",
          name: "NCrontab",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNTUzNjg0NzU=",
          name: "XMPPEngineer",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNTgwOTA4NzQ=",
          name: "net-quick-dirty-xmpp",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNTkwMjg3NzQ=",
          name: "net-Sundae",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMDUwNjQwMzM=",
          name: "py-pic2tweet",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMDcxNzk4Nzk=",
          name: "py-floaty",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMDczOTQzOTY=",
          name: "py-unix-time",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMjc2MDQyNTI=",
          name: "client-data",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyNDA1MDQwMDc=",
          name: "py-dynamo-size",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyNzkxNTM2MTc=",
          name: "tallesl",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyODEwMDE4MzU=",
          name: "net-CustomAnalyzer",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOH9Ee5w",
          name: "py-daemon-sample",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjM5MzA3NzA=",
    email: "andersomxp@gmail.com",
    name: "Anderson Menezes",
    login: "andersoonweb",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnk0NjE3NjQyOQ==",
          name: "free-time.github.io",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk0ODg2NTg2Ng==",
          name: "thejekyllway.github.io",
          issues: {
            nodes: [
              {
                bodyText: "",
                id: "MDU6SXNzdWUxMzM4NjIyNjY=",
                state: "OPEN",
                title:
                  "Post -  Como minificar HTML no Jekyll sem pré processador.",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "",
                id: "MDU6SXNzdWUxMzM4NjMwNDI=",
                state: "OPEN",
                title: "Post - Máximo de caracteres com Jekyll",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "Referência de artigo.",
                id: "MDU6SXNzdWUxNDA1NjEyMDc=",
                state: "OPEN",
                title: "Post - Como utilizar sass no Jekyll",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "Referências:\nAndyc\nStack overflow\nHow setting timezone\nForcing a single timezone",
                id: "MDU6SXNzdWUyODUwODA1MjY=",
                state: "OPEN",
                title: "Post - Como agendar post ",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 4,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk0OTMzMzg4NQ==",
          name: "the-jekyll-way",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk0OTM5OTYyNQ==",
          name: "curriculo",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk1MTE3OTk5Mg==",
          name: "fireshell",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk1MTQ4NDI3Mg==",
          name: "linkedin",
          issues: {
            nodes: [
              {
                bodyText: "",
                id: "MDU6SXNzdWUxMzU0Mjc2ODQ=",
                state: "CLOSED",
                title: "Adding tab",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "",
                id: "MDU6SXNzdWUxMzc1NTUzNDY=",
                state: "OPEN",
                title: "Rewrite using BEM",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 2,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk1Mjg3NDYwMg==",
          name: "will-jekyll-template",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk1NTg1NTM4Mw==",
          name: "qualy-jekyll",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk2MjA3ODUxOA==",
          name: "youtube",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk2Mjg5Njg5MQ==",
          name: "ideias",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxMDQ2OTY5ODI=",
          name: "Training",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxMTAzODk2NzU=",
          name: "nathpaiva.github.io",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxMTU1Mzc5OTQ=",
          name: "channels",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzMzg5MTA4ODc=",
          name: "my-notes",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNjM3NDU5OTE=",
          name: "WSL2",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjE3NjAwOTgy",
    email: "",
    name: "Mariana Meireles",
    login: "marimeireles",
    repositories: {
      nodes: [
        {
          id: "R_kgDOHi8Z2w",
          name: "pyscript-collective",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHkJLEg",
          name: "lectures",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHkK1-w",
          name: "pyob2019",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHqO9nA",
          name: "NotesOnCython",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHqUJ2A",
          name: "pprofile",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHrJ8zw",
          name: "python-textbok",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHrKeHA",
          name: "2021-composition-vs-inheritance",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOH5BZIA",
          name: "marimeireles.github.io",
          issues: {
            nodes: [
              {
                bodyText: "",
                id: "I_kwDOH5BZIM5Qpjjd",
                state: "OPEN",
                title: "test",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText: "",
                      author: {
                        login: "marimeireles",
                      },
                      id: "IC_kwDOH5BZIM5JREcc",
                    },
                    {
                      bodyText:
                        "big\nmedium\nsmall\nbold bold\nitalic __italic**",
                      author: {
                        login: "marimeireles",
                      },
                      id: "IC_kwDOH5BZIM5JREfJ",
                    },
                  ],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "R_kgDOIKC2Gw",
          name: "MicroPyScript",
          issues: {
            nodes: [
              {
                bodyText:
                  "Hi,\nI'm BM, a very nice and polite guy.\nVery cool. How do I get it to start with my own functions preloaded? All embeddable in one HTML page without any server side configurations.",
                id: "I_kwDOIKC2G85dqi8J",
                state: "OPEN",
                title: "Embedding",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "R_kgDOIVXSRw",
          name: "activitywatch",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIiaeNQ",
          name: "postmeritocracy",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOImUYnQ",
          name: "td-exp",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIuUFUA",
          name: "elektrasdream",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOI1iw2A",
          name: "docs",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOI2qOfw",
          name: "fluent-python-notebooks",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjEzMzI2NTQ4",
    email: "",
    name: "Eric Hollenberry",
    login: "hollenberry",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnkxNjU5MzQ1MzA=",
          name: "hello-world-actions",
          issues: {
            nodes: [
              {
                bodyText:
                  'Welcome! This course is a companion to the Developer Guide Creating a new workflow. We\'ll provide some context in issues and pull requests, but head on over to the docs for the full instructions.\nThis example manually creates a workflow and an action, rather than using the visual editor. The workflow in this example uses the action created in the "Hello world action example" to write values to standard output (stdout).\nThe action writes any values passed in the args action attribute to stdout.\nHere\'s an overview of the file hierarchy you\'ll use:\n|-- hello-world-actions (repository)\n|   |__ .github\n|       |__ main.workflow\n|   |__ action-a\n|       │__  Dockerfile\n|       |__  entrypoint.sh  \n|\n\nActivity: Create a Dockerfile\n\nCreate a branch.\nIn your new branch, create a directory: action-a\nIn your new directory, create a file titled Dockerfile.\nFill the Dockerfile with the content below:\nFROM debian:9.5-slim\n\nLABEL "com.github.actions.name"="Hello World"\nLABEL "com.github.actions.description"="Write arguments to the standard output"\nLABEL "com.github.actions.icon"="mic"\nLABEL "com.github.actions.color"="purple"\n\nLABEL "repository"="http://github.com/octocat/hello-world"\nLABEL "homepage"="http://github.com/actions"\nLABEL "maintainer"="Octocat <octocat@github.com>"\n\nADD entrypoint.sh /entrypoint.sh\nENTRYPOINT ["/entrypoint.sh"]\n\nStage and commit your file.\nPush the file up to GitHub.\nOpen a pull request with your new branch against master.\n\nI\'ll respond in your new pull request when you open it.',
                id: "MDU6SXNzdWUzOTk1NjczMDU=",
                state: "CLOSED",
                title: "Welcome",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "You merged! Your workflow should now be triggered. We'll let you do this one on your own. Keep an eye on your Actions tab.",
                id: "MDU6SXNzdWUzOTk1NzEyMzc=",
                state: "OPEN",
                title: "Congratulations",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 2,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNjYzMDQwMzk=",
          name: "nodejs-docs-hello-world",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNjYzMTAxNzg=",
          name: "simple-nodejs-weather-app",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNzI5OTQ4NDA=",
          name: "infrastructure-as-code-example",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNzgwODMwMjk=",
          name: "prerequisites",
          issues: {
            nodes: [
              {
                bodyText:
                  "Welcome! We can't wait to learn together.\nIn the meantime, we've created this course to help you get all the prerequisites you need to ensure you start class on the right foot.\nEven if you're using GitHub Enterprise Server at your organization, most of our class will take place on GitHub.com, so we'll go through a few steps to ensure you're able to work on GitHub.com before class starts.",
                id: "MDU6SXNzdWU0MjYyMDg3OTk=",
                state: "CLOSED",
                title: "Supported browser",
                comments: {
                  totalCount: 3,
                  nodes: [
                    {
                      bodyText:
                        "The first thing we'll do is check your browser. GitHub supports the current versions of all major, modern browsers.\n⌨️ Activity: Use a supported browser\n\nDetermine your browser and version. If you need some help, try this site.\nConfirm that it is one of the officially supported browsers.\n\nUsing Internet Explorer (IE), or an older version of a supported browser?\nWe strongly recommend using one of the supported browsers. If you're using IE, or an older version of a supported browser, it's likely you'll see erratic behavior on the GitHub user interface (UI).\nIf your machine is managed by your organization and you are unable to install one of the supported browsers yourself, check with your support team about installing it before you begin class.\nDo you have one of the supported browsers? If so, type \"done\". If you'd like to continue with the course despite not having the right browser, type \"bypass\".\n\nI'll respond when I detect a comment on this issue.",
                      author: null,
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM2OTE3MA==",
                    },
                    {
                      bodyText: "Done",
                      author: {
                        login: "hollenberry",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM2OTQwOQ==",
                    },
                    {
                      bodyText: "Go to the next issue.",
                      author: null,
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM2OTQxNg==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "In class, you'll use your shell. The shell refers to the interactive interface used within your operating system. It is in this shell that you can execute commands and it will understand and perform those actions. Let's locate it.\n⌨️ Activity: Locate your shell\nUse one of the following:\n\nIn macOS, Unix, Linux, or similar operating systems, use the native Terminal application.\nFor Windows, we recommend using Git Bash. Search your programs for Git Bash. If you don't already have it, not to worry, you'll download it in the next step. For now, feel free to use Powershell or Command Prompt.\n\nWhen you're done, type \"done\" as a comment in this issue. If you'd like bypass this step, type \"bypass\".\n\nI'll respond when I detect a comment on this issue.",
                id: "MDU6SXNzdWU0MjYyMDkwNjQ=",
                state: "CLOSED",
                title: "Locate your shell",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText: "Done",
                      author: {
                        login: "hollenberry",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM2OTY1Mw==",
                    },
                    {
                      bodyText: "Go to the next issue.",
                      author: null,
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM2OTY1OQ==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "You'll need Git installed on your machine in order to participate in class.\n⌨️ Activity: Check your version and install Git\n\nOpen the shell you identified in the previous issue.\nIn your shell, type the following command:\ngit --version\n\n\nPaste your shell's response in a comment below.\n\n\nI'll respond when I detect a comment on this issue.",
                id: "MDU6SXNzdWU0MjYyMDkzMDM=",
                state: "CLOSED",
                title: "Install Git",
                comments: {
                  totalCount: 4,
                  nodes: [
                    {
                      bodyText: "2.17",
                      author: {
                        login: "hollenberry",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM2OTczNA==",
                    },
                    {
                      bodyText:
                        "I wasn't able to detect an acceptable version of Git from your response.\nHowever, any version of Git above 2.0 will work during class.\n⌨️ Activity: Install Git\n\nTo install Git, either:\n\ndownload directly from git-scm.com,\ndownload from an approved software directory in your organization, or\nask your organization's support team\n\n\nWhen you've finished installing Git, verify its version by typing the following into your shell.\ngit --version\n\nPaste the response from the command as a comment in this issue.\n\nIf you'd like to bypass this step but continue with the prerequisites, type \"bypass\".\n\nI'll respond when I detect a comment on this issue.",
                      author: null,
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM2OTczNg==",
                    },
                    {
                      bodyText: "2.17.1",
                      author: {
                        login: "hollenberry",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM2OTg5NQ==",
                    },
                    {
                      bodyText:
                        "Great! Your response indicates that you've got a valid version of Git. Any version above 2.0 works.\n\nGo to the next issue.",
                      author: null,
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM2OTkwMQ==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "Let's try cloning this repository.\n⌨️ Activity: Try a clone\n\nOpen your shell.\nType the clone command:\ngit clone https://github.com/hollenberry/prerequisites.git\n\nNavigate into the repository's directory:\ncd prerequisites\n\n\nYour shell may ask you to authenticate with you  username and password. This is your GitHub username and password. Enter it when the prompt appears. The credentials will be encrypted and stored in your machine's credential helper.\nPaste in the response in the comments.\n\nI'll respond when I detect a comment on this issue.",
                id: "MDU6SXNzdWU0MjYyMDk1ODQ=",
                state: "CLOSED",
                title: "Try a clone",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "warning: You appear to have cloned an empty repository.",
                      author: {
                        login: "hollenberry",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM3MDMxMg==",
                    },
                    {
                      bodyText:
                        "Great! The response you provided indicates that you were able to clone successfully.\n\nGo to the next issue to continue.",
                      author: null,
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM3MDMyMg==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "A push is required to make changes to a remote Git repository. Attempting a push will ensure that you don't have any trouble doing this in class.\n⌨️ Activity: Try a push\n\nOpen your shell.\nNavigate into the repository's directory:\ncd prerequisites\n\nCreate an empty commit:\ngit commit --allow-empty -m \"my empty commit\"\n\nPush the commit.\ngit push\n\nEnter the result of your push command in a comment.\n\nYour shell may ask you to authenticate with you  username and password. This is your GitHub username and password. Enter it when the prompt appears. The credentials will be encrypted and stored in your machine's credential helper.\n\nI'll respond when I detect a comment on this issue.",
                id: "MDU6SXNzdWU0MjYyMTAwODY=",
                state: "CLOSED",
                title: "Try a push",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "Counting objects: 2, done.\nWriting objects: 100% (2/2), 171 bytes | 171.00 KiB/s, done.\nTotal 2 (delta 0), reused 0 (delta 0)\nTo https://github.com/hollenberry/prerequisites.git\n\n[new branch]      master -> master",
                      author: {
                        login: "hollenberry",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM3MDk3Nw==",
                    },
                    {
                      bodyText:
                        "Great! Your response indicates that your push was successful.\n\nGo to the next issue.",
                      author: null,
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM3MDk4NA==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "Git will work with any text editor. We recommend one of the following:\n\nAtom\nVisual Studio Code\nNotepad\nVi or Vim\nSublime\nNotepad++\nGitPad\n\nAdditionally, we can help you get started with some of these. Expand the text editor if you'd like additional instructions.\n\n    Atom\n\n\nDownload Atom at https://atom.io. It may also already be installed on your machine, or downloadable through your organization's software directory as a pre-approved application.\n\n\nRead the docs on Git support and on GitHub Support already built into Atom.\n\n\nThere will be times when Git will ask you for input, to configure Atom as your editor at those times, type:\ngit config --global core.editor \"atom --wait\"\nSee the docs on Atom as a Commit editor for more information.\n\n\n\n\n    Visual Studio Code\n\n\nDownload Visual Studio Code at https://code.visualstudio.com. It may also already be installed on your machine, or downloadable through your organization's software directory as a pre-approved application.\n\n\nRead the docs on Git support already built into VS Code.\n\n\nThere will be times when Git will ask you for input, to configure VS Code as your editor at those times, type:\ngit config --global core.editor \"code --wait\"\nSee the docs on VS Code as Git editor for more information.\n\n\nIf you'd like to view Pull Requests within VS Code, install the official GitHub Pull Requests extension.\n\n\n\nWhen you're done, just type \"done\" in an issue comment.\n\nI'll respond when I detect a comment on this issue.",
                id: "MDU6SXNzdWU0MjYyMTA3NTk=",
                state: "CLOSED",
                title: "Pick a text editor",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText: "Done",
                      author: {
                        login: "hollenberry",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM3MTA5OA==",
                    },
                    {
                      bodyText: "Go to the next issue.",
                      author: null,
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM3MTExMg==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "🎉 You're done!\nWe look forward to seeing you in class. If you'd like to get a head start on class, you can review the Training Manual. If you have any questions in the meantime, you can reach your facilitator at services@github.com.",
                id: "MDU6SXNzdWU0MjYyMTA4ODk=",
                state: "OPEN",
                title: "Congratulations",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 7,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxNzgwODQ1NTM=",
          name: "caption-this-lab",
          issues: {
            nodes: [
              {
                bodyText: "Welcome!\nPlease leave a comment here.",
                id: "MDU6SXNzdWU0MjYyMTI4MTI=",
                state: "OPEN",
                title: "Welcome",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText: "Comment",
                      author: {
                        login: "hollenberry",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDQ3NzM3Mzc4NA==",
                    },
                  ],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMDEwODQ4MTI=",
          name: "conflict-practice-rwnfoo",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMDk3MzI3NDU=",
          name: "checks-api",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMTcyMDE5Mzg=",
          name: "create-react-app",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyMzM3MDkzNTg=",
          name: "hugo-theme-learn",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyNDM1OTg0NjU=",
          name: "markdown-portfolio",
          issues: {
            nodes: [
              {
                bodyText:
                  "Welcome to your repository!\nIn this repository 📖, you’ll learn how to write with Markdown 📖, a simple and widely used markup language for formatting text. Here, you’ll start building a static webpage for your customized portfolio.\nWhat is Markdown?\nMarkdown is a lightweight syntax for communicating on GitHub, and many other websites. You can format words as bold or italic, add images, and create lists. Markdown is regular text combined with a few non-alphabetic symbols, such as # or *. You can use Markdown with the formatting toolbar in issues 📖 and pull requests 📖, or you can type the syntax.\nYou can use Markdown most places around GitHub:\n\nComments in issues and pull requests (like this one!)\nFiles with the .md or .markdown extension\nSharing snippets of text in Gists\n\nFor more information, see “Writing on GitHub” in the GitHub Help.\nLet's get started!",
                id: "MDU6SXNzdWU1NzIzMDE2Njk=",
                state: "OPEN",
                title: "Getting Started with GitHub",
                comments: {
                  totalCount: 3,
                  nodes: [
                    {
                      bodyText:
                        "Step 1: Create a Task List\nA task list creates checkboxes for people with access 📖in a repository to check off. They're very useful for tracking issues and pull requests.\nIf you include a task list in the body of an issue or pull request, you'll see a progress indicator in your issue list.\nWatch out! The syntax for task lists is very specific. Be sure to include the spaces where required, or else they won't render.\nExample markup\n- [x] Additional markup is supported, including @mentions, #references, [links](url), **emphasis**, and <del>HTML tags</del>.\n- [x] List syntax is required.\n  - You can nest lists below, too!\n- [x] This item is completed.\n- [ ] This item is not complete.\n\nRendered\n\n Additional markup is supported, including @mentions, #references, links, emphasis, and HTML tags.\n List syntax is required.\n\nYou can nest lists below, too!\n\n\n This item is complete.\n This item is not complete.\n\n⌨️ Activity: Add a comment\n\n\nAdd a comment to this issue, using Markdown to create a list of items to complete. Your task can include any tasks you wish, or you can use this example:\n- [ ] Turn on GitHub Pages\n- [ ] Outline my portfolio\n- [ ] Introduce myself to the world\n\n\n\nUse the Preview tab to check your markdown formatting.\n\n\nClick Comment.\n\n\nFor a printable version of the steps in this course, check out the Quick Reference Guide.\n\nWatch below your comment for my response.\n\nIf you perform an expected action and don't see a response from me after a few seconds, refresh the page for your next steps.",
                      author: {
                        login: "github-learning-lab",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDU5MjEzMzUwOA==",
                    },
                    {
                      bodyText:
                        "Turn on GitHub Pages\n Outline my portfolio\n Introduce myself to the world",
                      author: {
                        login: "hollenberry",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDU5MjEzMzY2OA==",
                    },
                    {
                      bodyText:
                        "Step 2: Turn on GitHub Pages\nNicely done @hollenberry!\nNow let's turn our focus to the content of your portfolio. Because this portfolio will display as a static web page, you'll need to enable GitHub Pages.\n⌨️ Activity: Enable GitHub Pages\n\nUnder your repository name, click Settings.\nIn the GitHub Pages section, use the Select source drop-down menu to select master as your GitHub Pages publishing source.\n\n\nI may take up to a minute to respond as I wait for GitHub Pages to create a deployment of your repository.\n\n\nFor more information, see Configuring a publishing source for GitHub Pages in the GitHub Help.\n\n\nReturn to this issue for next steps.",
                      author: {
                        login: "github-learning-lab",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDU5MjEzMzY3NQ==",
                    },
                  ],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDM4ODY2MDU=",
          name: "hello-github-actions",
          issues: {
            nodes: [
              {
                bodyText:
                  "Welcome\nThis course helps you create a simple GitHub Action and use that action in a workflow.\nWhat are GitHub Actions?\nGitHub Actions are a flexible way to automate nearly every aspect of your team's software workflow. Here are just a few of the ways teams are using GitHub Actions:\n\nAutomated testing (CI)\nContinuous delivery and deployment\nResponding to workflow triggers using issues, @ mentions, labels, and more\nTriggering code reviews\nManaging branches\nTriaging issues and pull requests\n\nThe sky is truly the limit with GitHub Actions.\nThe best part, these workflows are stored as code in your repository and easily shared and reused across teams.\nTo learn even more, check out the GitHub Actions feature page, or the GitHub Actions documentation.\nBefore you begin\nIn this course you will work with issues and pull requests, as well as edit files. If these things are not familiar to you, we recommend you take the Introduction to GitHub course, first!",
                id: "MDU6SXNzdWU4MjAzMTE0MDE=",
                state: "CLOSED",
                title: "Welcome",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText:
                        "Actions and Workflows\nThere are two components to using GitHub Actions that we'll cover:\n\nthe action itself\na workflow that uses action(s)\n\nA workflow can contain many actions. Each action has its own purpose. We'll put the files relating to the action in their own directories.\nTypes of Actions\nActions come in two types: container actions and JavaScript actions.\nDocker container actions allow the environment to be packaged with the GitHub Actions code and can only execute in the GitHub-Hosted Linux environment.\nJavaScript actions decouple the GitHub Actions code from the environment allowing faster execution but accepting greater dependency management responsibility.\n\nStep 1: Add a Dockerfile\nOur action will use a Docker container so it will require a Dockerfile. Let's add it now. We won't discuss what each line means in detail, but the important thing to know is that the action will be executed in an environment defined by this file.\n⌨️ Activity: Create a Dockerfile and open a pull request\n\n\nCreate a file titled action-a/Dockerfile by using this quick link or manually:\n\nCreate a new branch. Branches should be named intentionally, so a good name for this branch could be first-action.\nOn the new branch, create a directory: action-a. Note: If you're working on GitHub.com, you can create a directory and a file at the same time by naming the file action-a/Dockerfile.\nIn the action-a directory, create a file titled Dockerfile.\n\n\n\nFill the Dockerfile with the content below:\nFROM debian:9.5-slim\n\nADD entrypoint.sh /entrypoint.sh\nRUN chmod +x /entrypoint.sh\nENTRYPOINT [\"/entrypoint.sh\"]\n\n\nCommit your file\n\nIf you're working locally, you will also need stage your file and to push the branch to GitHub.\n\n\n\nOpen a pull request with your new branch against main\n\n\n\nI'll respond in your new pull request with next steps.",
                      author: {
                        login: "github-learning-lab",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDc4OTE1MTMwMA==",
                    },
                  ],
                },
              },
              {
                bodyText:
                  "Nice work!\n\nYou've created your first GitHub Action and this course is now complete! I'll stop responding but the fun doesn't have to stop here.\nWant to keep learning?\n\nIn this repository:\n\nYour merge should trigger your action again, check it out in the Actions tab.\nThe Dockerfile contains metadata for your action. Try changing some of that. You could, for example, change the icon that displays when the action is running.\nChange the MY_NAME environment variable to use your name instead of Mona's in .github/workflows/main.yml.\nChange the contents of entrypoint.sh to output a different message.\n\nOutside of this repository:\n\nReview the GitHub Actions documentation on the GitHub Developer site.\nUse existing actions from the GitHub Marketplace.\nUse existing actions from GitHub's official actions community.\nUse actions created by others in awesome-actions.\n\nNow...what will you learn next?",
                id: "MDU6SXNzdWU4MjA0Nzk0NzA=",
                state: "OPEN",
                title: "Congratulations",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 2,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDQ1NzAxMTc=",
          name: "writing-javascript-actions",
          issues: {
            nodes: [
              {
                bodyText:
                  "Configuring a workflow\nActions are enabled on your repository by default, but we still have to tell our repository to use them. We do this by creating a workflow file in our repository.\nA workflow file can be thought of as the recipe for automating a task. They house the start to finish instructions, in the form of jobs and steps, for what should happen based on specific triggers.\nYour repository can contain multiple workflow files that carry out a wide variety of tasks. It is important to consider this when deciding on a name for your workflow. The name you choose should reflect the tasks being performed.\nIn our case, we will use this one workflow file for many things, which leads us to break this convention for teaching purposes.\n📖Read more about workflows\n⌨️ Activity: Create a pull request to prepare the repository for actions\n\nCreate a new workflow file titled my-workflow.yml inside of the folders .github/workflows/ by using the instructions below, or this quicklink.\n\nGo to the Actions tab.\nChoose the Set up a workflow yourself option, located on the top right hand corner of the screen.\nChange the name of the file to .github/workflows/my-workflow.yml.\n\n\nCommit the workflow to a new branch, you can name it add-initial-workflow.\nCreate a pull request titled Create a workflow.\nSupply the pull request body content and click Create pull request.\n\nIt is important to place meaningful content into the body of the pull requests you create throughout this course. This repository will stay with you long after you complete the course. It is advisable that you use the body of the pull requests you create as a way to take long lived notes about thing you want to remember.\nSuggested body content\nWorkflow files are the recipe for task automation. This is where actions are placed if I want to use them for a task.\n\nI'll respond in the new pull request when I detect it has been created.\n\nIf at any point you're expecting a response and don't see one, refresh the page.",
                id: "MDU6SXNzdWU4MjIzODY0ODg=",
                state: "CLOSED",
                title: "Start here!",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText:
                  "On to your development environment\n@hollenberry our JavaScript actions are going to leverage the GitHub ToolKit for developing GitHub Actions.\nThis is an external library that we will install using npm which means that you will need Node.js installed.\nI find writing actions to be easier from a local environment vs trying to do everything right here in the repository. Doing these steps locally allows you to use the editor of your choice so that you have all the extensions and snippets you are used to when writing code.\nIf you do not have a preferred environment then I suggest following along with me exactly as you see on the screen, which means you'll need to install Visual Studio Code.\nDon't forget to set up your workstation 😉\nMost of your work going forward will take place away from your Learning Lab repository, so before continuing with the course ensure you have the following installed on your local machine.\n\n Node.js\n Visual Studio Code or your editor of choice\n Git\n\n⌨️ Activity: Initialize a new JavaScript project\nOnce you have the necessary tools installed locally, follow these steps to begin creating your first action.\n\n\nOpen the Terminal (Mac and Linux) or Command Prompt (Windows) on your local machine\n\n\nClone your Learning Lab repo to your local machine:\ngit clone https://github.com/hollenberry/writing-javascript-actions.git\n\n\nNavigate to the folder you just cloned:\ncd writing-javascript-actions\n\n\nCreate a new branch named hello-world. This is the branch we will use to write our first action. Please do not capitalize letters unless I do, I run case-sensitive checks to make sure I can help you along the way!\ngit checkout -b hello-world\n\n\nCreate a new folder for our actions files:\nmkdir -p .github/actions/hello-world\n\n\nNavigate to the hello-world folder you just created:\ncd .github/actions/hello-world\n\n\nInitialize a new project:\nnpm init -y\n\n\nInstall the core dependency from the GitHub ToolKit:\nnpm install --save @actions/core\n\n\nCommit those newly added files,we will remove the need to upload node_modules in a later step:\ngit add .\ngit commit -m 'add project dependencies'\n\n\nPush your changes to your repository:\ngit push -u origin hello-world\n\n\n\nI will respond once you have finished.",
                id: "MDU6SXNzdWU4MjIzOTU5NDQ=",
                state: "CLOSED",
                title: "Your first JavaScript action",
                comments: {
                  totalCount: 1,
                  nodes: [
                    {
                      bodyText:
                        "Great job 👍\nI have created a new pull request where we will continue this lesson.  Click the link to meet me over there.\nIn the meantime I have closed this issue since we wont be needing it anymore 😄",
                      author: {
                        login: "github-learning-lab",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDc5MDgzOTg2Nw==",
                    },
                  ],
                },
              },
            ],
            totalCount: 2,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNDQ2MDA1NzU=",
          name: "lab-scheduled-events",
          issues: {
            nodes: [
              {
                bodyText: "",
                id: "MDU6SXNzdWU4MjI1MjQ0NTY=",
                state: "OPEN",
                title: "Oh no!",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNjYxOTg2MTQ=",
          name: "github-slideshow",
          issues: {
            nodes: [
              {
                bodyText:
                  "👋 Welcome to GitHub Learning Lab's \"Introduction to GitHub\"\nTo get started, I’ll guide you through some important first steps in coding and collaborating on GitHub.\n👇 This arrow means you can expand the window! Click on them throughout the course to find more information.\nWhat is GitHub?\n\nWhat is GitHub?\nI'm glad you asked! Many people come to GitHub because they want to contribute to open source 📖 projects, or they're invited by teammates or classmates who use it for their projects. Why do people use GitHub for these projects?\nAt its heart, GitHub is a collaboration platform.\nFrom software to legal documents, you can count on GitHub to help you do your best work with the collaboration and security tools your team needs. With GitHub, you can keep projects completely private, invite the world to collaborate, and streamline every step of your project.\nGitHub is also a powerful version control tool.\nGitHub uses Git 📖, the most popular open source version control software, to track every contribution and contributor 📖 to your project--so you know exactly where every line of code came from.\nGitHub helps people do much more.\nGitHub is used to build some of the most advanced technologies in the world. Whether you're visualizing data or building a new game, there's a whole community and set of tools on GitHub that can get you to the next step. This course starts with the basics, but we'll dig into the rest later!\n📺 Video: What is GitHub?\n\n\nExploring a GitHub repository\n\nExploring a GitHub repository\n📺 Video: Exploring a repository\nMore features\nThe video covered some of the most commonly-used features. Here are a few other items you can find in GitHub repositories:\n\nProject boards: Create Kanban-style task tracking board within GitHub\nWiki: Create and store relevant project documentation\nInsights: View a drop-down menu that contains links to analytics tools for your repository including:\n\nPulse: Find information about the work that has been completed and the work that’s in-progress in this project dashboard\nGraphs: Graphs provide a more granular view of the repository activity including who contributed to the repository, who forked it, and when they completed the work\n\n\n\nSpecial Files\nIn the video you learned about a special file called the README.md. Here are a few other special files you can add to your repositories:\n\nCONTRIBUTING.md: The CONTRIBUTING.md is used to describe the process for contributing to the repository. A link to the CONTRIBUTING.md file is shown anytime someone creates a new issue or pull request.\nISSUE_TEMPLATE.md: The ISSUE_TEMPLATE.md is another file you can use to pre-populate the body of an issue. For example, if you always need the same types of information for bug reports, include it in the issue template, and every new issue will be opened with your recommended starter text.\n\n\n\nUsing issues\nThis is an issue 📖: a place where you can have conversations about bugs in your code, code review, and just about anything else.\nIssue titles are like email subject lines. They tell your collaborators what the issue is about at a glance. For example, the title of this issue is Getting Started with GitHub.\nUsing GitHub Issues\nUsing GitHub issues\nIssues are used to discuss ideas, enhancements, tasks, and bugs. They make collaboration easier by:\n\nProviding everyone (even future team members) with the complete story in one place\nAllowing you to cross-link to other issues and pull requests 📖\nCreating a single, comprehensive record of how and why you made certain decisions\nAllowing you to easily pull the right people and teams into a conversation with @-mentions\n\n📺 Video: Using issues\n\n\nManaging notifications\n\nManaging notifications\n📺 Video: Watching, notifications, stars, and explore\nOnce you've commented on an issue or pull request, you'll start receiving email notifications when there's activity in the thread.\nHow to silence or unmute specific conversations\n\nGo to the issue or pull request\nUnder \"Notifications\", click the Unsubscribe button on the right to silence notifications or Subscribe to unmute them\n\nYou'll see a short description that explains your current notification status.\nHow to customize notifications in Settings\n\nClick your profile icon\nClick Settings\nClick Notifications from the menu on the left and adjust your notification preferences\n\nRepository notification options\n\nWatch: You'll receive a notification when a new issue, pull request or comment is posted, and when an issue is closed or a pull request is merged\nNot watching: You'll no longer receive notifications unless you're @-mentioned\nIgnore: You'll no longer receive any notifications from the repository\n\nHow to review notifications for the repositories you're watching\n\nClick your profile icon\nClick Settings\nClick Notification from the menu on the left\nClick on the things you’re watching link\nSelect the Watching tab\nClick the Unwatch button to disable notifications, or Watch to enable them\n\n\n\n\nKeep reading below to find your first task",
                id: "MDU6SXNzdWU4ODUzMjQ2ODk=",
                state: "OPEN",
                title: "Getting Started with GitHub",
                comments: {
                  totalCount: 2,
                  nodes: [
                    {
                      bodyText:
                        "Step 1: Assign yourself\nUnassigned issues don't have owners to look after them. When you’re assigned to an issue or pull request, it tells repository visitors and contributors that you'll be facilitating the conversation or task 💪.\n⌨️ Activity\n\nOn the right side of the screen, under the \"Assignees\" section, click the gear icon and select yourself\n\nFor a printable version of the steps in this course, check out the Quick Reference Guide.\n\nI'll respond when I detect you've assigned yourself to this issue.\n\nSometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds and refresh the page for your next steps.",
                      author: {
                        login: "github-learning-lab",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgzNzQ3NjQxOA==",
                    },
                    {
                      bodyText:
                        "Step 2: Turn on GitHub Pages\n🎉 You're now the proud manager of this issue! Now that you've assigned yourself, people who drop by know that they're welcome to participate, but you'll be carrying this issue across the finish line. 😎.\nLet's use GitHub Pages\nNow, on to business! GitHub Pages allow you to serve a static site from a repository. We've filled this repository with some site content, but the rendered site isn't visible right now. Let's change that.\n⌨️ Activity: Enable GitHub Pages\n\nClick on the Settings tab in this repository\nScroll down to the \"GitHub Pages\" section\nFrom the \"Source\" drop down, select main branch\n\n\nNote: Even though you'll see an option to choose a theme, do not apply a theme at this point. We've protected the code so you can't make unintended changes. You'll have the opportunity to apply a theme when the course is completed.\n\n\nI'll respond in this issue when I detect GitHub Pages has deployed your site.\n\nTurning on GitHub Pages creates a deployment of your repository. I may take up to a minute to respond as I await the deployment.",
                      author: {
                        login: "github-learning-lab",
                      },
                      id: "MDEyOklzc3VlQ29tbWVudDgzNzQ4MDA2MA==",
                    },
                  ],
                },
              },
            ],
            totalCount: 1,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjI1OTUzMTE=",
    email: "rmathew1992@github.com",
    name: null,
    login: "rmathew1992",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnkyNDU2NjUzOQ==",
          name: "bootswatch",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyNzQ2MjEyOA==",
          name: "42-Prototype-v2",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyODUyNDkzMQ==",
          name: "papabear",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNzE1MTIyNQ==",
          name: "spotify-apprentice-project-server",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzODYzNjY2OQ==",
          name: "validates_overlap",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk1NTI1MTg4OQ==",
          name: "peg-solitaire-solver",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk2MDcyNTMzNQ==",
          name: "heroku-follower-testing",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk2MjQxNTk2MQ==",
          name: "rest-firebase",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk5MTgwMjgxNg==",
          name: "ruby-library",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxMDkxNjUxODk=",
          name: "dotfiles",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxMTcyNzUwODU=",
          name: "data-viz",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxMjE3NjY5NTE=",
          name: "ma_hacks_workshop",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkxODQ3NzY5NjU=",
          name: "sgit",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyNDAxNTA5NjI=",
          name: "merge-conflicts",
          issues: {
            nodes: [
              {
                bodyText:
                  "Nice work\n\nCongratulations @rmathew1992, you've completed this course!\nWhat went well\nBefore I say good-bye, here's a recap of all the tasks you've accomplished in your repository:\n\nYou learned why merge conflicts happen\nYou resolved a simple merge conflict\nYou resolved a multi-file merge conflict\nYou created a merge conflict, and resolved it!\n\nWhat's next?\nHere are some instructions you can use to keep working on your resumé:\n\n Finishing the resume\n \nFinishing the resume\nTo update the other sections of the resume, create a new branch and edit the files found in the _data folder.\nFor example, to modify the \"Projects\" section, edit the _data/projects.yml file. After making your changes, create a new pull request and merge your changes.\n \n\n\n Changing the picture\n \nChanging the picture\nIf you would like to change the image used on your resume, you need to make a few changes to the files.\n\nCreate a new branch, maybe name it something like new-avatar.\nNavigate to the images directory and click the Upload files button.\nDrag and drop your image.\nCommit your change by clicking Commit changes.\nOn the new-avatar branch, open the _layouts/resume.html file and edit line 16. Replace images/bob-avatar.jpg with images/YOURFILENAME.\nCreate a pull request.\nMerge the pull request, and delete the branch.\n\n \n\n\n Enabling GitHub Pages\n \nEnabling GitHub Pages\nWhen you are happy with your resume, you will need to publish it with GitHub Pages. This resume is ready for GitHub Pages, you just need to turn it on. Follow these steps to enable GitHub Pages when you are ready to publish your resume:\n\nClick on the Settings tab.\nScroll to the \"GitHub Pages\" section.\nIn the \"Source\" drop-down, select master branch.\nClick Save.\n🚧 Warning! 🚧 Make sure you don't see any errors after you select save. If you do, your page won't build correctly and this step will be incomplete.\n\nYour GitHub Pages resumé site will be live very shortly at the proper URL.\n \n\nKeep Learning\nWant to work on resolving merge conflicts using the command line? Check out this documentation.\nWant to keep learning? Feel free to check out our other courses?\n\nI won't respond to this issue, go ahead and close it when finished!",
                id: "MDU6SXNzdWU1NjQzODUwNDE=",
                state: "CLOSED",
                title: "Next steps",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
              {
                bodyText: "",
                id: "I_kwDODlBpss5OsHkZ",
                state: "OPEN",
                title: "test",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 2,
          },
        },
        {
          id: "R_kgDOH506WA",
          name: "package_test",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjE2MTA5MTU0",
    email: "",
    name: "Konrad Pabjan",
    login: "konradpabjan",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnkzNTM3NjQ0NTU=",
          name: "test-actions",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkzNTQwOTk2NDE=",
          name: "test-public-repo-1",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnk0MDI1NzkxMDE=",
          name: "testing5",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOGQx8-w",
          name: "Testing6",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOGSJjcQ",
          name: "github-token-app",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOGdFCAg",
          name: "upload-artifact",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOGffbXQ",
          name: "download-artifact",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOGn-E8Q",
          name: "spinning-test",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOG7aoew",
          name: "primitives",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOG-V7Dw",
          name: "composite-action-test",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOG-wOBA",
          name: "runner",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHBMJMg",
          name: "tmp-corrupted",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHBRwRw",
          name: "toolkit-1",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHpHxiQ",
          name: "reusable-workflow-test",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIul8QA",
          name: "publish-action",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjY4MTI3NTM3",
    email: "",
    name: "Mona Lisa Octocat",
    login: "octocato",
    repositories: {
      nodes: [
        {
          id: "MDEwOlJlcG9zaXRvcnkyNzg3MjEzNjI=",
          name: "octocato",
          issues: {
            nodes: [
              {
                bodyText: "#3 baybeeee",
                id: "MDU6SXNzdWU5ODAwMDUwMTA=",
                state: "OPEN",
                title: "pog",
                comments: {
                  totalCount: 0,
                  nodes: [],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyNzg3MjI4MTc=",
          name: "atom",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "MDEwOlJlcG9zaXRvcnkyNzg3MjI4NzU=",
          name: "vscode",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIFE6EQ",
          name: "react-native-web",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 4,
    },
  },
  {
    id: "MDQ6VXNlcjc1MTQ4Nzc0",
    email: "",
    name: null,
    login: "webdev03",
    repositories: {
      nodes: [
        {
          id: "R_kgDOG3XAbA",
          name: "wininfosvelte",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOG6gvKQ",
          name: "neofetch-js",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOG77N5g",
          name: "SaveAspectOS",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOG8XR1g",
          name: "ScratchTools-other",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHAKi3Q",
          name: "Catalyst",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHEOUiw",
          name: "MyScratchPage",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHHf75g",
          name: "ScratchTutorials",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHHhHUQ",
          name: "test",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHJZz5A",
          name: "SimpleWebCloner",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHLxjYg",
          name: "periscope",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOHNCfaA",
          name: "periscope-api",
          issues: {
            nodes: [
              {
                bodyText:
                  "Because I'm thinking of also giving Studio info to make this site a bit more different from the others. Link: https://api.scratch.mit.edu/studios/xxxxxx/ (xxxxx = id) The downside is that the user will have to enter the id, but it should be good, right?",
                id: "I_kwDOHNCfaM5JPMYz",
                state: "CLOSED",
                title: "Is there any way you can add studio api?",
                comments: {
                  totalCount: 4,
                  nodes: [
                    {
                      bodyText: "Yes I can add this in!",
                      author: {
                        login: "webdev03",
                      },
                      id: "IC_kwDOHNCfaM5CxnsG",
                    },
                    {
                      bodyText: "Thank you!",
                      author: null,
                      id: "IC_kwDOHNCfaM5CyrVf",
                    },
                    {
                      bodyText: "I think it can stay open until I do it",
                      author: {
                        login: "webdev03",
                      },
                      id: "IC_kwDOHNCfaM5Cy1a1",
                    },
                    {
                      bodyText: "OK",
                      author: null,
                      id: "IC_kwDOHNCfaM5C0lLJ",
                    },
                  ],
                },
              },
            ],
            totalCount: 1,
          },
        },
        {
          id: "R_kgDOHfD59g",
          name: "scratch-tutorials",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOH0Q14w",
          name: "coding-challenge",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIIBu9g",
          name: "python-beginner-projects",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOINoKtQ",
          name: "ScratchTools",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
  {
    id: "MDQ6VXNlcjYzNDQ5MDYy",
    email: "",
    name: "Riyadh Alkhanin",
    login: "MrRiybot",
    repositories: {
      nodes: [
        {
          id: "R_kgDOH4uqqA",
          name: "MrRiybot.github.io",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIB6kig",
          name: "TheEncryptionOfTheDecryption",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOICmXoA",
          name: "StablediffusionScratching",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIO0RHw",
          name: "Orientalist_stable_diffusion",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIZz4wA",
          name: "deep_disfluency",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIm7XLQ",
          name: "mi_card_flutter",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIm792g",
          name: "dicee_flutter_master",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOInXJ6w",
          name: "magic_8_ball_flutter",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOInwW9w",
          name: "quizzler_flutter_main",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIohayA",
          name: "destini_challenge_starting",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIpNgtg",
          name: "bmi_calculator_flutter",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIpzv7A",
          name: "clima_master",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIqWqgA",
          name: "bitcoin_ticker_flutter",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIvJFTw",
          name: "toxicity_inspector",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
        {
          id: "R_kgDOIvNGoQ",
          name: "keep_clean",
          issues: {
            nodes: [],
            totalCount: 0,
          },
        },
      ],
      totalCount: 15,
    },
  },
];