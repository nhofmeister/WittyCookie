WittyCookie
===========

JS / Meteor learnings

Meteor
-------

We use meteor for this test app. For more info, check out the meteor site.

https://www.meteor.com/

Usage
-------

* install meteor first `curl https://install.meteor.com | /bin/sh` (see quick start guide at http://docs.meteor.com/)
* checkout the project: `git clone git@github.com:nhofmeister/WittyCookie.git`
* change into the wittycookie directory and run `meteor` in the command line
* your server should listen on `http://localhost:3000/` now


Mongodb
---------

You can switch to mongodb console when your app is running via: 
meteor mongo

Show existing databases
show dbs

Switch to meteor database:
use meteor

show existing collections in database:
show collections

show content of collection gorn:
db.gorn.find()

remove collection gorn:
db.gorn.remove()
