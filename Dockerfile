FROM node:16

# Create the app directory
WORKDIR /src

# Install app dependencies
COPY package*.json /

RUN npm install
# RUN npm ci --only=production

#Bundle app source
COPY . /

#EXPOSE 8080
#CMD ["node", "index.js"]