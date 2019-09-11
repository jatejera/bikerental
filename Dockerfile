FROM node:10.14.1-stretch
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production && npm cache clean --force
COPY . .
ENV NODE_ENV production
ENV PORT 80
EXPOSE 80
CMD [ "npm", "start" ]