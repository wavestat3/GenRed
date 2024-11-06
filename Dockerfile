FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Create necessary directories
RUN mkdir -p /data

# Expose port
EXPOSE 1880

# Start Node-RED
CMD ["npm", "start"]
