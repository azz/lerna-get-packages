"use strict";

var PackageUtilities = require("lerna/lib/PackageUtilities");
var Repository = require("lerna/lib/Repository");

module.exports = function(rootDir) {
  var packages = PackageUtilities.getPackages(new Repository(rootDir));
  return packages.map(function(pkg) {
    return {
      location: pkg._location,
      package: pkg._package,
    };
  });
};
