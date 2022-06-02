const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig(
  {
    transpileDependencies: true,
  },
  {
    module: {
      rules: [
        // ... other rules omitted
        {
          test: /\.css$/,
          use: [
            "vue-style-loader",
            {
              loader: "css-loader",
              options: {
                // enable CSS Modules
                modules: true,
                // customize generated class names
                localIdentName: "[local]_[hash:base64:8]",
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['babel-loader', 'vue-svg-loader'],
        },
      ],
    },
  }
);
