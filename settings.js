module.exports = {
    uiHost: "0.0.0.0",  // Important: bind to all interfaces
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

    flowFile: 'flows.json',
    userDir: './data',

    functionGlobalContext: {},

    exportGlobalContextKeys: false,

    httpNodeCors: {
        origin: "*",
        methods: "GET,PUT,POST,DELETE"
    },

    // Avoid memory issues
    httpServerOptions: {
        'max-old-space-size': '256'
    }
};
