const path = require('path');

// alias
module.exports = {
  alias: {
    Theme: path.resolve(__dirname, '../src/styles'),
    Components: path.resolve(__dirname, '../src/components')
  }
}