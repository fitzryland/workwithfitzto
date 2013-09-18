---
title: Github Pages Work Flow
layout: single-document
excerpt: Oooooo it is so neat...
---
##Simple Version

###Branches
master
gh-pages
dev

The master branch is the stable version of the site. If anything goes wrong we can always just revert to the master branch. All development is done on the dev branch. When everything looks good locally we can merge the dev branch into the gh-pages branch. The gh-pages branch isn't really a bonified branch though. It just has the most up to date, but not nessisarily stable, copy of the site. So, when the dev branch is ready to go live the gh-pages branch needs to be blown away. Git merge probably isn't the right commant. merge --squash looked hopeful, but nope. Rebase doesn't look right either.

##With Testing Site

###Remotes
production
testing

###Branches
master
gh-pages
dev
hold

This one works pretty much the same, but we use an additional repo to host the testing version. The hold branch is a maintenance page. To start off we 'super merge' the hold branch into the gh-pages branch and push that to production. We then 'super merge' the dev branch back into 'gh-pages' and push that to testing. Boom, we have a maintenance page in the final location, and we have a development copy on the testing repository. Now we have a pretty robust development methodology all set up on a free host that is perfectly integrated with Git.




### Jekyll Quirks
Earlier today the jekyll server died on a port and would not serve the local site and would not put another server on top of that port. Here is where I found the solution: http://stackoverflow.com/questions/4473229/rails-server-says-port-already-used-how-to-kill-that-process

"Assuming you're looking to kill whatever is on port 3000 (which is what webrick normally uses), type this in your terminal to find out the PID of the process:

$ lsof -wni tcp:3000
Then, use the number in the PID column to kill the process:

$ kill -9 PID"






