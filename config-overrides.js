const PrerenderSPAPlugin = require("prerender-spa-plugin");
const rewireStyledComponents = require("create-react-app-rewire-styled-components");
const path = require("path");

module.exports = (config, env) => {
  config = rewireStyledComponents(config, env);

  if (env === "production") {
    config.plugins = config.plugins.concat([
      new PrerenderSPAPlugin({
        routes: ["/"],
        staticDir: path.join(__dirname, "build"),
      }),
    ]);
  }

  return config;
};
