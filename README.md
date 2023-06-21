# Portfolio with React and Vite

## Execute

First, ensure all libraries are installed:

```
yarn install
```

Then, start the server:

```
yarn dev
```

## To deploy

This project is configured to be deployed on dokku. To make the deploy work with Vite, we needed to add this env var to the app on Dokku:

```
dokku config:set portfolio NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false
```

reference: https://stackoverflow.com/questions/68590569/heroku-deploy-with-vitejs-error-h10-vite-not-found

# Configure your git

Go to the terminal and, from inside the folder of your project, run:

```bash
  git remote add dokku dokku@<IP ADDRESS>:portfolio
```

The deploy is as easy as running `git push dokku main`
