import assert from 'power-assert';

import pkg from '../package.json';

import * as src from '../src/';

describe(pkg.name, function() {
  it('loads without crashing', () => {
    assert.equal(src.helloWorld(), "Hi");
    assert.equal(src.obj.a, "1");
  });
  
});
