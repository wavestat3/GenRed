const http = require('http');
const express = require('express');
const RED = require('node-red');

// Create an Express app
const app = express();

// Create a server
const server = http.createServer(app);

// Create the settings object
const settings = {
    httpAdminRoot: '/admin',
    httpNodeRoot: '/api',
    userDir: './node-red-data',
    functionGlobalContext: {},
    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.NODE_RED_USERNAME || "admin",
            password: process.env.NODE_RED_PASSWORD || "password",
            permissions: "*"
        }]
    },
    editorTheme: {
        projects: {
            enabled: false
        }
    }
};

// Initialize the runtime
RED.init(server, settings);

// Serve the editor UI
app.use(settings.httpAdminRoot, RED.httpAdmin);

// Serve the http nodes UI
app.use(settings.httpNodeRoot, RED.httpNode);

// Get port from environment variable
const port = process.env.PORT || 1880;

server.listen(port);

// Start the runtime
RED.start().then(() => {
    console.log(`Node-RED is running on port ${port}`);
}).catch(err => {
    console.error('Failed to start Node-RED:', err);
    process.exit(1);
});
