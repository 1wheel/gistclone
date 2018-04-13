#!/usr/bin/env node

var child = require("child_process"),
  request = require("request"),
  minimist = require("minimist");

var argv = require("minimist")(process.argv.slice(2), { boolean: true });

var url = argv._[0].replace('/raw', '');
var slug = url.split("/")[url.split("/").length - 1];

request(
  "https://api.github.com/gists/" + slug,
  { headers: { "User-Agent": "gist-clone" } },
  (err, res, body) => {
    if (err) return console.log(err);
    var description = JSON.parse(body).description;

    var remote = argv.https
      ? `https://gist.github.com/${slug}.git`
      : `git@gist.github.com:${slug}.git`;
    var cmd = `git clone ${remote} "${description || slug}"`;
    console.log(cmd + "\n");
    
    child.exec(cmd, (err, stdout, stderr) => {
      if (stdout) console.log(stdout);
      if (stderr) console.log(stderr);
      if (stderr.includes("Permission denied (publickey).")) {
        var outstr = [
          `To clone over ssh you'll need to add your publickey to github`,
          `Try following these instructions https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/`,
          `Or clone over https: gistclone --https ${url}`
        ];
        console.log(outstr.join("\n"));
      }
    });
  }
);
