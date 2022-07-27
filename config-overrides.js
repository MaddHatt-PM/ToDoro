const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@Assets': './src/Assets',
        '@Components': './src/Components',
        '@Utils': './src/Utils',
        '@Views': './src/Views'
    })(config);

    return config;
};