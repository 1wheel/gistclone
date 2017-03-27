#!/usr/bin/env node

var child = require("child_process"),
  request = require("request"),
  minimist = require("minimist");

var url = process.argv.slice(2)[0];
var slug = url.split("/")[url.split("/").length - 1];

request(
  "https://api.github.com/gists/" + slug,
  { headers: { "User-Agent": "gist-clone" } },
  (err, res, body) => {
    if (err) return console.log(err);
    var description = JSON.parse(body).description;

    var cmd = `git clone git@gist.github.com:${slug}.git "${description || slug}"`;
    console.log(cmd);
    child.exec(cmd, (err, stdout, stderr) => {
      if (stdout) console.log(stdout);
      if (stderr) console.log(stderr);
    });
  }
);
