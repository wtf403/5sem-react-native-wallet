const createExpoWebpackConfigAsync = require("@expo/webpack-config");

/**
 * @see https://github.com/expo/expo/issues/6660#issuecomment-667991626
 * @see https://github.com/kristerkari/react-native-svg-transformer/issues/135#issuecomment-1008310514
 */
const withSVGR = (config) => {
  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf) {
      rule.oneOf.unshift({
        test: /.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("@svgr/webpack"),
            options: {
              expandProps: "end",
              native: true,
            },
          },
        ],
      });
    }

    return rule;
  });

  return config;
};

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Customize the config before returning it.
  return withSVGR(config);
};
