const client = require('../src/services/airports-client')();

test('Shoud return all airports name from exernal API', async () => {
  const res = await client.getAirports('aaa');
  expect(res.status).toBe(200);
  expect(res.data.items[0].display).toBe('Aeroportos');
});
