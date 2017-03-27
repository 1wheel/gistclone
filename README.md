# gistclone

clones a gist or bl.ock.org url without having to wait for the laggy gist.github.com page. 

# Usage 

Install:

    npm install -g gistclone

Then, copy the url of bl.ock.org and run: 

    gist-snap https://bl.ocks.org/1wheel/76f1f3330b09f5efa0b36fb2b9782e4f

This looks up the description of the gist and clones the gist a folder with that name:  

    git clone git@gist.github.com:76f1f3330b09f5efa0b36fb2b9782e4f.git ${description}`