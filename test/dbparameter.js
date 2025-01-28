const test = require('ava');
const cfntest = require('@cfn-modules/test');

test.serial('dbparameter', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/dbparameter.yml`, stackName, {}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

// TODO test with-alerting
// TODO test with-hosted-zone-private
// TODO test with-bastion (SQL access)
// TODO test with-kms
