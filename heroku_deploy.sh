#! /bin/bash/env


heroku container:push --app=protected-tor-19659 web

heroku container:release --app=protected-tor-19659 web