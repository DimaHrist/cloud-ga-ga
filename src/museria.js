const Client = require('museria').Client;
const utils = require('museria/src/utils');

async function museria() {
  console.log('muserial is works')

  const client = new Client({address: 'localhost:2079'});
  await client.init();

  // try {
  //   const client = new Client({address: 'localhost:2079'});
  //   console.log(client);
  //   await client.init();
  // }
  // catch {
  //   console.error(err.stack);
  //   process.exit(1);
  // }
}
