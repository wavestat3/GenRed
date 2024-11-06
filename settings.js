module.exports = {
    flowFile: 'flows/defaults.json',
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || 'a-secret-key',
    
    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.NODE_RED_USERNAME || "admin",
            password: process.env.NODE_RED_PASSWORD || "password",
            permissions: "*"
        }]
    },

    // Node-RED settings
    uiPort: process.env.PORT || 1880,
    httpAdminRoot: '/admin',
    httpStatic: 'public',
    
    // Function node settings
    functionGlobalContext: {
        // Enable access to environment variables in function nodes
        process: process
    },
    
    // Security settings
    editorTheme: {
        projects: {
            enabled: true
        }
    },

    // Custom node settings
    nodesDir: './nodes',
    
    // Secure HTTP settings
    https: {
        enabled: process.env.HTTPS === 'true'
    }
};
