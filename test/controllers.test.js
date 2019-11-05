const controller = require('../src/controllers/airports-controller')();

test('Should return all airports name in alphabetc order', async () => {
  const res = await controller.getAll();
  expect(res.length).toBeGreaterThan(1);
});
