#!/usr/bin/env node

const { description } = require('commander');
const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .description(pkg.description)
  .parse(process.argv);

