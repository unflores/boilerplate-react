# Boilerplate react app

I kept building small react apps so this is everything I need to jump into react and start playing around with something new.

## Get started

```
  # Install yarn for package managing
  npm install -g yarn
  # Install nodemon for dev server
  npm install -g nodemon
  # Install the packages
  yarn install
  # Watch for file changes
  yarn run watch
```

## Project Setup

I put everything for react in the front directory, this is because I like to call the directory for my application code `app`.  However,
it is quite possible that I will have a small project with node.js code as well and I'll want to put that in an `app` directory too.

All of the assets are built to `front/assets` and I have aliased `front/app` to `frontapp` in webpack so that if imports go to an annoying
depth, I can reference them off of the alias instead of relative paths.


