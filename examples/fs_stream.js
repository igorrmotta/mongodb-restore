'use strict';
/**
 * @file fs stream example
 * @module mongodb-restore
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var restore = require('..'); // use require('mongodb-restore') instead
var fs = require('fs');

/*
 * use
 */
var stream = fs.createReadStream('download.tar'); // simulate filesystem stream

restore({
  uri: 'uri', // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
  stream: stream, // send this stream into db
  callback: function(err) { // callback after restore

    console.log('done');
  }
});
