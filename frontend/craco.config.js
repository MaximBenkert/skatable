// craco.config.js
module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            if (process.env.NODE_ENV === 'development') {
                // Aktivieren von Source Maps im Entwicklungsmodus
                webpackConfig.devtool = 'source-map';

                // Deaktivieren der Minifizierung im Entwicklungsmodus
                webpackConfig.optimization.minimize = false;
            }
            return webpackConfig;
        },
    },
};
