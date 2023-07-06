FROM node:19-alpine3.16

WORKDIR .
COPY package*.json ./

RUN npm ci --only=production
COPY . .
RUN DD_AGENT_MAJOR_VERSION=7 DD_API_KEY=${DD_API_KEY} bash -c "$(curl -L https://raw.githubusercontent.com/DataDog/datadog-agent/master/cmd/agent/install_script.sh)"

#RUN docker run -d --name dd-agent -v /var/run/docker.sock:/var/run/docker.sock:ro -v /proc/:/host/proc/:ro -v /sys/fs/cgroup/:/host/sys/fs/cgroup:ro -e DD_API_KEY=d8cdea67907ec91ea23b648ee2efb3b5 -e DD_SITE="datadoghq.com" gcr.io/datadoghq/agent:7

CMD ["node", "server.js"]