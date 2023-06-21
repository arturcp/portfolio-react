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

Some steps were taken to make the deploy work smoothly with dokku. You can find [the steps here]https://medium.com/@jascha.burmeister/build-and-deploy-static-vue-react-spa-on-dokku-bafc3d36301f).

# Configure your git

Go to the terminal and, from inside the folder of your project, run:

```bash
  git remote add dokku dokku@<IP ADDRESS>:portfolio
```

The deploy is as easy as running `git push dokku main`
