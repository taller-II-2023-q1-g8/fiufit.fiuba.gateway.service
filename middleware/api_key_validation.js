const axios = require('axios')

const url_services = process.env.URL_SERVICES;
if (url_services == null){
    console.log("No URL found for Service Manager Microservice in Environment Variables.")
    process.exit(-1)
}

async function validateApiKey(apiKey) {
    try {
      const response = await axios.get(url_services + '/validate', { apiKey });
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }

async function serviceIsActive(serviceName) {
  try {
    const response = await axios.get(url_services + '/state/' + serviceName);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

module.exports = {validateApiKey, serviceIsActive};