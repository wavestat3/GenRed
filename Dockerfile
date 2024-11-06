FROM node:18-alpine

# Add git for projects feature
RUN apk add --no-cache git

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Create required directories
RUN mkdir -p data

# Bundle app source
COPY . .

# Set permissions
RUN chown -R node:node /usr/src/app

# Switch to non-root user
USER node

# Expose port
EXPOSE 1880

# Start Node-RED
CMD ["npm", "start"]
