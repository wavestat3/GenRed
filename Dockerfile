FROM node:18-alpine

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Bundle app source
COPY . .

# Create data directory
RUN mkdir -p node-red-data

# Expose port
EXPOSE 1880

# Start Node-RED
CMD ["npm", "start"]
