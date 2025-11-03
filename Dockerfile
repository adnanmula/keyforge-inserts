FROM node:13

WORKDIR /usr/src/app
EXPOSE 4200

CMD ["npm", "start"]
