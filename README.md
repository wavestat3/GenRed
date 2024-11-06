# Node-RED AI Platform

An AI-powered document processing and workflow automation platform built with Node-RED.

## Features
- Document upload and processing
- Multi-model AI integration (OpenAI, Anthropic, Hugging Face)
- Interactive dialogue system
- Dynamic content generation
- Customizable workflows

## Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Start Node-RED
npm start
```

### Environment Variables
Copy `.env.example` to `.env` and fill in your values:
```
NODE_RED_USERNAME=admin
NODE_RED_PASSWORD=your_secure_password
NODE_RED_CREDENTIAL_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
```

### Deployment
This project is configured for easy deployment on Railway.app.

1. Fork this repository
2. Create new Railway project
3. Connect to your GitHub repository
4. Set environment variables
5. Deploy!

## Development

### Adding New Nodes
Place custom nodes in `nodes/` directory and register them in `settings.js`.

### Flows
Default flows are stored in `flows/defaults.json`.

## License
MIT
