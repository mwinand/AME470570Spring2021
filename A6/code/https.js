var homeDir = require('path').join(require('os').homedir());
require('greenlock-express').create({
  version: 'draft-11'
, server: 'https://acme-v02.api.letsencrypt.org/directory'
, email: 'mwinand@asu.edu'                                     // CHANGE THIS
, agreeTos: true
, approveDomains: [ 'mwinand.httpsexample.xyz', 'www.mwinand.httpsexample.xyz' ]              // CHANGE THIS
, store: require('greenlock-store-fs')
, configDir: homeDir
, app: require('./server.js')
}).listen(8080, 8443);
