# portfolio-react

## Execute

First, ensure all libraries are installed:

```
npm install
```

Then, start the server:

```
npm start
```

## To deploy

Configure your git
==================

Go to the terminal and, from inside the folder of your project, run:

```bash
  git remote add live ssh://user@mydomain.com/var/repos/portfolio.git
```

where `user` is your digital ocean's user and `mydomain` is the ip address of
your server or your domain.

On Digital Ocean, user is usually `root`. For now, the IP address is `167.71.177.56`.

### The Easy Way

There is a bash script that does all the steps you need to put code in production.
Just go to the terminal an run:

```
./bin/deploy.sh
```

It will also push code to the GitHub.

### The Complete way

Before you deploy, make sure you build the code to production:

```
npm run-script build
```

Then, to deploy your new code, do:

```bash
  git push live master
```

### To add libraries

```
npm i babel-core babel-loader babel-preset-env babel-preset-react -D
```

### Digital Ocean

The configuration on Digital Ocean is done using Ansible. Check the repository
`https://github.com/arturcp/digital-ocean` to know more.

### Useful links

* Source: [Error 500 Class - freeCodeCamp.org](https://www.freecodecamp.org/news/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75/)

* For a step by step example, check the commits here:
[GitHub - arturcp/portfolio-react](https://github.com/arturcp/portfolio-react)

* More here: [Webpack sem Medo — Parte 2: Loaders | Web Dev Drops](https://www.webdevdrops.com/webpack-sem-medo-parte-2-loaders-1d1239df3945/)

* To load external libs:
  * https://github.com/webpack/webpack/issues/512
  * https://github.com/webpack-contrib/imports-loader
  * https://github.com/webpack-contrib/exports-loader

* Flags:
  * https://www.npmjs.com/package/react-flag-icon-css
  * https://github.com/lipis/flag-icon-css
  * http://flag-icon-css.lip.is/
