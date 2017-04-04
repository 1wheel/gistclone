# gistclone

clones a [gist.github.com](https://gist.github.com) or [bl.ocks.org](https://bl.ocks.org) url without having to wait for the laggy gist.github.com page. 

# Usage 

Install:

    npm install -g gistclone

Then, copy the url of a [bl.ocks.org](http://bl.ocks.org/)  and run: 

    gist-snap https://bl.ocks.org/1wheel/76f1f3330b09f5efa0b36fb2b9782e4f

This looks up the description of the gist and clones the gist a folder with that name:  

    git clone git@gist.github.com:76f1f3330b09f5efa0b36fb2b9782e4f.git ${description}


# More scripts

- [gistup](https://github.com/mbostock/gistup) is super handy for creating gists from the command line. 
- [gistsnap](https://github.com/1wheel/gistsnap) snapshot thumbnails for [bl.ocks.org](http://bl.ocks.org/)


