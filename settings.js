module.exports = {
    uiPort: process.env.PORT || 1880,
    httpAdminRoot: '/admin',
    httpStatic: 'public',
    
    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.NODE_RED_USERNAME || "admin",
            password: process.env.NODE_RED_PASSWORD || "password",
            permissions: "*"
        }]
    },

    // Disable editor authentication for testing
    disableEditor: false,
    
    // Required for Railway
    httpServerOptions: {
        'max-old-space-size': '256'
    },

    functionGlobalContext: {},

    // Enable CORS
    httpNodeCors: {
        origin: "*",
        methods: ["GET", "PUT", "POST", "DELETE"]
    }
};
