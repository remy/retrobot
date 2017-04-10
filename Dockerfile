FROM mhart/alpine-node:7

COPY package.json /webapp/package.json

WORKDIR /webapp

RUN npm install --production

COPY . /webapp

EXPOSE 8080

CMD npm start
