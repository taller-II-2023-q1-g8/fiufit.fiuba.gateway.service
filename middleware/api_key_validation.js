const axios = require('axios')

const url_services = process.env.URL_SERVICES;
if (url_services == null){
    console.log("No URL found for Service Manager Microservice in Environment Variables.")
    process.exit(-1)
}

async function validateApiKey(apiKey) {
    try {
      let url = url_services + '/services/validate'
      console.log(url);
      const response = await axios({
        method: 'get',
        url: url,
        headers: {}, 
        data: {
          apiKey: apiKey, // This is the body part
        }
      });
      //const response = await axios.get(url, { apiKey });
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }

async function serviceIsActive(serviceName) {
  console.log("Service Name:", serviceName)
  try {
    const response = await axios.get(url_services + '/services/state/' + serviceName);
    console.log("Response:", response.status);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

module.exports = {validateApiKey, serviceIsActive};