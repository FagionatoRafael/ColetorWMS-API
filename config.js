let envs;

if (process.env.DBNAME !== 'production'){ 
    const dotenv = require('dotenv'); 

    const result = dotenv.config();
    envs = result.parsed;
} else {
    const _ = require('lodash');
    envs = {};
    _.each(process.env, (value, key) => envs[key] = value);
}
console.log(process.env)
module.exports = envs;