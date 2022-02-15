FROM node:alpine3.11

WORKDIR /website
COPY . .

RUN npm i

# ENV user alaa

CMD ["npm","start"]