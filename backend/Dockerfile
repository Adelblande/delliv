FROM node:20-slim

RUN apt-get update -y && \
    apt-get install procps -y && \
    apt-get install -y openssl && \
    npm install -g @nestjs/cli@10.0.0

WORKDIR /home/node/app 

USER node

CMD [ "tail", "-f", "/dev/null" ]
