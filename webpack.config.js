const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const config = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "vue-fullscreen.js",
    libraryTarget: "umd"
  },
  resolve: {
    alias: {
      "@": resolve("src")
    }
  }
};

module.exports = config;
