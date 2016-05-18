import envLoder from '../index.js';
import assert from 'assert';

const tests = {
  happyPath: () => {
    envLoder.load({
      path: './test',
    });

    assert(process.env.FOO === 'BAR');
    assert(process.env.BAZ === 'BUZZ');
  },
  whenProd: () => {
    process.env.NODE_ENV = 'production';

    envLoder.load({
      path: './test',
    });

    assert(process.env.FOO_PROD === 'BAR_PROD');
    assert(process.env.BAZ_PROD === 'BUZZ_PROD');
  }
}

for (const test in tests) {
  process.env = {};
  tests[test].call(null);
  process.env = {};
}

