#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = `
For more content please see https://github.com/yxdtg/cassia-engine
`;

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create("create-cassia-engine", {
    templateRoot,

    defaultDescription: "description",
    defaultAuthor: "author",
    defaultEmail: "xxx@email.com",
    defaultTemplate: "default",
    defaultLicense: "ISC",
    defaultPackageManager: "pnpm",

    promptForDescription: false,
    promptForAuthor: false,
    promptForEmail: false,
    promptForTemplate: false,
    promptForLicense: false,
    promptForPackageManager: true,

    skipGitInit: true,
    skipNpmInstall: true,
    extra: {},
    after: ({ name, answers }) => {
        console.log("\x1b[32m%s\x1b[0m", `  cd ${name}`);
        console.log("\x1b[32m%s\x1b[0m", `  ${answers["node-pm"]} install`);
    },
    caveat,
});
