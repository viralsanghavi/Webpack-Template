// eslint-disable-next-line import/no-extraneous-dependencies
const pkg = require("find-package-json");

const pkgAppEnv = pkg().next().value.appEnv;
const variation = process.env.VARIATION || "gavki";
const stage = process.env.STAGE || "dev";

module.exports = JSON.stringify(pkgAppEnv[stage][variation]);
