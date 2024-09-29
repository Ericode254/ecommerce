module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'store': "url('/static/images/store.jpg')",
      }),
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
