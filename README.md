# weather_log
A minimal nodejs application that logs the current weather for later historical reference

## Technologies
* Node.js
* pg (PostgreSQL connector)
* node-fetch (For fetching API data)
* Dark Sky - https://darksky.net/dev
(A sane and modern weather API that's easy to work with and has a generous free tier)
* PostgreSQL database (A favorite free and open-source database of mine)
* Cron (The task scheduling tool of choice on Linux systems)

## Getting Started
```git clone git@github.com:Adobe-Android/weather_log.git```

You will either need to replace my provided SQL scripts with equivalents for your database of choice or you will need to set up Postgres.
There are many hosted database options available making things easier to get into.

Once in place, modify the only SQL in the code. In app/fetch.js, in the insertData function.
If you chose to use Postgres and my scripts, this step will not be necessary.
Make sure that you have both nodejs and npm installed on your system.
You can check this using the following:

```node -v``` and ```npm -v```

Now, you're ready to run this below. You can check the package.json file to see what this does.

```npm start```

## Automation
I'm using volta - https://volta.sh/ to manage my npm and nodejs versions. You don't have to do this, but it can be nice for managing nodejs versions.
I've included an example crontab for reference. If you choose not to use volta, your crontab will look more like this.
```* * * * * /usr/bin/node /home/user_web/weather_log/app/app.js```
