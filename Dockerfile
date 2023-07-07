FROM node:20-buster

WORKDIR .
COPY package*.json ./

RUN npm ci --only=production
COPY . .
ENV DD_API_KEY=d8cdea67907ec91ea23b648ee2efb3b5
ENV DD_SITE="datadoghq.com"
RUN bash -c "$(curl -L https://s3.amazonaws.com/dd-agent/scripts/install_script_agent7.sh)"
RUN datadog-agent status

CMD ["node", "server.js"]