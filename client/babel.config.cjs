module.exports = api => {
    const isTest = api.env('test');
    console.log(isTest)

    if (isTest) {
        return {
            presets: [
                ["@babel/preset-react", {
                    runtime: "automatic"
                 }],
                ["@babel/preset-env", {
                    targets: {
                        browsers: "> 0.25%, not dead"
                    }
                }],
                "@babel/preset-typescript",
            ],
            plugins: [
                "inline-react-svg",
                ["styled-components",
                    { 
                        "ssr": true,
                        "displayName": true,
                        "preprocess": true
                    }
                ],
                ["module-resolver", {
                root: ["./"],
                alias: {
                    "~": "./src",
                    "assets": "./assets",
                    "atoms": "./src/components/Atoms",
                    "molecules": "./src/components/Molecules",
                    "organisms": "./src/components/Organisms",
                    "containers": "./src/containers",
                    "hooks": "./src/hooks",
                    "pages": "./src/pages",
                    "public": "./public",
                    "providers": "./src/providers",
                    "types": "./src/types",
                    "localUtils": "./src/utils"
                }
                }]
            ]
        }    
    } else {
        return {
            presets: ["@babel/preset-react"],
            plugins: [
              "inline-react-svg",
              ["styled-components", { 
                "ssr": true,
                "displayName": true,
                "preprocess": false
              }],
              ["module-resolver", {
                "root": ["./"],
                "alias": {
                  "~": "./src",
                  "assets": "./assets",
                  "atoms": "./src/components/Atoms",
                  "molecules": "./src/components/Molecules",
                  "organisms": "./src/components/Organisms",
                  "containers": "./src/containers",
                  "hooks": "./src/hooks",
                  "pages": "./src/pages",
                  "public": "./public",
                  "providers": "./src/providers",
                  "types": "./src/types",
                  "localUtils": "./src/utils"
                }
              }]
            ]
          }
    }

}