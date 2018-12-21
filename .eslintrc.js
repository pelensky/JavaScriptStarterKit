module.exports = {
  "env": {
    "jest/globals": true
  },
  "extends": "airbnb-base",
  "globals": {
    "window": true,
    "document": true
  },
  "plugins": ["jest"],
    "rules": {
      "import/prefer-default-export": "off",
      "class-methods-use-this": "off"
    }
};
