FROM node:latest
RUN mkdir -p /home/app
WORKDIR /home/app
COPY ./client/package.json /home/app/
RUN npm install -g @angular/cli
RUN npm install
COPY ./client/ /home/app
EXPOSE 4200
CMD [ "npm", "start" ]
