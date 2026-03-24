FROM node

WORKDIR /developer/nodejs/Flights-Notification-Service

COPY . .

RUN npm ci

CMD ["npm","run","dev"]