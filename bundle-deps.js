#!/usr/bin/env node

var p = ''
  , argv = require('optimist').argv
  , writeFile = require('fs').writeFile
  , resolve = require('path').resolve

if (argv._.length) {
  p = argv._[0];
}
p = p.replace(/\/?package\.json$/, '');
p || (p = '.');
p += '/package.json';
p = resolve(p);

var data = require(p);
delete data.bundleDependencies;
delete data.bundledDependencies;
data.bundledDependencies = Object.keys(data.dependencies || {});

writeFile(p, JSON.stringify(data, null, 2), 'utf8', function (err) {
  if (err) throw err;
  console.log('bundled ' + data.bundledDependencies.length + ' dependencies.');
});