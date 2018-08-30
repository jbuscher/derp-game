module.exports = {
    "extends": "airbnb",
    "rules" : {
        "react/prop-types": 0,
        "react/prefer-stateless-function": [2, { "ignorePureComponents": true }]
    },
    "env": {
        "browser": true,
        "node": true,
    }
};