const test = require('ava');
const cfntest = require('@cfn-modules/test');

test.serial('secret', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/secret.yml`, stackName, {}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});
