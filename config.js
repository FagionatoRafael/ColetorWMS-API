const PORT = process.env.PORT || 8080;
let envs;

if(PORT === 8080) {
    const dotenv = require('dotenv');
    const result = dotenv.config();

    if (!('error' in result)) {
        envs = result.parsed;
    }
} else {
    const _ = require('lodash');
    
    envs = {};
    _.each(process.env, (value, key) => envs[key] = value);
}

module.exports = envs;