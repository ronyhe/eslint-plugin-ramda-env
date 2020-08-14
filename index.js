const R = require('ramda')
const {flip, pair, fromPairs, keys, map} = R
const flipair = flip(pair)

module.exports = {
    environments: {
        ramda: fromPairs(map(flipair(false), keys(R)))
    }
}
