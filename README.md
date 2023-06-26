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

This project is configured to be deployed on dokku. To make the deploy work with Vite, we needed to add [these changes](docs/deploy-vite.md)

# Configure your git

Go to the terminal and, from inside the folder of your project, run:

```bash
  git remote add dokku dokku@<IP ADDRESS>:portfolio
```

The deploy is as easy as running `git push dokku main`
