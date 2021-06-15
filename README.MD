# Modern Frontend App Boiler Plate

This is an app boiler plate for web apps that utilize modern frontend development tools such as webpack, typescript, babel, sass, less e.t.c, where using a full-fledged frontend framework may be considered overkill or for those who don't like using frontend frameworks altogether.

At the core, it's a just pre-configured webpack setup that supports typescript and sass out of the box. It also comes with the webpack dev server pre-configured with live reloading so as to speed up development. No assumptions were made as to whether you would be making a SPA(Single Page Application) or multi-page app.

To build a SPA, all you need to do is add and configure a frontend router and modify the [index.htm](src/index.htm) file as required.

Multi-page setup is as easy as creating entries for each page by adding a new [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) object in the [webpack config file](webpack.config.js) to point to the page.

For more information on how to further configure this boiler plate to suite your needs, checkout [the webpack docs.](https://webpack.js.org/concepts/)

Developed and maintained by [Mohammed Adekunle](https://mohammedadekunle.com.ng).

# Setup & Usage

- Clone the repo on your development machine.
- Run `npm i` to install dependencies.
- Run `npm run dev` to fire up the dev server.
- Run `npm run build` to compile the files into a standalone app for production.

# Licensing

This project is licensed under the [MIT](LICENSE) license.