# Deploy vite app

Vite is typically used as a development server and may not be available in a production environment. In that case, you'll need to configure your project to build a production-ready bundle that can be served by a static server.

Here's an updated approach to deploy a Vite-based React project to Dokku:

1. Add a production build script to your `package.json` file. Replace the existing `"build"` script with the following:

   ```json
   "scripts": {
     "build": "vite build",
     "test": "vite test",
     "lint": "vite lint",
     "predeploy": "npm run build"
   },
   ```

   The `"predeploy"` script will be executed automatically before deploying your application.

2. Install a static server as a production dependency. Dokku recommends using the `http-server` package, which you can install using the following command:

   ```bash
   npm install --save http-server
   ```

3. Create a `static.json` file in the root directory of your project. This file specifies the configuration for the static server. Add the following content to the `static.json` file:

   ```json
   {
     "root": "dist",
     "cleanUrls": true,
     "rewrites": [{ "source": "/**", "destination": "/index.html" }]
   }
   ```

   This configuration assumes that your Vite build output is in the `dist` directory. Adjust the `"root"` property if your build output directory is different.

4. Modify the `"start"` script in your `package.json` file to start the static server. Replace the existing `"start"` script with the following:

   ```json
   "scripts": {
     "build": "vite build",
     "test": "vite test",
     "lint": "vite lint",
     "predeploy": "npm run build",
     "start": "http-server ./dist -p $PORT"
   },
   ```

   The `http-server` command will start the static server and bind it to the `$PORT` environment variable, which is provided by Dokku.

5. Save the `package.json` and `static.json` files.

Now, when you deploy your React project to Dokku, the `predeploy` script will build the project using Vite's production build command. The `start` script will then start the static server, which will serve your built React application.

Ensure that you have a proper Dokku configuration in place, such as the necessary `Procfile`, before deploying your application.
