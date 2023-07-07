FROM node:20-alpine3.17

WORKDIR .
COPY package*.json ./

RUN npm ci --only=production
COPY . .
ENV DD_API_KEY=d8cdea67907ec91ea23b648ee2efb3b5
ENV DD_SITE="datadoghq.com"

CMD ["node", "server.js"]
