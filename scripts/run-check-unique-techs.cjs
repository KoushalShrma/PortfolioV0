// Bootstrap that registers esbuild and loads the TS test
const reg = require('esbuild-register');
if (reg && typeof reg.register === 'function') {
  reg.register();
} else if (reg && typeof reg === 'function') {
  // some versions export directly
  reg();
}
require('./check-unique-techs.ts');
