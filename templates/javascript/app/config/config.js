const { resolve } = require("path");

const config = {
  port: 80,
  session_secret: "keyboard_ca5316t",
  static_route: "/static",
  paths: {
    views: resolve("./app/views"),
    models: resolve("./app/models"),
    controllers: resolve("./app/controllers"),
    libraries: resolve("./app/library"),
    configs: resolve("./app/config"),
    static: resolve("./static")
  },
  reportRequests: true,
  environment: "DEVELOPMENT"
}

module.exports = config;
