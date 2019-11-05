const client = require('../services/airports-client')();

module.exports = () => {
  const controller = {};
  const init = 'AAA';

  controller.getAll = async () => {
    const filters = await loop();
    const result = Promise.all(filters.map(filter => request(filter)));
    return result;
  };

  async function request(filter) {
    const res = await client.getAirports(filter);
    return res;
  }

  function loop() {
    let temp = init;
    const filters = [];
    for (let i = 0; i < 7; i += 1) {
      temp = generate(temp);
      if (temp === init) break;
      filters.push(temp);
    }
    return filters;
  }

  function generate(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const chars = [];
    for (let i = 0; i < str.length; i += 1) {
      chars.push(alphabet.indexOf(str[i]));
    }
    for (let i = chars.length - 1; i >= 0; i -= 1) {
      const tmp = chars[i];
      if (tmp >= 0 && tmp < 25) {
        chars[i] += 1;
        break;
      } else {
        chars[i] = 0;
      }
    }
    let newstr = '';
    for (let i = 0; i < chars.length; i += 1) {
      newstr += alphabet[chars[i]];
    }
    return newstr;
  }

  return controller;
};
