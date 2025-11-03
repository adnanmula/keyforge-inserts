# Use Node 13 LTS
FROM node:18

# Set working directory
WORKDIR /usr/src/app
#RUN npm install -g ember-cli@3.28

# Copy package.json and package-lock.json
#COPY package.json package-lock.json ./

# Install dependencies
#RUN npm install

# Copy the rest of the project
#COPY . .

# Expose Ember default port
EXPOSE 4200

# Run app
CMD ["npm", "start"]
