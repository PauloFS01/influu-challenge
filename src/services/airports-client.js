const axios = require('axios');

module.exports = () => {
  const client = {};
  client.getAirports = async filter => {
    try {
      const result = await axios.get(
        `https://www.decolar.com/suggestions?locale=pt-BR&profile=sbox-cp-vh&hint=${filter}&fields=city `
      );
      return result;
    } catch (error) {
      return error;
    }
  };
  return client;
};
