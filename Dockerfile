FROM node:19-alpine3.16

WORKDIR .
COPY package*.json ./

RUN npm ci --only=production
COPY . .
RUN apt-get update && apt-get install -y curl
RUN apt-get update && apt-get install -y bash
RUN DD_AGENT_MAJOR_VERSION=7 DD_API_KEY=${DD_API_KEY} bash -c "$(curl -L https://raw.githubusercontent.com/DataDog/datadog-agent/master/cmd/agent/install_script.sh)"

CMD ["node", "server.js"]